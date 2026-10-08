/**
 * NoLimits Events - Main JavaScript Controller
 * Handles Navigation, Preloader, Page Transitions, Lenis Smooth Scroll, GSAP, Custom Cursor, WhatsApp CTA.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Global Features
  initPreloader();
  initPageTransitions();
  initHeaderAndNav();
  initSmoothScroll();
  initCustomCursor();
  initAmbientParticles();
  initMagneticButtons();
  initScrollProgress();
  initWhatsAppButton();
});

/* --------------------------------------------------------------------------
   1. PRELOADER LOGIC (Runs once per session)
   -------------------------------------------------------------------------- */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  const hasSeenPreloader = sessionStorage.getItem('nolimits_preloader_seen');
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (hasSeenPreloader || isReducedMotion) {
    preloader.style.display = 'none';
    document.body.classList.add('loaded');
    return;
  }

  // Preloader animation timeout (Max ~2.2s)
  const preloaderTimer = setTimeout(() => {
    dismissPreloader();
  }, 2200);

  const skipBtn = document.getElementById('preloader-skip');
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      clearTimeout(preloaderTimer);
      dismissPreloader();
    });
  }

  function dismissPreloader() {
    const doorLeft = preloader.querySelector('.preloader-door.left');
    const doorRight = preloader.querySelector('.preloader-door.right');
    const content = preloader.querySelector('.preloader-content');

    if (content) content.style.opacity = '0';

    if (doorLeft && doorRight) {
      doorLeft.style.transform = 'translateX(-100%)';
      doorRight.style.transform = 'translateX(100%)';
    }

    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.pointerEvents = 'none';
      setTimeout(() => {
        preloader.style.display = 'none';
        document.body.classList.add('loaded');
        sessionStorage.setItem('nolimits_preloader_seen', 'true');
      }, 400);
    }, 600);
  }
}

/* --------------------------------------------------------------------------
   2. PAGE TRANSITIONS (Gold-edged Curtain Wipe)
   -------------------------------------------------------------------------- */
function initPageTransitions() {
  const curtain = document.getElementById('page-curtain');
  if (!curtain) return;

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReducedMotion) return;

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');

    // Filter out external, anchor, or special links
    if (
      !href ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('wa.me') ||
      link.getAttribute('target') === '_blank' ||
      link.classList.contains('no-transition')
    ) {
      return;
    }

    // Intercept internal page navigation
    if (href.endsWith('.html') || href === '/' || href.includes('.html?')) {
      e.preventDefault();

      // Wipe curtain across
      curtain.style.transition = 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)';
      curtain.style.transform = 'translateX(0)';

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    }
  });

  // Handle curtain wipe out on page show
  window.addEventListener('pageshow', () => {
    curtain.style.transition = 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)';
    curtain.style.transform = 'translateX(100%)';
    setTimeout(() => {
      curtain.style.transition = 'none';
      curtain.style.transform = 'translateX(-100%)';
    }, 500);
  });
}

/* --------------------------------------------------------------------------
   3. HEADER & MOBILE MENU NAV
   -------------------------------------------------------------------------- */
function initHeaderAndNav() {
  const header = document.querySelector('.site-header');
  const hamburger = document.getElementById('mobile-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuBtn = document.getElementById('mobile-menu-close');

  // Highlight Active Page Link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link-item a, .mobile-nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.parentElement.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Sticky Header on Scroll
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Hide header on scroll down, show on scroll up
    if (currentScrollY > 300 && currentScrollY > lastScrollY) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
  });

  // Mobile Hamburger Toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      toggleMobileMenu(true);
    });

    if (closeMenuBtn) {
      closeMenuBtn.addEventListener('click', () => {
        toggleMobileMenu(false);
      });
    }

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        toggleMobileMenu(false);
      }
    });
  }

  function toggleMobileMenu(open) {
    if (open) {
      mobileMenu.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }
}

/* --------------------------------------------------------------------------
   4. LENIS SMOOTH SCROLL & GSAP SYNC
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Graceful degradation: Check if Lenis library loaded from CDN
  if (typeof Lenis !== 'undefined' && !isReducedMotion && !isTouchDevice) {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger if available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0, 0);
    }
  }
}

/* --------------------------------------------------------------------------
   5. CUSTOM CURSOR
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const dot = document.getElementById('custom-cursor-dot');
  const ring = document.getElementById('custom-cursor-ring');

  if (!dot || !ring) return;

  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  if (!isFinePointer) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover states over interactive elements
  const interactiveSelector = 'a, button, .service-card-tall, .gallery-item-card, .hero-thumb-item';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add('hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove('hovering');
    }
  });
}

/* --------------------------------------------------------------------------
   6. AMBIENT PARTICLES (GOLD DUST / PETALS CANVAS)
   -------------------------------------------------------------------------- */
function initAmbientParticles() {
  const canvas = document.getElementById('hero-particles-canvas');
  if (!canvas) return;

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReducedMotion || window.innerWidth < 480) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = canvas.parentElement.offsetWidth;
  let height = canvas.height = canvas.parentElement.offsetHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const particleCount = 35;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.5 + 1,
      alpha: Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: Math.random() * 0.5 + 0.2
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#D9A441';

    particles.forEach(p => {
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y > height) {
        p.y = 0;
        p.x = Math.random() * width;
      }
    });

    requestAnimationFrame(drawParticles);
  }
  drawParticles();
}

/* --------------------------------------------------------------------------
   7. MAGNETIC BUTTONS (Desktop fine pointer)
   -------------------------------------------------------------------------- */
function initMagneticButtons() {
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  if (!isFinePointer) return;

  const magneticBtns = document.querySelectorAll('.btn-pill, .btn-arrow-badge');

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate3d(${x * 0.2}px, ${y * 0.2}px, 0)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate3d(0, 0, 0)';
    });
  });
}

/* --------------------------------------------------------------------------
   8. SCROLL PROGRESS BAR
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${progress}%`;
  });
}

/* --------------------------------------------------------------------------
   9. FLOATING WHATSAPP CTA
   -------------------------------------------------------------------------- */
function initWhatsAppButton() {
  const waBtn = document.getElementById('whatsapp-float-btn');
  if (!waBtn) return;

  const waNumber = SITE_CONFIG?.contact?.whatsappNumber || "919876543210";
  const defaultMsg = encodeURIComponent(SITE_CONFIG?.contact?.whatsappDefaultMessage || "Hi NoLimits Events, I'd like to plan an event.");

  waBtn.setAttribute('href', `https://wa.me/${waNumber}?text=${defaultMsg}`);
  waBtn.setAttribute('target', '_blank');
  waBtn.setAttribute('rel', 'noopener noreferrer');
}
