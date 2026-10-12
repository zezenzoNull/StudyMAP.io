/* Movable, resizable topic "windows" — the numbered .bubble articles inside #bubbles.
   Drag a bubble's header to move it (mouse/pen: after 4px of movement; touch: long-press ~350ms, so scrolling still works).
   Drag the corner grip to resize (min 240 × 120; a fixed height scrolls inside; double-click the grip = auto height).
   Keyboard: focus a header (Tab), Alt+Arrow moves 16px, Alt+Shift+Arrow resizes, Esc cancels a drag.
   The first move/resize freezes the whole grid into absolute positions ("free layout"), saved per topic in
   localStorage "mf-layout:<topicId>" = { v:1, items: { b0:{x,y,w,h|null}, … } } and restored on the next visit.
   Phones (≤700px) and print always show the normal stacked layout unless the reader turns on "✥ Arrange".
   Needs app/app.js (MF.drawArrows, MF.currentZoom, the "mf:render" event). No HTML strings: DOM is built with createElement. */
(function () {
  "use strict";
  const STORE = "mf-layout:", HINT_KEY = "mf-layout-hint";
  const GRID = 8, MIN_W = 240, MIN_H = 120, PAD_BOTTOM = 60, KEY_STEP = 16, GAP = 48;
  const MOVE_SLOP = 4, TOUCH_SLOP = 10, LONG_PRESS = 350, EDGE = 40;
  const mq = (q) => (window.matchMedia ? window.matchMedia(q) : { matches: false });
  const phoneMQ = mq("(max-width: 700px)"), reduceMQ = mq("(prefers-reduced-motion: reduce)");

  let S = null;          // state for the topic page currently shown
  let arrange = false;   // phones: "✥ Arrange" toggle — per visit, off by default so nobody gets stuck

  // ---------- helpers ----------
  const el = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  const MF = () => window.MF || {};
  const zoom = () => (MF().currentZoom ? MF().currentZoom() : 1) || 1;
  const redraw = () => { if (MF().drawArrows) MF().drawArrows(); };
  const snap = (v) => Math.round(v / GRID) * GRID;
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const r2 = (v) => Math.round(v * 100) / 100;
  const num = (v) => typeof v === "number" && isFinite(v);
  const isPhone = () => phoneMQ.matches;
  const movable = () => !isPhone() || arrange;
  const live = () => !!(S && S.wrap.isConnected);
  const bubbles = () => [...S.wrap.querySelectorAll(":scope > .bubble")];
  const isFree = () => S.wrap.classList.contains("mf-free");
  const width = () => S.wrap.clientWidth;
  const topY = () => parseFloat(getComputedStyle(S.wrap).paddingTop) || 0; // phones keep a band for the toolbar
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable: layout lasts for this visit */ } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* storage unavailable */ } }
  };

  // ---------- persistence ----------
  function load(id) {
    try {
      const m = JSON.parse(store.get(STORE + id) || "null");
      if (!m || m.v !== 1 || !m.items || typeof m.items !== "object") return null;
      const items = {};
      Object.keys(m.items).forEach((k) => {
        const it = m.items[k];
        if (!it || !num(it.x) || !num(it.y) || !num(it.w)) return;
        items[k] = { x: Math.max(0, it.x), y: Math.max(0, it.y), w: Math.max(MIN_W, it.w), h: num(it.h) ? Math.max(MIN_H, it.h) : null };
      });
      return Object.keys(items).length ? { v: 1, items } : null;
    } catch (e) { return null; }
  }
  const save = () => { if (S && S.model) store.set(STORE + S.id, JSON.stringify(S.model)); };
  let saveTimer = 0;
  const saveSoon = () => { clearTimeout(saveTimer); saveTimer = setTimeout(save, 250); };

  // ---------- applying a layout ----------
  function place(b, it, W) {
    const w = Math.min(it.w, W), x = clamp(it.x, 0, Math.max(0, W - w));
    b.style.left = x + "px";
    b.style.top = Math.max(it.y, S.minY || 0) + "px";
    b.style.width = w + "px";
    if (it.h) b.style.height = it.h + "px"; else b.style.removeProperty("height");
    b.classList.toggle("mf-fixed-h", !!it.h);
  }
  function unplace(b) {
    ["left", "top", "width", "height", "z-index"].forEach((p) => b.style.removeProperty(p));
    b.classList.remove("mf-fixed-h", "mf-lift", "mf-moving", "mf-resizing");
  }
  const bottomOf = (list) => list.reduce((m, b) => Math.max(m, b.offsetTop + b.offsetHeight), 0);
  function fitHeight(growOnly) {
    const h = Math.ceil(bottomOf(bubbles()) + PAD_BOTTOM), cur = parseFloat(S.wrap.style.height) || 0;
    if (!growOnly || h > cur) S.wrap.style.height = h + "px";
  }
  function applyFree() {
    const W = width(), list = bubbles(), fresh = [];
    S.wrap.classList.add("mf-free");
    S.minY = topY();
    list.forEach((b) => { const it = S.model.items[b.id]; if (it) place(b, it, W); else fresh.push(b); });
    // Bubbles added to the topic after this layout was saved go underneath, in reading order.
    if (fresh.length) {
      let y = snap(bottomOf(list.filter((b) => !fresh.includes(b))) + GAP);
      fresh.forEach((b) => {
        const it = (S.model.items[b.id] = { x: 0, y, w: Math.min(W, 420), h: null });
        place(b, it, W);
        y = snap(y + b.offsetHeight + GAP);
      });
    }
    stack();
    fitHeight(false);
  }
  function applyGrid() {
    S.wrap.classList.remove("mf-free");
    S.wrap.style.removeProperty("height");
    bubbles().forEach(unplace);
  }
  function applyMode() {
    if (!live()) return;
    const on = movable();
    S.wrap.classList.toggle("mf-movable", on);
    S.wrap.classList.toggle("mf-phone", isPhone());
    bubbles().forEach((b) => {
      const h = b.querySelector(":scope > header");
      if (!h) return;
      if (on) { h.tabIndex = 0; h.setAttribute("aria-keyshortcuts", "Alt+ArrowLeft Alt+ArrowRight Alt+ArrowUp Alt+ArrowDown Alt+Shift+ArrowLeft Alt+Shift+ArrowRight Alt+Shift+ArrowUp Alt+Shift+ArrowDown"); }
      else { h.removeAttribute("tabindex"); h.removeAttribute("aria-keyshortcuts"); }
    });
    if (S.model && on && !S.printing) applyFree(); else applyGrid();
    S.lastW = width();
    updateBar();
    redraw();
  }
  // z-order: most recently moved on top, kept small and inside #bubbles' own stacking context.
  function stack() { S.order = S.order.filter((id) => document.getElementById(id)); S.order.forEach((id, i) => { document.getElementById(id).style.zIndex = String(2 + i); }); }
  function toFront(b) { S.order = S.order.filter((id) => id !== b.id); S.order.push(b.id); stack(); }

  // First move/resize: freeze every bubble where it is now (unzoomed px) and switch to absolute positioning.
  function freeze() {
    if (S.model) { if (!isFree()) applyFree(); return; }
    const z = zoom(), items = {};
    bubbles().forEach((b) => {
      // the exact (fractional) width keeps every line wrapping as before; a lifted bubble is scaled, so use its layout width
      const w = b.classList.contains("mf-lift") ? b.offsetWidth : b.getBoundingClientRect().width / z;
      items[b.id] = { x: r2(b.offsetLeft), y: r2(b.offsetTop), w: r2(w), h: null };
    });
    S.model = { v: 1, items };
    applyFree();
    hintSeen();
    updateBar();
  }
  const itemOf = (b) => S.model.items[b.id];

  // ---------- pointer drag / resize ----------
  function onPointerDown(e) {
    if (!live() || !movable() || S.g || S.printing) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const grip = e.target.closest(".mf-grip");
    const header = !grip && e.target.closest(".bubble > header");
    if (!grip && !header) return;
    if (header && e.target.closest("a, button, input, select, textarea")) return;
    const b = (grip || header).parentElement;
    if (!b || b.parentElement !== S.wrap) return;
    const g = { b, handle: grip || header, mode: grip ? "resize" : "move", id: e.pointerId, touch: e.pointerType === "touch",
      sx: e.clientX, sy: e.clientY, cx: e.clientX, cy: e.clientY, active: false, armed: false, timer: 0 };
    S.g = g;
    if (grip) e.preventDefault(); // no text selection starting from the grip
    if (g.touch && !grip) g.timer = setTimeout(() => arm(g), LONG_PRESS);
    window.addEventListener("pointermove", onPointerMove, true);
    window.addEventListener("pointerup", onPointerUp, true);
    window.addEventListener("pointercancel", onPointerUp, true);
  }
  // Touch long-press reached: lift the bubble so the reader feels it "pick up"; the next finger move drags it.
  function arm(g) {
    if (!S || S.g !== g) return;
    g.armed = true;
    g.b.classList.add("mf-lift");
    // a tiny buzz where supported (only after the reader has tapped the page, or Chrome logs an intervention)
    try { if (navigator.vibrate && navigator.userActivation && navigator.userActivation.hasBeenActive) navigator.vibrate(8); } catch (e) { /* no vibration */ }
  }
  function onPointerMove(e) {
    const g = S && S.g;
    if (!g || e.pointerId !== g.id) return;
    g.cx = e.clientX; g.cy = e.clientY;
    if (!g.active) {
      const dist = Math.hypot(g.cx - g.sx, g.cy - g.sy);
      if (g.touch && g.mode === "move" && !g.armed) { if (dist > TOUCH_SLOP) end(false); return; } // it's a scroll
      if (!g.armed && dist <= MOVE_SLOP) return;
      begin(g);
    }
    e.preventDefault();
    queueFrame();
  }
  function begin(g) {
    clearTimeout(g.timer);
    g.active = true;
    freeze();
    const it = itemOf(g.b), z = zoom(), o = S.wrap.getBoundingClientRect();
    g.z = z;
    g.start = { x: it.x, y: it.y, w: it.w, h: it.h };
    // Work from the bubble's layout box (unaffected by the lift scale) in unzoomed px.
    const bx = g.b.offsetLeft, by = g.b.offsetTop, bw = g.b.offsetWidth, bh = g.b.offsetHeight;
    const px = (g.sx - o.left) / z, py = (g.sy - o.top) / z;
    g.ox = px - bx; g.oy = py - by;               // grab point inside the bubble
    g.rw = bx + bw - px; g.rh = by + bh - py;     // grab point to the bottom-right corner
    g.b.classList.add("mf-lift", g.mode === "move" ? "mf-moving" : "mf-resizing");
    document.documentElement.classList.add("mf-dragging", g.mode === "move" ? "mf-dragging-move" : "mf-dragging-resize");
    toFront(g.b);
    try { g.handle.setPointerCapture(g.id); } catch (e) { /* pointer already gone */ }
    try { const sel = window.getSelection(); if (sel && sel.removeAllRanges) sel.removeAllRanges(); } catch (e) { /* no selection API */ }
    document.addEventListener("keydown", onDragKey, true);
  }
  function queueFrame() { if (!S.raf) S.raf = requestAnimationFrame(frame); }
  function frame() {
    if (!S) return;
    S.raf = 0;
    const g = S.g;
    if (!g || !g.active) return;
    // Auto-scroll while the pointer is held near the top or bottom edge of the window.
    const tb = document.querySelector(".topbar");
    const top = Math.max(0, tb ? tb.getBoundingClientRect().bottom : 0) + EDGE, bottom = window.innerHeight - EDGE;
    let dy = 0;
    if (g.cy > bottom) dy = Math.ceil((g.cy - bottom) / 3);
    else if (g.cy < top && window.scrollY > 0) dy = -Math.ceil((top - g.cy) / 3);
    if (dy) window.scrollBy(0, clamp(dy, -24, 24));
    const z = g.z, o = S.wrap.getBoundingClientRect(), W = width(), it = itemOf(g.b);
    const px = (g.cx - o.left) / z, py = (g.cy - o.top) / z;
    if (g.mode === "move") {
      const w = Math.min(it.w, W);
      it.x = clamp(snap(px - g.ox), 0, Math.max(0, W - w));
      it.y = Math.max(S.minY, snap(py - g.oy));
    } else {
      const x = g.b.offsetLeft, y = g.b.offsetTop;
      it.w = clamp(snap(px + g.rw - x), Math.min(MIN_W, W), Math.max(MIN_W, W - x));
      it.h = Math.max(MIN_H, snap(py + g.rh - y));
    }
    place(g.b, it, W);
    fitHeight(true); // the page grows as you drag down
    redraw();
    if (dy) queueFrame();
  }
  function onPointerUp(e) {
    const g = S && S.g;
    if (!g || e.pointerId !== g.id) return;
    end(false);
  }
  function onDragKey(e) {
    if (e.key === "Escape" && S && S.g && S.g.active) { e.preventDefault(); e.stopPropagation(); end(true); }
  }
  function end(revert) {
    const g = S.g;
    S.g = null;
    clearTimeout(g.timer);
    window.removeEventListener("pointermove", onPointerMove, true);
    window.removeEventListener("pointerup", onPointerUp, true);
    window.removeEventListener("pointercancel", onPointerUp, true);
    document.removeEventListener("keydown", onDragKey, true);
    try { if (g.handle.hasPointerCapture && g.handle.hasPointerCapture(g.id)) g.handle.releasePointerCapture(g.id); } catch (e) { /* released */ }
    g.b.classList.remove("mf-lift", "mf-moving", "mf-resizing");
    document.documentElement.classList.remove("mf-dragging", "mf-dragging-move", "mf-dragging-resize");
    if (!g.active) return;
    if (revert) Object.assign(itemOf(g.b), g.start);
    place(g.b, itemOf(g.b), width());
    fitHeight(false);
    save();
    updateBar();
    redraw();
    S.quiet = { el: g.b, t: Date.now() }; // the click that ends a drag is not a click
    say(revert ? "Move cancelled" : describe(g.b));
  }
  // Touch: once a long-press has picked a bubble up, the finger drags it instead of scrolling the page.
  function blockScroll(e) { if (S && S.g && (S.g.armed || S.g.active)) e.preventDefault(); }

  // ---------- keyboard ----------
  function onKey(e) {
    if (!live() || !movable() || S.g || !e.altKey || e.ctrlKey || e.metaKey) return;
    const header = e.target;
    if (!header.matches || !header.matches(".bubble > header") || header.parentElement.parentElement !== S.wrap) return;
    const dir = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
    if (!dir) return;
    e.preventDefault(); // Alt+←/→ would otherwise go back/forward in history
    const b = header.parentElement;
    freeze();
    const it = itemOf(b), W = width(), x = b.offsetLeft, y = b.offsetTop;
    if (e.shiftKey) {
      if (dir[0]) it.w = clamp(snap(b.offsetWidth + dir[0] * KEY_STEP), Math.min(MIN_W, W), Math.max(MIN_W, W - x));
      if (dir[1]) it.h = Math.max(MIN_H, snap(b.offsetHeight + dir[1] * KEY_STEP));
    } else {
      it.x = clamp(snap(x + dir[0] * KEY_STEP), 0, Math.max(0, W - b.offsetWidth));
      it.y = Math.max(S.minY, snap(y + dir[1] * KEY_STEP));
    }
    place(b, it, W);
    toFront(b);
    fitHeight(false);
    redraw();
    saveSoon();
    updateBar();
    header.scrollIntoView({ block: "nearest", inline: "nearest" });
    say(describe(b));
  }
  const describe = (b) => {
    const t = b.querySelector(".bt");
    return `${t ? t.textContent : "Window"}: ${Math.round(b.offsetLeft)}, ${Math.round(b.offsetTop)} · ${Math.round(b.offsetWidth)} × ${b.classList.contains("mf-fixed-h") ? Math.round(b.offsetHeight) : "auto"}`;
  };
  const say = (msg) => { if (S && S.live) S.live.textContent = msg; };

  // ---------- toolbar actions ----------
  function autoHeight(b) {
    if (!S.model || !itemOf(b)) return;
    itemOf(b).h = null;
    place(b, itemOf(b), width());
    fitHeight(false);
    save();
    redraw();
    say("Auto height");
  }
  // Tidy: re-flow into neat rows in reading order, keeping every window's current size.
  function tidy() {
    if (!S.model) return;
    const W = width();
    let x = 0, y = Math.ceil(topY() / GRID) * GRID, rowH = 0;
    bubbles().forEach((b) => {
      const it = itemOf(b), w = Math.min(it.w, W), h = b.offsetHeight;
      if (x > 0 && x + w > W) { x = 0; y = Math.ceil((y + rowH + GAP) / GRID) * GRID; rowH = 0; }
      it.x = x; it.y = y;
      x = Math.ceil((x + w + GAP) / GRID) * GRID;
      rowH = Math.max(rowH, h);
    });
    animate();
    applyFree();
    save();
    say("Windows tidied");
  }
  // Reset: forget this topic's layout and go back to the standard grid.
  function reset() {
    store.del(STORE + S.id);
    S.model = null;
    S.order = [];
    applyMode();
    say("Layout reset");
  }
  // Short glide for Tidy, with arrows following every frame (skipped for reduced motion).
  function animate() {
    if (reduceMQ.matches || document.documentElement.dataset.motion === "reduce") return;
    S.wrap.classList.add("mf-anim");
    const t0 = performance.now(), wrap = S.wrap;
    (function tick() {
      redraw();
      if (performance.now() - t0 < 360 && live() && S.wrap === wrap) requestAnimationFrame(tick);
      else { wrap.classList.remove("mf-anim"); if (live()) { fitHeight(false); redraw(); } }
    })();
  }
  function setArrange(on) {
    arrange = !!on;
    applyMode();
    say(arrange ? "Arrange on: long-press a header to move a window" : "Arrange off");
  }

  // ---------- one-time hint ----------
  const hintWanted = () => !store.get(HINT_KEY) && !(S && S.model);
  function hintSeen() {
    store.set(HINT_KEY, "1");
    if (S) { clearTimeout(S.hintTimer); S.hintOff = true; }
  }

  // ---------- page enhancement ----------
  function button(cls, label, title, onClick) {
    const b = el("button", "mf-btn " + cls, label);
    b.type = "button";
    b.title = title;
    b.addEventListener("click", (e) => { e.stopPropagation(); onClick(); });
    return b;
  }
  function buildBar() {
    const bar = el("div", "mf-bar mf-ui");
    bar.setAttribute("role", "toolbar");
    bar.setAttribute("aria-label", "Window layout");
    const hint = el("span", "mf-hint");
    const hintText = el("span", "mf-hint-t");
    const x = el("button", "mf-hint-x", "×");
    x.type = "button";
    x.setAttribute("aria-label", "Dismiss tip");
    x.addEventListener("click", (e) => { e.stopPropagation(); hintSeen(); updateBar(); });
    hint.append(hintText, x);
    const arr = button("mf-arrange", "✥ Arrange", "Move and resize the windows on this page", () => setArrange(!arrange));
    const tidyB = button("mf-tidy", "⤢ Tidy", "Line the windows up in a neat grid, keeping their sizes", tidy);
    const resetB = button("mf-reset", "↺ Reset layout", "Forget the moved and resized windows and go back to the standard grid", reset);
    bar.append(hint, arr, tidyB, resetB);
    Object.assign(S, { bar, hint, hintText, arr, tidyB, resetB });
    const lr = el("span", "mf-sr mf-ui");
    lr.setAttribute("role", "status");
    lr.setAttribute("aria-live", "polite");
    S.live = lr;
    S.wrap.append(bar, lr);
  }
  function updateBar() {
    if (!live() || !S.bar) return;
    const phone = isPhone(), free = isFree();
    S.arr.hidden = !phone;
    S.arr.setAttribute("aria-pressed", String(arrange));
    S.arr.classList.toggle("on", arrange);
    S.tidyB.hidden = S.resetB.hidden = !free;
    const hintOn = !S.hintOff && hintWanted() && (!phone || !arrange || !free);
    S.hintText.textContent = phone
      ? (arrange ? "Tip: long-press a header to move · drag the corner to resize" : "Tip: ✥ Arrange lets you move windows")
      : "Tip: drag a header to move · drag the corner to resize";
    S.hint.hidden = !hintOn;
    if (hintOn && !S.hintTimer) S.hintTimer = setTimeout(() => { hintSeen(); updateBar(); }, 15000);
    S.bar.hidden = S.hint.hidden && S.arr.hidden && S.tidyB.hidden;
    S.wrap.classList.toggle("mf-has-bar", !S.bar.hidden);
  }
  function decorate(b) {
    const h = b.querySelector(":scope > header");
    if (h && !h.querySelector(".mf-drag")) {
      const grip = el("span", "mf-drag mf-ui", "⠿");
      grip.setAttribute("aria-hidden", "true");
      grip.title = "Drag the header to move · Alt+Arrow keys move · Alt+Shift+Arrow keys resize";
      h.prepend(grip);
      h.addEventListener("touchmove", blockScroll, { passive: false });
      h.addEventListener("contextmenu", (e) => { if (S && S.g && (S.g.armed || S.g.active)) e.preventDefault(); });
    }
    if (!b.querySelector(":scope > .mf-grip")) {
      const r = el("span", "mf-grip mf-ui");
      r.setAttribute("aria-hidden", "true");
      r.title = "Drag to resize · double-click for auto height";
      b.appendChild(r);
    }
  }
  function enhance(id) {
    if (S) teardown();
    const wrap = document.getElementById("bubbles");
    if (!wrap || !id) return;
    S = { id, wrap, model: load(id), order: [], g: null, raf: 0, lastW: 0, minY: 0, hintOff: false, hintTimer: 0, printing: false, quiet: null };
    bubbles().forEach(decorate);
    buildBar();
    wrap.addEventListener("pointerdown", onPointerDown);
    wrap.addEventListener("keydown", onKey);
    wrap.addEventListener("dblclick", (e) => { const grip = e.target.closest(".mf-grip"); if (grip && movable()) autoHeight(grip.parentElement); });
    wrap.addEventListener("click", (e) => {
      if (S && S.quiet && S.quiet.el.contains(e.target) && Date.now() - S.quiet.t < 350) { e.stopPropagation(); e.preventDefault(); }
    }, true);
    // Width changes (window resize, zoom) re-clamp the free layout; content changes keep the page tall enough.
    if (window.ResizeObserver) {
      const st = S;
      st.ro = new ResizeObserver(() => {
        if (st.relayout) return;
        st.relayout = requestAnimationFrame(() => {
          st.relayout = 0;
          if (S !== st || !live() || st.g || st.printing || !isFree()) return;
          if (width() !== st.lastW) { st.lastW = width(); applyFree(); } else fitHeight(false);
          redraw();
        });
      });
      st.ro.observe(wrap);
      bubbles().forEach((b) => st.ro.observe(b));
    }
    applyMode();
  }
  function teardown() {
    if (!S) return;
    if (S.g) end(true);
    clearTimeout(S.hintTimer);
    clearTimeout(saveTimer);
    save();
    if (S.ro) S.ro.disconnect();
    if (S.raf) cancelAnimationFrame(S.raf);
    S = null;
  }

  // ---------- wiring ----------
  document.addEventListener("mf:render", (e) => {
    const d = e.detail || {};
    if (d.view === "topic") enhance(d.id); else teardown();
  });
  const onMQ = (m, fn) => { if (m.addEventListener) m.addEventListener("change", fn); else if (m.addListener) m.addListener(fn); };
  onMQ(phoneMQ, () => { if (live()) { if (S.g) end(true); applyMode(); } });
  window.addEventListener("beforeprint", () => { if (live() && isFree()) { S.printing = true; applyGrid(); redraw(); } });
  window.addEventListener("afterprint", () => { if (live() && S.printing) { S.printing = false; applyMode(); } });
  // Loaded after the first render (e.g. injected later)? Enhance the page that is already there.
  const m = location.hash.match(/^#\/topic\/([^/]+)/);
  if (m && document.getElementById("bubbles")) enhance(decodeURIComponent(m[1]));

  window.MF = window.MF || {};
  window.MF.layout = {
    reset: () => live() && reset(),
    tidy: () => live() && tidy(),
    arrange: (on) => live() && setArrange(on),
    get: () => (live() && S.model ? JSON.parse(JSON.stringify(S.model)) : null),
    isFree: () => live() && isFree()
  };
})();
