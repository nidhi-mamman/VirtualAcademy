// main-vanilla.js
// Full vanilla JS conversion of the original jQuery-based script.
// Dependencies that must still exist (if you rely on them):
// Swiper, GSAP (+ plugins if used), Lenis (optional), Isotope (optional), imagesLoaded (optional),
// MagnificPopup (optional), circleProgress (or equivalent). If you don't need a lib, the code checks existence.

(function () {
  "use strict";

  /* -------------------------
     Helper utilities
     ------------------------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const on = (el, evt, fn, opts) => (el && el.addEventListener(evt, fn, opts));
  const off = (el, evt, fn, opts) => (el && el.removeEventListener(evt, fn, opts));
  const addClass = (el, c) => el && el.classList.add(c);
  const removeClass = (el, c) => el && el.classList.remove(c);
  const toggleClass = (el, c) => el && el.classList.toggle(c);
  const hasClass = (el, c) => el && el.classList.contains(c);
  const closest = (el, sel) => el && el.closest(sel);

  const ready = (fn) => {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  };

  // Simple imagesLoaded fallback if not available
  function ensureImagesLoaded(container, callback) {
    if (typeof imagesLoaded === "function") {
      imagesLoaded(container, callback);
      return;
    }
    const imgs = $$("img", container);
    if (imgs.length === 0) return callback();
    let count = 0;
    imgs.forEach((img) => {
      if (img.complete) {
        count++;
        if (count === imgs.length) callback();
      } else {
        on(img, "load", () => {
          count++;
          if (count === imgs.length) callback();
        });
        on(img, "error", () => {
          count++;
          if (count === imgs.length) callback();
        });
      }
    });
  }

  /* -------------------------
     Smooth scroll for anchors
     ------------------------- */
  function initSmoothScroll() {
    // select anchors that link to in-page anchors
    document.addEventListener("click", (e) => {
      const a = closest(e.target, "a[href^='#']");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#" || href.startsWith("#!")) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // small offset adjustment if necessary:
      window.scrollBy(0, -10);
    });
  }

  /* -------------------------
     Data attribute animations
     ------------------------- */
  function applyDataAni(root = document) {
    $$("[data-ani]", root).forEach((el) => {
      const ani = el.dataset.ani;
      if (ani) el.classList.add(ani);
    });
    $$("[data-ani-delay]", root).forEach((el) => {
      const d = el.dataset.aniDelay;
      if (d) el.style.animationDelay = d;
    });
  }

  /* -------------------------
     Preloader
     ------------------------- */
  function initPreloader() {
    on(window, "load", () => {
      const pre = $(".preloader");
      if (pre) {
        pre.style.transition = "opacity 300ms ease";
        pre.style.opacity = "0";
        setTimeout(() => pre.style.display = "none", 350);
      }
      // init WOW if present
      if (typeof WOW === "function") {
        try { new WOW().init(); } catch (e) { /* ignore */ }
      }
    });

    const preCloser = document.querySelectorAll(".preloaderCls");
    preCloser.forEach((btn) => on(btn, "click", (ev) => {
      ev.preventDefault();
      const pre = $(".preloader");
      if (pre) pre.style.display = "none";
    }));
  }

  /* -------------------------
     Mobile/Menu: thmobilemenu converted
     ------------------------- */
  function initThMobileMenu(options = {}) {
    const defaults = {
      menuToggleBtn: ".th-menu-toggle",
      bodyToggleClass: "th-body-visible",
      subMenuClass: "th-submenu",
      subMenuParent: "menu-item-has-children",
      thSubMenuParent: "th-item-has-children",
      subMenuParentToggle: "th-active",
      meanExpandClass: "th-mean-expand",
      subMenuToggleClass: "th-open",
      toggleSpeed: 400,
      appendElement: ""
    };
    const opt = Object.assign({}, defaults, options);

    const wrappers = $$(".th-menu-wrapper");
    wrappers.forEach((t) => {
      // add classes and prepare submenus
      $$((" > ." + opt.subMenuParent) || ".", t).forEach(() => { }); // noop to keep logic similarity
      // find parents
      t.querySelectorAll("." + opt.subMenuParent).forEach((li) => {
        const ul = li.querySelector("ul");
        if (ul) {
          ul.classList.add(opt.subMenuClass);
          ul.style.display = "none";
        }
        li.classList.add(opt.subMenuParent);
        li.classList.add(opt.thSubMenuParent);
        if (li.querySelector("a")) {
          li.querySelector("a").insertAdjacentHTML("beforeend", opt.appendElement);
        }
      });

      // toggle for submenu parents > a
      const parentLinks = t.querySelectorAll("." + opt.thSubMenuParent + " > a");
      parentLinks.forEach((link) => {
        on(link, "click", (ev) => {
          ev.preventDefault();
          const parent = link.parentElement;
          if (!parent) return;
          const submenu = parent.querySelector("ul");
          if (submenu) {
            parent.classList.toggle(opt.subMenuParentToggle);
            if (submenu.style.display === "none" || !submenu.style.display) {
              // slide down (simple)
              submenu.style.display = "block";
              submenu.classList.add(opt.subMenuToggleClass);
            } else {
              // slide up
              submenu.style.display = "none";
              submenu.classList.remove(opt.subMenuToggleClass);
            }
          }
        });
      });

      function toggleMenuBody() {
        t.classList.toggle(opt.bodyToggleClass);
        const subs = document.querySelectorAll("." + opt.subMenuClass);
        subs.forEach((s) => {
          if (s.classList.contains(opt.subMenuToggleClass)) {
            s.classList.remove(opt.subMenuToggleClass);
            s.style.display = "none";
            const p = s.parentElement;
            if (p) p.classList.remove(opt.subMenuParentToggle);
          }
        });
      }

      document.querySelectorAll(opt.menuToggleBtn).forEach((btn) => {
        on(btn, "click", (e) => {
          e.preventDefault();
          toggleMenuBody();
        });
      });

      // clicking inside menu should not close; clicking outside should close
      on(t, "click", (e) => e.stopPropagation());
      on(document, "click", () => {
        if (t.classList.contains(opt.bodyToggleClass)) toggleMenuBody();
      });
    });
  }

  /* -------------------------
     Sticky header / category menu on scroll
     ------------------------- */
  function initSticky() {
    const stickyWrapper = $(".sticky-wrapper");
    const categoryMenu = $(".category-menu");
    function check() {
      if (window.scrollY > 500) {
        stickyWrapper && addClass(stickyWrapper, "sticky");
        categoryMenu && addClass(categoryMenu, "close-category");
      } else {
        stickyWrapper && removeClass(stickyWrapper, "sticky");
        categoryMenu && removeClass(categoryMenu, "close-category");
      }
    }
    on(window, "scroll", check);
    check();
  }

  /* -------------------------
     Scroll-to-top with progress path
     ------------------------- */
  function initScrollTop() {
    const t = $(".scroll-top");
    if (!t) return;
    const path = t.querySelector("path");
    if (!path) {
      // fallback: simple show/hide
      on(window, "scroll", () => {
        if (window.scrollY > 50) addClass(t, "show");
        else removeClass(t, "show");
      });
      on(t, "click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      return;
    }
    const total = path.getTotalLength();
    path.style.transition = path.style.webkitTransition = "none";
    path.style.strokeDasharray = `${total} ${total}`;
    path.style.strokeDashoffset = total;
    // force reflow
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 10ms linear";

    function update() {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height ? (total - (scroll * total) / height) : total;
      path.style.strokeDashoffset = progress;
      if (scroll > 50) addClass(t, "show"); else removeClass(t, "show");
    }
    on(window, "scroll", update);
    on(t, "click", (ev) => {
      ev.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    update();
  }

  /* -------------------------
     Data backgrounds and masks
     ------------------------- */
  function applyDataBackgrounds() {
    $$("[data-bg-src]").forEach((el) => {
      const src = el.getAttribute("data-bg-src");
      if (src) {
        el.style.backgroundImage = `url(${src})`;
        el.removeAttribute("data-bg-src");
        el.classList.add("background-image");
      }
    });
    $$("[data-bg-color]").forEach((el) => {
      const c = el.getAttribute("data-bg-color");
      if (c) {
        el.style.backgroundColor = c;
        el.removeAttribute("data-bg-color");
      }
    });
    $$("[data-mask-src]").forEach((el) => {
      const m = el.getAttribute("data-mask-src");
      if (m) {
        el.style.maskImage = `url(${m})`;
        el.style.webkitMaskImage = `url(${m})`;
        el.classList.add("bg-mask");
        el.removeAttribute("data-mask-src");
      }
    });
    $$("[data-border]").forEach((el) => {
      const b = el.dataset.border;
      if (b) el.style.setProperty("--th-border-color", b);
    });
  }

  /* -------------------------
     Swiper initializations
     ------------------------- */
  function initSwipers() {
    if (typeof Swiper !== "function" && typeof Swiper !== "object") return;

    $$("[data-slider]").forEach(t => {  // ✅ this ensures t is an element
      const controller = t.closest('.slider-controller')?.querySelector('.slider-pagination');

      new Swiper(t, {
        slidesPerView: t.dataset.slidesPerView || 1,
        loop: t.dataset.loop === "true",
        spaceBetween: parseInt(t.dataset.spaceBetween) || 0,
        autoplay: t.dataset.autoplay === "true" ? { delay: 3000 } : false,
        pagination: {
          el: controller || t.querySelector(".slider-pagination"),
          clickable: true,
        },
        navigation: {
          nextEl: t.querySelector(".slider-next"),
          prevEl: t.querySelector(".slider-prev"),
        },
      });
    });
  }

  /* -------------------------
     Simple accordion / hover interactions
     ------------------------- */
  function initHoverAndAccordions() {
    document.addEventListener("click", (e) => {
      const el = closest(e.target, ".service-list-wrap");
      if (el) {
        el.classList.add("active");
        // remove active from siblings
        (el.parentElement ? Array.from(el.parentElement.children) : []).forEach(s => {
          if (s !== el) s.classList.remove("active");
        });
      }
    });

    // accordion hover behavior (converted from mouseenter)
    document.addEventListener("mouseenter", (e) => {
      const match = closest(e.target, ".accordion-item-wrapp .accordion-item-content");
      if (match) {
        $$(".accordion-item-wrapp .accordion-item-content").forEach(x => x.classList.remove("active"));
        $$(".according-img-tab").forEach(x => x.style.display = "none");
        const tabTarget = match.querySelector(".accordion-tab-item") && match.querySelector(".accordion-tab-item").dataset.bsTarget;
        if (tabTarget) {
          const tEl = document.querySelector(tabTarget);
          if (tEl) fadeIn(tEl);
        }
      }
    }, true);

    // hover item behavior
    document.addEventListener("mouseover", (e) => {
      const hi = closest(e.target, ".hover-item");
      if (hi) {
        $$(".hover-item").forEach(x => x.classList.remove("item-active"));
        hi.classList.add("item-active");
        const idx = Array.from(document.querySelectorAll(".hover-item")).indexOf(hi);
        $$(".service-card-thumb").forEach((el, i) => {
          el.classList.toggle("active", i === idx);
        });
      }
      const hi2 = closest(e.target, ".hover-item2");
      if (hi2) {
        $$(".hover-item2").forEach(x => x.classList.remove("item-active2"));
        hi2.classList.add("item-active2");
        const idx2 = Array.from(document.querySelectorAll(".hover-item2")).indexOf(hi2);
        $$(".process-box-img").forEach((el, i) => el.classList.toggle("active-img", i === idx2));
      }
    });
  }

  /* -------------------------
     Inline SVG replacement (simple)
     ------------------------- */
  function inlineSvg() {
    document.querySelectorAll(".svg-img").forEach((img) => {
      const src = img.getAttribute("src");
      if (!src) return;
      fetch(src)
        .then((r) => r.text())
        .then((svgText) => {
          const div = document.createElement("div");
          div.innerHTML = svgText;
          const svg = div.querySelector("svg");
          if (!svg) return;
          if (img.id) svg.setAttribute("id", img.id);
          if (img.className) svg.setAttribute("class", img.className);
          if (img.getAttribute("style")) svg.setAttribute("style", img.getAttribute("style"));
          if (img.getAttribute("width")) svg.setAttribute("width", img.getAttribute("width"));
          if (img.getAttribute("height")) svg.setAttribute("height", img.getAttribute("height"));
          img.parentNode.insertBefore(svg, img.nextSibling);
          img.parentNode.removeChild(img);
        })
        .catch(() => { });
    });
  }

  /* -------------------------
     Popups (if MagnificPopup is present, use it)
     ------------------------- */
  function initPopups() {
    // If MagnificPopup is not available, skip - user can use alternate library
    if (typeof $.magnificPopup !== "function" && typeof jQuery !== "undefined" && jQuery.fn && jQuery.fn.magnificPopup) {
      // nothing to do (we're vanilla JS) but if project uses jQuery Magnific, user likely loads it as jQuery plugin.
      // In that case, that jQuery plugin will handle its own selector initialization from original template.
      return;
    }

    // If you use a vanilla popup lib, init here. For now noop.
  }

  /* -------------------------
     AJAX contact form (vanilla fetch)
     ------------------------- */
  function initAjaxContact() {
    const form = document.querySelector(".ajax-contact");
    if (!form) return;
    const formMessages = document.querySelector(".form-messages");
    const nameSel = '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]';
    const emailSel = '[name="email"]';
    const makeInvalid = (el) => el.classList.add("is-invalid");
    const makeValid = (el) => el.classList.remove("is-invalid");

    function validate() {
      let ok = true;
      const fields = form.querySelectorAll(nameSel);
      fields.forEach((f) => {
        if (!f.value.trim()) {
          makeInvalid(f);
          ok = false;
        } else {
          makeValid(f);
        }
      });
      const email = form.querySelector(emailSel);
      if (email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value.trim())) {
        makeInvalid(email);
        ok = false;
      } else if (email) makeValid(email);
      return ok;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validate()) return;
      const action = form.getAttribute("action") || window.location.href;
      const data = new FormData(form);
      fetch(action, {
        method: "POST",
        body: data,
      }).then(async (res) => {
        const text = await res.text();
        formMessages && formMessages.classList.remove("error");
        formMessages && formMessages.classList.add("success");
        if (formMessages) formMessages.textContent = text;
        // clear inputs (except submit)
        form.querySelectorAll("input:not([type='submit']), textarea").forEach(i => i.value = "");
      }).catch((err) => {
        formMessages && formMessages.classList.remove("success");
        formMessages && formMessages.classList.add("error");
        if (formMessages) {
          if (err && err.responseText) formMessages.innerHTML = err.responseText;
          else formMessages.innerHTML = "Oops! An error occured and your message could not be sent.";
        }
      });
    });
  }

  /* -------------------------
     Side menus / toggles
     ------------------------- */
  function initSideMenus() {
    // generic toggler behavior from original g()
    function setup(tSel, toggleSel, closeSel, showClass) {
      const t = document.querySelector(tSel);
      const toggle = document.querySelector(toggleSel);
      const close = document.querySelector(closeSel);
      if (!t || !toggle) return;
      on(toggle, "click", (ev) => {
        ev.preventDefault();
        addClass(t, showClass);
      });
      on(document, "click", (e) => {
        if (!closest(e.target, tSel) && !closest(e.target, toggleSel)) removeClass(t, showClass);
      });
      if (close) on(close, "click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        removeClass(t, showClass);
      });
      on(t, "click", (ev) => ev.stopPropagation());
    }

    setup(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show");
    setup(".shopping-cart", ".sideMenuToggler2", ".sideMenuCls", "show");
  }

  /* -------------------------
     Pricing switch toggle
     ------------------------- */
  function initPricingToggle() {
    const monthlyBtn = $("#filt-monthly");
    const yearlyBtn = $("#filt-yearly");
    const switcher = $("#switcher");
    const monthBlock = $("#monthly");
    const yearBlock = $("#yearly");
    if (!monthlyBtn || !yearlyBtn || !switcher) return;
    on(monthlyBtn, "click", () => {
      switcher.checked = false;
      addClass(monthlyBtn, "toggler--is-active");
      removeClass(yearlyBtn, "toggler--is-active");
      monthBlock && removeClass(monthBlock, "hide");
      yearBlock && addClass(yearBlock, "hide");
    });
    on(yearlyBtn, "click", () => {
      switcher.checked = true;
      addClass(yearlyBtn, "toggler--is-active");
      removeClass(monthlyBtn, "toggler--is-active");
      yearBlock && removeClass(yearBlock, "hide");
      monthBlock && addClass(monthBlock, "hide");
    });
    on(switcher, "click", () => {
      yearlyBtn.classList.toggle("toggler--is-active");
      monthlyBtn.classList.toggle("toggler--is-active");
      monthBlock && monthBlock.classList.toggle("hide");
      yearBlock && yearBlock.classList.toggle("hide");
    });
  }

  /* -------------------------
     Circle progress and other in-view animations
     ------------------------- */
  function initCircleProgressAndCounters() {
    // Using IntersectionObserver to animate when visible
    const progressItems = $$(".feature-circle .progressbar, .about-circle .progressbar, .about-circle2 .progressbar");
    if (progressItems.length === 0) return;
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.dataset.animate) return;
        el.dataset.animate = "true";
        const circle = el.querySelector(".circle");
        const percent = parseFloat(circle && circle.getAttribute("data-percent") || 0) / 100;
        const size = parseInt(circle && circle.getAttribute("data-size") || 100);
        const thickness = parseInt(circle && circle.getAttribute("data-thickness") || 8);
        const color = el.getAttribute("data-path-color") || "#0B59DB";
        // If you have a circleProgress library, call it. Otherwise animate a CSS or SVG stroke.
        if (typeof jQuery !== "undefined" && jQuery.fn && jQuery.fn.circleProgress) {
          jQuery(circle).circleProgress({
            startAngle: -Math.PI / 2,
            value: percent,
            size: size,
            thickness: thickness,
            emptyFill: "#E4E4E4",
            lineCap: "round",
            fill: { color }
          }).on("circle-animation-progress", function (e, a, i) {
            const label = this.el.querySelector && this.el.querySelector(".circle-num");
            if (label) label.textContent = Math.round(100 * i) + "%";
          });
        } else {
          // Fallback: set width of inner number and text
          const label = el.querySelector(".circle-num");
          if (label) {
            let cur = 0;
            const target = Math.round(percent * 100);
            const start = performance.now();
            const duration = 800;
            (function frame(now) {
              const t = Math.min(1, (now - start) / duration);
              const val = Math.round(t * target);
              label.textContent = `${val}%`;
              if (t < 1) requestAnimationFrame(frame);
            }(start));
          }
        }
        observer.unobserve(el);
      });
    }, { threshold: 0.1 });

    progressItems.forEach((it) => obs.observe(it));
  }

  /* -------------------------
     Misc UI helpers: fadeIn / fadeOut
     ------------------------- */
  function fadeIn(el, display = "block", duration = 260) {
    if (!el) return;
    el.style.opacity = 0;
    el.style.display = display;
    el.style.transition = `opacity ${duration}ms ease`;
    requestAnimationFrame(() => {
      el.style.opacity = 1;
    });
  }
  function fadeOut(el, duration = 260) {
    if (!el) return;
    el.style.transition = `opacity ${duration}ms ease`;
    el.style.opacity = 0;
    setTimeout(() => { el.style.display = "none"; }, duration);
  }

  /* -------------------------
     Filters & Isotope grid
     ------------------------- */
  function initIsotopeFilters() {
    const grid = document.querySelector(".grid");
    if (!grid) return;
    // if Isotope is present initialize
    if (typeof Isotope === "function") {
      const iso = new Isotope(grid, { itemSelector: ".grid-item", percentPosition: true, masonry: { columnWidth: ".grid-item" } });
      document.querySelectorAll(".case-menu button").forEach((btn) => {
        on(btn, "click", () => {
          const filter = btn.getAttribute("data-filter") || "*";
          iso.arrange({ filter });
        });
      });
    } else {
      // fallback: simple hide/show filter logic
      document.querySelectorAll(".case-menu button").forEach((btn) => {
        on(btn, "click", () => {
          const filter = btn.getAttribute("data-filter");
          $$(".grid .grid-item").forEach((it) => {
            if (!filter || filter === "*" || it.matches(filter)) it.style.display = "";
            else it.style.display = "none";
          });
        });
      });
    }
  }

  /* -------------------------
     Load more for FAQ-like lists
     ------------------------- */
  function initLoadMore() {
    // show first 4 of .faq-area and reveal more on #loadMore
    const items = $$(".loadcontent");
    if (!items.length) return;
    items.forEach((it, idx) => { if (idx >= 0 && idx < 4) it.style.display = ""; else it.style.display = "none"; });
    const loadBtn = $("#loadMore");
    if (!loadBtn) return;
    on(loadBtn, "click", (e) => {
      e.preventDefault();
      const hidden = items.filter(i => i.style.display === "none");
      hidden.slice(0, 3).forEach(it => fadeIn(it, "block"));
      const remaining = items.filter(i => i.style.display === "none");
      if (remaining.length === 0) {
        loadBtn.textContent = "No Content";
        loadBtn.classList.add("noContent");
        loadBtn.disabled = true;
      }
    });
  }

  /* -------------------------
     Quantity plus/minus
     ------------------------- */
  function initQuantityControls() {
    document.addEventListener("click", (e) => {
      const plus = closest(e.target, ".quantity-plus");
      if (plus) {
        e.preventDefault();
        const input = plus.parentElement.querySelector(".qty-input");
        if (!input) return;
        const val = parseInt(input.value, 10) || 0;
        input.value = val + 1;
      }
      const minus = closest(e.target, ".quantity-minus");
      if (minus) {
        e.preventDefault();
        const input = minus.parentElement.querySelector(".qty-input");
        if (!input) return;
        const val = parseInt(input.value, 10) || 0;
        if (val > 1) input.value = val - 1;
      }
    });
  }

  /* -------------------------
     Payment/rating toggles and shipping toggles
     ------------------------- */
  function initWooAndShipping() {
    document.addEventListener("change", (e) => {
      if (e.target && e.target.matches('#ship-to-different-address-checkbox')) {
        const shipping = document.querySelector("#ship-to-different-address");
        if (!shipping) return;
        if (e.target.checked) fadeIn(shipping.nextElementSibling || shipping);
        else fadeOut(shipping.nextElementSibling || shipping);
      }
      if (e.target && e.target.matches('.wc_payment_methods input[type="radio"]')) {
        $$(".payment_box").forEach(pb => fadeOut(pb));
        const box = e.target.parentElement.querySelector(".payment_box");
        if (box) fadeIn(box);
      }
    });

    document.addEventListener("click", (e) => {
      const el = closest(e.target, ".rating-select .stars a");
      if (el) {
        e.preventDefault();
        const siblings = el.parentElement.children;
        Array.from(siblings).forEach(s => s.classList.remove("active"));
        const parentParent = el.parentElement.parentElement;
        if (parentParent) parentParent.classList.add("selected");
        el.classList.add("active");
      }
    });
  }

  /* -------------------------
     Initialize everything
     ------------------------- */
  function initAll() {
    applyDataAni();
    initPreloader();
    initThMobileMenu();
    initSticky();
    initScrollTop();
    applyDataBackgrounds();
    initSwipers();
    initHoverAndAccordions();
    inlineSvg();
    initPopups();
    initAjaxContact();
    initSideMenus();
    initPricingToggle();
    initCircleProgressAndCounters();
    initIsotopeFilters();
    initLoadMore();
    initQuantityControls();
    initWooAndShipping();
    initSmoothScroll();

    // Reveal on ready: data-anis
    // Also re-run on images loaded in sections that depend on images
    ensureImagesLoaded(document, () => {
      applyDataAni();
    });

    // Prevent default devtools key combos (original had this).
    document.onkeydown = function (event) {
      if (!event) event = window.event;
      // block F12 and Ctrl+Shift+I/C/J and Ctrl+U
      if (event.keyCode === 123) return false;
      if (event.ctrlKey && event.shiftKey && (event.keyCode === "I".charCodeAt(0) || event.keyCode === "C".charCodeAt(0) || event.keyCode === "J".charCodeAt(0))) return false;
      if (event.ctrlKey && event.keyCode === "U".charCodeAt(0)) return false;
    };
  }

  // Run after DOM ready
  ready(initAll);

})();
