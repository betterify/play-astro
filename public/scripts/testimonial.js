// public copy of testimonial init using CDN (safe, no node_modules path)
(function () {
  console.debug('testimonial: public copy loaded (CDN)');

  function addCss(href) {
    if (document.querySelector('link[data-swiper-css]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.setAttribute('data-swiper-css', 'true');
    document.head.appendChild(link);
  }

  async function init() {
    const container = document.querySelector('.testimonial-carousel');
    if (!container) {
      console.debug('testimonial: .testimonial-carousel not found (public CDN copy)');
      return;
    }

    try {
      console.debug('testimonial: loading Swiper from unpkg CDN');
      addCss('https://unpkg.com/swiper@10/swiper-bundle.min.css');
      // load ESM bundle from unpkg (more reliable than jsDelivr)
      const mod = await import('https://unpkg.com/swiper@10/swiper-bundle.esm.browser.js');
      console.debug('testimonial: Swiper module imported successfully', mod);
      
      const Swiper = mod.default || mod.Swiper || mod;
      const Navigation = mod.Navigation || (mod.modules && mod.modules.Navigation);

      if (!Swiper) throw new Error('Swiper not found from CDN module');

      // Initialize
      // eslint-disable-next-line no-unused-vars
      const testimonialSwiper = new Swiper(container, {
        modules: Navigation ? [Navigation] : [],
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 3, spaceBetween: 30 },
        },
      });

      console.debug('testimonial: swiper initialized (CDN)');
    } catch (err) {
      console.error('testimonial: Failed to initialize testimonial swiper (CDN)', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
