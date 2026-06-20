/* ============================================
   QUALSCAN — Site Interactions
   ============================================ */

(function () {
  'use strict';

  // === Mobile Navigation Toggle ===
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // === Header scroll effect ===
  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.style.borderBottomColor = 'rgba(255,255,255,0.1)';
        header.style.background = 'rgba(10, 25, 41, 0.97)';
      } else {
        header.style.borderBottomColor = 'rgba(255,255,255,0.06)';
        header.style.background = 'rgba(10, 25, 41, 0.92)';
      }
    });
  }

  // === Scroll Reveal Animation ===
  const revealElements = document.querySelectorAll('.reveal');

  function checkReveal() {
    const triggerBottom = window.innerHeight * 0.88;
    revealElements.forEach(function (el) {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < triggerBottom) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkReveal);
  window.addEventListener('load', checkReveal);
  checkReveal();

  // === Counter Animation (0 → number) ===
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateSingleCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.round(target * easeOutCubic(progress));
      el.textContent = prefix + current + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  function animateMultiCounter(el) {
    const parts = el.getAttribute('data-parts').split(',').map(Number);
    const sep = el.getAttribute('data-sep') || '/';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = easeOutCubic(progress);
      const values = parts.map(function (target) {
        return Math.max(1, Math.round(target * ease));
      });
      el.textContent = values.join(sep);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // Observe counters
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length > 0) {
    function runCounter(el) {
      if (el.dataset.done === '1') return;
      el.dataset.done = '1';
      if (el.getAttribute('data-counter') === 'multi') {
        animateMultiCounter(el);
      } else {
        animateSingleCounter(el);
      }
    }

    if ('IntersectionObserver' in window) {
      const counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      counters.forEach(function (el) { counterObserver.observe(el); });
    }

    // Fallback: trigger on scroll/load if observer didn't fire
    function counterFallback() {
      counters.forEach(function (el) {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.9) runCounter(el);
      });
    }
    window.addEventListener('scroll', counterFallback);
    window.addEventListener('load', counterFallback);
    counterFallback();
  }

  // === Contact Form Handler ===
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you shortly.');
      contactForm.reset();
    });
  }

})();
