/* ============================================================
   Qualscan — interaction layer
   - Sticky header state on scroll
   - Mobile menu toggle
   - Scroll-reveal with stagger (IntersectionObserver)
   - Animated stat / turnaround counters
   - Timeline scroll progress + active milestone
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- sticky header ---------- */
  var header = document.getElementById("siteHeader");
  function onScrollHeader() {
    if (window.scrollY > 24) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  onScrollHeader();

  /* ---------- mobile menu ---------- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- scroll reveal + stagger ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    // assign stagger delay relative to siblings in the same group
    reveals.forEach(function (el) {
      var siblings = Array.prototype.slice.call(el.parentNode.children).filter(function (c) {
        return c.classList.contains("reveal");
      });
      var idx = siblings.indexOf(el);
      if (siblings.length > 2 && idx > -1) el.style.setProperty("--d", (idx % 6) * 0.08 + "s");
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- animated counters ---------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var prefix = /^&lt;|^</.test(el.textContent.trim()) || el.textContent.trim().indexOf("<") === 0 ? "< " : "";
    var dur = 1100;
    var start = null;
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(target * eased);
      el.textContent = prefix + val + suffix;
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = prefix + target + suffix;
    }
    requestAnimationFrame(frame);
  }

  var counters = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));
  if (reduceMotion || !("IntersectionObserver" in window)) {
    // leave the static fallback text as-is
  } else {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ---------- timeline progress + active node ---------- */
  var timeline = document.querySelector(".timeline");
  var progress = document.getElementById("timelineProgress");
  var milestones = Array.prototype.slice.call(document.querySelectorAll(".milestone"));

  function updateTimeline() {
    if (!timeline || !progress) return;
    var rect = timeline.getBoundingClientRect();
    var vh = window.innerHeight;
    var trigger = vh * 0.55;
    var total = rect.height;
    var filled = Math.min(Math.max(trigger - rect.top, 0), total);
    progress.style.height = (filled / total) * 100 + "%";

    milestones.forEach(function (m) {
      var mr = m.getBoundingClientRect();
      if (mr.top < trigger) m.classList.add("is-active");
      else m.classList.remove("is-active");
    });
  }

  /* ---------- single scroll listener ---------- */
  var ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        onScrollHeader();
        updateTimeline();
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateTimeline);
  updateTimeline();
})();
