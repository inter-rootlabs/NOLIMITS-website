/**
 * NoLimits Events - Home Page Controller
 * Handles Hero Slider, Speech Callouts, Service Carousel Drag, Counter Animation & Process Timeline.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initServiceCarousel();
  initCounterStats();
  initProcessTimeline();
  initTestimonialsCarousel();
});

/* --------------------------------------------------------------------------
   1. HERO SLIDER & THUMBNAIL SELECTOR
   -------------------------------------------------------------------------- */
function initHeroSlider() {
  const slidesData = SITE_CONFIG?.heroSlides || [];
  if (!slidesData.length) return;

  let currentIndex = 0;
  let autoSlideInterval = null;

  const heroImageContainer = document.getElementById('hero-image-container');
  const thumbsContainer = document.getElementById('hero-thumbs-list');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');

  const bubbleTopRight = document.getElementById('bubble-top-right-text');
  const bubbleBottomLeft = document.getElementById('bubble-bottom-left-text');
  const heroSlideTitle = document.getElementById('hero-slide-title');

  if (!heroImageContainer || !thumbsContainer) return;

  // Build Hero Images & Thumbnails dynamically
  heroImageContainer.innerHTML = '';
  thumbsContainer.innerHTML = '';

  slidesData.forEach((slide, index) => {
    // Image element
    const img = document.createElement('img');
    img.src = slide.image;
    img.alt = slide.title;
    img.className = `hero-slide-img ${index === 0 ? 'active' : ''}`;
    img.dataset.index = index;
    heroImageContainer.appendChild(img);

    // Thumbnail element
    const thumb = document.createElement('div');
    thumb.className = `hero-thumb-item ${index === 0 ? 'active' : ''}`;
    thumb.dataset.index = index;
    thumb.innerHTML = `<img src="${slide.thumb}" alt="${slide.title}">`;

    thumb.addEventListener('click', () => {
      goToSlide(index);
      resetAutoSlide();
    });

    thumbsContainer.appendChild(thumb);
  });

  // Next / Prev button listeners
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide((currentIndex + 1) % slidesData.length);
      resetAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide((currentIndex - 1 + slidesData.length) % slidesData.length);
      resetAutoSlide();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const heroSec = document.querySelector('.hero-section');
    if (!heroSec) return;

    if (e.key === 'ArrowRight') {
      goToSlide((currentIndex + 1) % slidesData.length);
      resetAutoSlide();
    } else if (e.key === 'ArrowLeft') {
      goToSlide((currentIndex - 1 + slidesData.length) % slidesData.length);
      resetAutoSlide();
    }
  });

  // Touch Swipe Support
  let touchStartX = 0;
  heroImageContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  heroImageContainer.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      goToSlide((currentIndex + 1) % slidesData.length);
      resetAutoSlide();
    } else if (touchEndX - touchStartX > 50) {
      goToSlide((currentIndex - 1 + slidesData.length) % slidesData.length);
      resetAutoSlide();
    }
  }, { passive: true });

  function goToSlide(index) {
    currentIndex = index;
    const slideData = slidesData[index];

    // Toggle active slide image
    const imgs = heroImageContainer.querySelectorAll('.hero-slide-img');
    imgs.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });

    // Toggle active thumbnail
    const thumbs = thumbsContainer.querySelectorAll('.hero-thumb-item');
    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });

    // Update speech bubbles
    if (bubbleTopRight && slideData.callouts[0]) {
      bubbleTopRight.textContent = slideData.callouts[0].text;
    }

    if (bubbleBottomLeft && slideData.callouts[1]) {
      bubbleBottomLeft.textContent = slideData.callouts[1].text;
    }

    if (heroSlideTitle) {
      heroSlideTitle.textContent = slideData.subtitle;
    }
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      goToSlide((currentIndex + 1) % slidesData.length);
    }, 6000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  // Pause on hover
  heroImageContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
  heroImageContainer.addEventListener('mouseleave', startAutoSlide);

  startAutoSlide();
}

/* --------------------------------------------------------------------------
   2. SERVICE CAROUSEL DRAG & ARROWS
   -------------------------------------------------------------------------- */
function initServiceCarousel() {
  const track = document.getElementById('service-carousel-track');
  const prevBtn = document.getElementById('service-carousel-prev');
  const nextBtn = document.getElementById('service-carousel-next');

  if (!track) return;

  // Horizontal Dragging Logic
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.cursor = 'grabbing';
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.style.cursor = 'grab';
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.style.cursor = 'grab';
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
  });

  // Prev / Next Scroll Buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -360, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: 360, behavior: 'smooth' });
    });
  }
}

/* --------------------------------------------------------------------------
   3. ANIMATED COUNTER STATS
   -------------------------------------------------------------------------- */
function initCounterStats() {
  const statElements = document.querySelectorAll('.stat-number');
  if (!statElements.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statElements.forEach(el => {
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          let count = 0;
          const duration = 2000;
          const increment = Math.ceil(target / (duration / 16));

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            el.textContent = `${count}${suffix}`;
          }, 16);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('stats-section');
  if (statsSection) observer.observe(statsSection);
}

/* --------------------------------------------------------------------------
   4. PROCESS TIMELINE SCROLL LIGHTING DIYAS
   -------------------------------------------------------------------------- */
function initProcessTimeline() {
  const timelineSteps = document.querySelectorAll('.timeline-step');
  const progressLine = document.querySelector('.timeline-line-progress');

  if (!timelineSteps.length) return;

  window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.75;
    let activeStepsCount = 0;

    timelineSteps.forEach((step, idx) => {
      const stepTop = step.getBoundingClientRect().top;

      if (stepTop < triggerBottom) {
        step.classList.add('active');
        activeStepsCount++;
      } else {
        step.classList.remove('active');
      }
    });

    if (progressLine) {
      const percentage = (activeStepsCount / timelineSteps.length) * 100;
      progressLine.style.height = `${percentage}%`;
    }
  });
}

/* --------------------------------------------------------------------------
   5. TESTIMONIALS CAROUSEL
   -------------------------------------------------------------------------- */
function initTestimonialsCarousel() {
  const testimonials = SITE_CONFIG?.testimonials || [];
  const container = document.getElementById('testimonials-slider');

  if (!container || !testimonials.length) return;

  let currentIdx = 0;
  container.innerHTML = '';

  const card = document.createElement('div');
  card.className = 'testimonial-card';
  container.appendChild(card);

  function renderTestimonial(idx) {
    const item = testimonials[idx];
    card.innerHTML = `
      <div class="testimonial-stars" style="color: var(--gold); font-size: 1.2rem;">★★★★★</div>
      <p class="testimonial-quote">"${item.quote}"</p>
      <div>
        <div class="testimonial-author">${item.author}</div>
        <div class="testimonial-occasion">${item.occasion}</div>
      </div>
    `;
  }

  renderTestimonial(0);

  // Auto switch testimonials
  setInterval(() => {
    currentIdx = (currentIdx + 1) % testimonials.length;
    renderTestimonial(currentIdx);
  }, 7000);
}
