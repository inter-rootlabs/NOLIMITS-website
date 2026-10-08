/**
 * NoLimits Events - Gallery Page Controller
 * Handles Filters, Masonry Grid Rendering, View Toggle, Load More, Query Params & Fullscreen Lightbox.
 */

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('gallery-grid')) return;

  const galleryApp = new GalleryManager();
  galleryApp.init();
});

class GalleryManager {
  constructor() {
    this.allItems = typeof getSortedGalleryItems === 'function' ? getSortedGalleryItems() : (GALLERY_ITEMS || []);
    this.filteredItems = [...this.allItems];
    this.displayedCount = 12;

    this.currentFilters = {
      occasion: 'all',
      service: 'all',
      media: 'all'
    };

    this.currentViewMode = 'all-media'; // 'all-media' | 'by-event'
    this.currentLightboxIdx = 0;
  }

  init() {
    this.parseQueryParams();
    this.setupFilterListeners();
    this.setupViewToggle();
    this.setupLoadMore();
    this.setupLightbox();
    this.applyFilters();
  }

  /* Deep-link Query Parameter Parser */
  parseQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const occasion = urlParams.get('occasion');
    const service = urlParams.get('service');
    const media = urlParams.get('media');

    if (occasion) this.currentFilters.occasion = occasion.toLowerCase();
    if (service) this.currentFilters.service = service.toLowerCase();
    if (media) this.currentFilters.media = media.toLowerCase();

