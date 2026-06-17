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

    // Close mobile menu when a link is clicked
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
  // Initial check
  checkReveal();

  // === Contact Form Handler ===
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you shortly.');
      contactForm.reset();
    });
  }

  // === Footer Year ===
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();
