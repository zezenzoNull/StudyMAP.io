/* Play mode — a story-style walkthrough of one topic's flowchart.
   Tap ▶ Play on a topic page → full-screen slides, one bubble/pathway at a time, auto-scrolling and auto-advancing
   until the topic is finished; the last slide is the whole chart as a connected map.
   Controls: tap right = next · tap left = back · tap middle = pause/resume · swipe down or ✕ = close · ←/→/space/Esc keys.
   Slides are clones of the rendered page, so nothing is lost (tables, mnemonics, chips, colours, flowcharts). */
(function () {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const el = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  let state = null;

  const readMs = (node) => {
    const words = (node.textContent || "").trim().split(/\s+/).length;
    return Math.min(42000, Math.max(5500, 2500 + words * 230)); // skim speed + base time
  };

  function buildSlides() {
    const page = $(".page.topic");
    if (!page) return [];
    const slides = [];
    const head = el("div", "pl-intro");
    ["h1", ".lede", ".spine-flow"].forEach((s) => { const n = $(s, page); if (n) head.appendChild(n.cloneNode(true)); });
    slides.push({ node: head, label: "Overview", tint: "#5ee7ff" });
    page.querySelectorAll(".bubbles > .bubble, .pathways > .pathway").forEach((b) => {
      const c = b.cloneNode(true);
      c.removeAttribute("id");
      c.querySelectorAll("[id]").forEach((x) => x.removeAttribute("id"));
      const title = (b.querySelector(".bt") || b.querySelector("header") || b).textContent.trim();
      const tint = getComputedStyle(b).getPropertyValue("--c").trim() || "#5ee7ff";
      slides.push({ node: c, label: title, tint, src: b });
    });
    slides.push({ node: overview(slides), label: "Whole chart", tint: "#5ee7ff", final: true });
    return slides;
  }

  // Final slide: every bubble as a coloured tile in reading order, joined by arrows.
  function overview(slides) {
    const wrap = el("div", "pl-map");
    wrap.append(el("div", "pl-map-h", "Whole chart"), el("div", "pl-map-sub", "Tap a tile to open it in the full chart."));
    const grid = el("div", "pl-map-grid");
    slides.slice(1).forEach((s, i) => {
      if (i) grid.appendChild(el("div", "pl-map-arrow", "↓"));
      const tile = el("button", "pl-tile");
      tile.type = "button";
      tile.style.setProperty("--c", s.tint);
      const tl = s.src && s.src.querySelector(".tylabel");
      tile.append(el("span", "pl-tile-n", String(i + 1)), el("span", "pl-tile-t", s.label), el("span", "pl-tile-ty", tl ? tl.textContent : ""));
      tile.addEventListener("click", (e) => {
        e.stopPropagation();
        close();
        if (s.src) {
          s.src.scrollIntoView({ block: "start" });
          s.src.classList.add("flash");
          setTimeout(() => s.src.classList.remove("flash"), 2400);
        }
      });
      grid.appendChild(tile);
    });
    wrap.appendChild(grid);
    const full = el("button", "pl-full", "View full chart");
    full.type = "button";
    full.addEventListener("click", (e) => { e.stopPropagation(); close(); window.scrollTo(0, 0); });
    wrap.appendChild(full);
    return wrap;
  }

  function open() {
    const slides = buildSlides();
    if (!slides.length) return;
    const ov = el("div", "pl-ov");
    ov.setAttribute("role", "dialog");
    ov.setAttribute("aria-label", "Play mode");
    const bars = el("div", "pl-bars");
    slides.forEach(() => { const b = el("div", "pl-bar"); b.appendChild(el("i")); bars.appendChild(b); });
    const top = el("div", "pl-top");
    const x = el("button", "pl-x", "✕");
    x.type = "button";
    x.setAttribute("aria-label", "Close");
    top.append(el("span", "pl-count"), el("span", "pl-label"), x);
    const stage = el("div", "pl-stage");
    stage.appendChild(el("div", "pl-card"));
    const paused = el("div", "pl-paused", "❚❚ paused");
    paused.hidden = true;
    ov.append(bars, top, stage, el("div", "pl-hint", "tap right ▸ next · left ◂ back · middle pause · swipe ↓ close"), paused);
    document.body.appendChild(ov);
    document.documentElement.classList.add("pl-lock");
    state = { ov, slides, i: -1, t0: 0, dur: 0, elapsed: 0, paused: false, raf: 0 };
    x.addEventListener("click", (e) => { e.stopPropagation(); close(); });
    ov.addEventListener("click", onTap);
    let y0 = null;
    ov.addEventListener("touchstart", (e) => { y0 = e.touches[0].clientY; }, { passive: true });
    ov.addEventListener("touchend", (e) => {
      const card = state && $(".pl-card", state.ov);
      if (y0 !== null && card && e.changedTouches[0].clientY - y0 > 110 && card.scrollTop <= 0) close();
      y0 = null;
    }, { passive: true });
    document.addEventListener("keydown", onKey);
    go(0);
  }

  function onTap(e) {
    if (!state || e.target.closest("a, button, .pl-map")) return;
    const x = e.clientX / window.innerWidth;
    if (x > 0.66) go(state.i + 1);
    else if (x < 0.33) go(state.i - 1);
    else togglePause();
  }
  function onKey(e) {
    if (!state) return;
    if (e.key === "ArrowRight") go(state.i + 1);
    else if (e.key === "ArrowLeft") go(state.i - 1);
    else if (e.key === " ") { e.preventDefault(); togglePause(); }
    else if (e.key === "Escape") close();
  }
  function togglePause() {
    if (!state || state.slides[state.i].final) return;
    state.paused = !state.paused;
    $(".pl-paused", state.ov).hidden = !state.paused;
    if (!state.paused) state.t0 = performance.now() - state.elapsed;
  }

  function go(i) {
    if (!state) return;
    const { slides, ov } = state;
    i = Math.max(0, Math.min(slides.length - 1, i));
    state.i = i;
    const s = slides[i];
    const card = $(".pl-card", ov);
    card.classList.remove("pl-in");
    card.replaceChildren(s.node);
    void card.offsetWidth; // restart the entry animation
    card.classList.add("pl-in");
    card.style.setProperty("--c", s.tint);
    card.scrollTop = 0;
    $(".pl-count", ov).textContent = `${i + 1} / ${slides.length}`;
    $(".pl-label", ov).textContent = s.label;
    ov.querySelectorAll(".pl-bar").forEach((b, k) => { b.firstChild.style.width = k < i || (s.final && k === i) ? "100%" : "0%"; });
    state.paused = false;
    $(".pl-paused", ov).hidden = true;
    state.dur = s.final ? 0 : readMs(s.node);
    state.elapsed = 0;
    state.t0 = performance.now();
    clearInterval(state.raf);
    if (!s.final) state.raf = setInterval(tick, 33);
  }

  function tick() {
    const now = performance.now();
    if (!state) return;
    if (!state.paused) {
      state.elapsed = now - state.t0;
      const p = Math.min(1, state.elapsed / state.dur);
      state.ov.querySelectorAll(".pl-bar")[state.i].firstChild.style.width = (p * 100).toFixed(1) + "%";
      // keep moving: glide through long slides, holding a moment at the start and end
      const card = $(".pl-card", state.ov);
      const max = card.scrollHeight - card.clientHeight;
      if (max > 4) {
        const q = Math.min(1, Math.max(0, (p - 0.12) / 0.78));
        card.scrollTop = max * (q < 0.5 ? 2 * q * q : 1 - Math.pow(-2 * q + 2, 2) / 2);
      }
      if (p >= 1) go(state.i + 1);
    }
  }

  function close() {
    if (!state) return;
    clearInterval(state.raf);
    state.ov.remove();
    document.documentElement.classList.remove("pl-lock");
    document.removeEventListener("keydown", onKey);
    state = null;
  }

  // Floating ▶ Play button on topic pages
  function ensureButton() {
    let btn = $("#pl-btn");
    const onTopic = !!$(".page.topic");
    if (!btn) {
      btn = el("button");
      btn.id = "pl-btn";
      btn.type = "button";
      btn.setAttribute("aria-label", "Play this flowchart");
      btn.append(el("span", "pl-btn-i", "▶"), el("span", null, "Play"));
      btn.addEventListener("click", open);
      document.body.appendChild(btn);
    }
    btn.hidden = !onTopic;
    if (!onTopic) close();
  }
  window.addEventListener("hashchange", () => setTimeout(ensureButton, 60));
  window.addEventListener("load", () => setTimeout(ensureButton, 300));
  setInterval(ensureButton, 1500);
  // ?play=1 opens play mode straight away on a topic link
  if (/[?&]play=1/.test(location.search)) {
    const t0 = Date.now();
    const iv = setInterval(() => { if (document.querySelector(".page.topic .bubble")) { clearInterval(iv); open(); } else if (Date.now() - t0 > 8000) clearInterval(iv); }, 200);
  }
  window.MFPlayer = { open, close };
})();