    // Update active UI buttons
    this.updateActiveFilterUI('occasion-filters', this.currentFilters.occasion);
    this.updateActiveFilterUI('service-filters', this.currentFilters.service);
    this.updateActiveFilterUI('media-filters', this.currentFilters.media);
  }

  updateActiveFilterUI(containerId, value) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const btns = container.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
      const btnVal = btn.dataset.value;
      if (btnVal === value) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  setupFilterListeners() {
    const filterContainers = ['occasion-filters', 'service-filters', 'media-filters'];

    filterContainers.forEach(id => {
      const container = document.getElementById(id);
      if (!container) return;

      container.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        const type = id.replace('-filters', '');
        const val = btn.dataset.value;

        this.currentFilters[type] = val;
        this.updateActiveFilterUI(id, val);
        this.displayedCount = 12; // Reset pagination count on filter change
        this.applyFilters();
      });
    });
  }

  applyFilters() {
    this.filteredItems = this.allItems.filter(item => {
      // Occasion filter
      if (this.currentFilters.occasion !== 'all' && item.occasion !== this.currentFilters.occasion) {
        return false;
      }
      // Service filter
      if (this.currentFilters.service !== 'all' && !item.services.includes(this.currentFilters.service)) {
        return false;
      }
      // Media filter
      if (this.currentFilters.media !== 'all' && item.type !== this.currentFilters.media) {
        return false;
      }
      return true;
    });

    // Update Count Display
    const countEl = document.getElementById('gallery-count');
    if (countEl) {
      countEl.textContent = `${this.filteredItems.length} Moments Found`;
    }

    this.renderGrid();
  }

  setupViewToggle() {
    const toggleBtns = document.querySelectorAll('.view-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentViewMode = btn.dataset.mode;
        this.renderGrid();
      });
    });
  }

  setupLoadMore() {
    const loadMoreBtn = document.getElementById('gallery-load-more-btn');
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', () => {
      this.displayedCount += 12;
      this.renderGrid();
    });
  }

  renderGrid() {
    const grid = document.getElementById('gallery-grid');
    const emptyState = document.getElementById('gallery-empty-state');
    const loadMoreBtn = document.getElementById('gallery-load-more-btn');

    if (!grid) return;

    grid.innerHTML = '';

    if (!this.filteredItems.length) {
      if (emptyState) emptyState.style.display = 'block';
      if (loadMoreBtn) loadMoreBtn.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    if (this.currentViewMode === 'by-event') {
      this.renderByEvent(grid);
      if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    } else {
      // Render All Media (Masonry with Pagination)
      const itemsToRender = this.filteredItems.slice(0, this.displayedCount);

      itemsToRender.forEach((item, index) => {
        const card = this.createCardElement(item, index);
        grid.appendChild(card);
      });

      if (loadMoreBtn) {
        loadMoreBtn.style.display = this.displayedCount < this.filteredItems.length ? 'inline-flex' : 'none';
      }
    }
  }

  renderByEvent(container) {
    // Group filtered items by eventName
    const eventsMap = {};
    this.filteredItems.forEach(item => {
      if (!eventsMap[item.eventName]) {
        eventsMap[item.eventName] = {
          title: item.eventName,
          date: item.date,
          location: item.location,
          items: []
        };
      }
      eventsMap[item.eventName].items.push(item);
    });

    Object.values(eventsMap).forEach(evt => {
      const section = document.createElement('div');
      section.className = 'event-group-section';
      section.style.marginBottom = '40px';

      section.innerHTML = `
        <div class="event-group-header" style="margin-bottom: 16px; border-bottom: 1px solid rgba(217,164,65,0.2); padding-bottom: 10px;">
          <h3 class="font-display" style="font-size: 1.6rem; color: var(--gold-light);">${evt.title}</h3>
          <p style="font-size: 0.82rem; color: var(--text-muted);">${evt.date} · ${evt.location}</p>
        </div>
        <div class="event-group-grid gallery-masonry-grid"></div>
      `;

      const groupGrid = section.querySelector('.event-group-grid');
      evt.items.forEach((item, idx) => {
        const card = this.createCardElement(item, this.filteredItems.indexOf(item));
        groupGrid.appendChild(card);
      });

      container.appendChild(section);
    });
  }

  createCardElement(item, globalIndex) {
    const card = document.createElement('div');
    card.className = 'gallery-item-card';
    card.dataset.index = globalIndex;

    const posterSrc = item.type === 'video' ? item.poster : (item.thumb || item.src);

    card.innerHTML = `
      <img src="${posterSrc}" alt="${item.alt}" loading="lazy" width="600" height="450">
      ${item.type === 'video' ? `
        <div class="video-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          VIDEO
        </div>
      ` : ''}
      <div class="gallery-card-overlay">
        <h4 class="font-display" style="font-size: 1.1rem; color: var(--gold-light);">${item.eventName}</h4>
        <p style="font-size: 0.78rem; color: var(--text-muted);">${item.location}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      this.openLightbox(globalIndex);
    });

    return card;
  }

  /* Fullscreen Lightbox Logic */
  setupLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;

    const closeBtn = document.getElementById('lightbox-close-btn');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeLightbox());
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.navigateLightbox(-1));
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.navigateLightbox(1));
    }

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('active')) return;

      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowLeft') this.navigateLightbox(-1);
      if (e.key === 'ArrowRight') this.navigateLightbox(1);
    });

    // Touch Swipe on Lightbox
    let touchStartX = 0;
    modal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modal.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) this.navigateLightbox(1);
      if (touchEndX - touchStartX > 50) this.navigateLightbox(-1);
    }, { passive: true });
  }

  openLightbox(index) {
    this.currentLightboxIdx = index;
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.renderLightboxContent();
  }

  closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';

    // Destroy any playing video iframe to stop audio
    const container = document.getElementById('lightbox-media-container');
    if (container) container.innerHTML = '';
  }

  navigateLightbox(direction) {
    const newIdx = this.currentLightboxIdx + direction;
    if (newIdx >= 0 && newIdx < this.filteredItems.length) {
      this.currentLightboxIdx = newIdx;
      this.renderLightboxContent();
    }
  }

  renderLightboxContent() {
    const item = this.filteredItems[this.currentLightboxIdx];
    if (!item) return;

    const counterEl = document.getElementById('lightbox-counter');
    const container = document.getElementById('lightbox-media-container');
    const captionEl = document.getElementById('lightbox-caption');

    if (counterEl) {
      counterEl.textContent = `${this.currentLightboxIdx + 1} / ${this.filteredItems.length}`;
    }

    if (container) {
      container.innerHTML = '';

      if (item.type === 'video') {
        if (item.videoUrl) {
          // YouTube/Vimeo embed
          const iframe = document.createElement('iframe');
          iframe.src = item.videoUrl;
          iframe.setAttribute('allowfullscreen', 'true');
          iframe.setAttribute('allow', 'autoplay; encrypted-media');
          iframe.style.aspectRatio = '16/9';
          iframe.style.width = '100%';
          iframe.style.height = '480px';
          container.appendChild(iframe);
        } else if (item.videoSrc) {
          // Self hosted MP4
          const video = document.createElement('video');
          video.src = item.videoSrc;
          video.controls = true;
          video.autoplay = true;
          video.playsInline = true;
          container.appendChild(video);
        }
      } else {
        // Image item
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        container.appendChild(img);
      }
    }

    if (captionEl) {
      captionEl.innerHTML = `
        <h3 class="font-display" style="font-size: 1.3rem; color: var(--gold-light);">${item.eventName}</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted);">${item.location} · ${item.date}</p>
      `;
    }
  }
}
