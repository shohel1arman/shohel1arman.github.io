/* Md. Shohel Arman — portfolio interactions */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- theme toggle ---------- */
  var rootEl = document.documentElement;
  var themeBtn = document.getElementById("themeToggle");
  function storedTheme() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function storeTheme(t) {
    try { localStorage.setItem("theme", t); } catch (e) {}
  }
  function syncThemeLabel() {
    if (!themeBtn) return;
    var colored = rootEl.getAttribute("data-theme") === "color";
    themeBtn.setAttribute("aria-label", colored ? "Switch to ink theme" : "Switch to colour theme");
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var colored = rootEl.getAttribute("data-theme") === "color";
      if (colored) {
        rootEl.removeAttribute("data-theme");
        storeTheme("ink");
      } else {
        rootEl.setAttribute("data-theme", "color");
        storeTheme("color");
      }
      syncThemeLabel();
    });
    syncThemeLabel();
  }

  /* ---------- footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- campus buildings: click / keyboard navigation ---------- */
  document.querySelectorAll(".bldg").forEach(function (b) {
    function go() {
      var target = document.querySelector(b.getAttribute("data-target"));
      if (target) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    }
    b.addEventListener("click", go);
    b.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        go();
      }
    });
  });

  /* ---------- scroll progress bar ---------- */
  var bar = document.getElementById("progressBar");
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (bar) bar.style.width = p + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- custom cursor (desktop only) ---------- */
  var cursor = document.getElementById("cursor");
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (cursor && fine && !reduceMotion) {
    document.addEventListener("mousemove", function (e) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
    var growTargets = "a, button, .bldg, .project";
    document.addEventListener("mouseover", function (e) {
      if (e.target.closest(growTargets)) cursor.classList.add("is-big");
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest(growTargets)) cursor.classList.remove("is-big");
    });
  } else if (cursor) {
    cursor.style.display = "none";
  }

  /* ---------- hero counters ---------- */
  document.querySelectorAll(".count").forEach(function (el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    if (isNaN(target)) return;
    if (reduceMotion || !window.requestAnimationFrame) {
      el.textContent = target + suffix;
      return;
    }
    var dur = 1400, t0 = null;
    el.textContent = "0" + suffix;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });

  /* ---------- scrollspy: highlight current section in nav ---------- */
  var spyLinks = document.querySelectorAll(".nav__links a[href^='#']");
  var spyMap = {};
  spyLinks.forEach(function (a) {
    var sec = document.querySelector(a.getAttribute("href"));
    if (sec) spyMap[sec.id] = a;
  });
  if ("IntersectionObserver" in window && Object.keys(spyMap).length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && spyMap[en.target.id]) {
            spyLinks.forEach(function (a) { a.classList.remove("active"); });
            spyMap[en.target.id].classList.add("active");
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    Object.keys(spyMap).forEach(function (id) {
      spy.observe(document.getElementById(id));
    });
  }

  /* ---------- scroll to top ---------- */
  var topBtn = document.getElementById("scrollTop");
  if (topBtn) {
    function toggleTopBtn() {
      topBtn.classList.toggle("show", window.scrollY > 600);
    }
    window.addEventListener("scroll", toggleTopBtn, { passive: true });
    toggleTopBtn();
    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById("burger");
  var menu = document.getElementById("mobileMenu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }
})();