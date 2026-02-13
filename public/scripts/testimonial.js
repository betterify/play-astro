// public copy of testimonial init using Swiper UMD from CDN
(function () {
  console.debug('testimonial: public copy loaded');

  function addCss(href) {
    if (document.querySelector('link[data-swiper-css]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.setAttribute('data-swiper-css', 'true');
    document.head.appendChild(link);
  }

  function addScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function init() {
    const container = document.querySelector('.testimonial-carousel');
    if (!container) {
      console.debug('testimonial: .testimonial-carousel not found');
      return;
    }

    try {
      console.debug('testimonial: loading Swiper from CDN (UMD)');
      addCss('https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css');
      
      // Load Swiper UMD from CDN (creates window.Swiper global)
      await addScript('https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js');
      
      if (!window.Swiper) {
        throw new Error('Swiper not found on window object');
      }

      console.debug('testimonial: Swiper loaded, initializing');
      // eslint-disable-next-line no-unused-vars
      const testimonialSwiper = new window.Swiper(container, {
        modules: [],
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

      console.debug('testimonial: swiper initialized successfully');
    } catch (err) {
      console.error('testimonial: Failed to initialize', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
