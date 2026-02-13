// public copy of testimonial init using Swiper UMD from CDN
(function () {
  console.log('%cTESTIMONIAL', 'color: green; font-weight: bold', 'Script loaded');

  function addCss(href) {
    if (document.querySelector('link[data-swiper-css]')) {
      console.log('%cTESTIMONIAL:css', 'color: green', 'Swiper CSS already loaded');
      return;
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.setAttribute('data-swiper-css', 'true');
    document.head.appendChild(link);
    console.log('%cTESTIMONIAL:css', 'color: green', 'Swiper CSS injected:', href);
  }

  function addScript(src) {
    return new Promise((resolve, reject) => {
      console.log('%cTESTIMONIAL:js', 'color: green', 'Loading script:', src);
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        console.log('%cTESTIMONIAL:js', 'color: green', 'Script loaded successfully:', src);
        resolve();
      };
      script.onerror = (err) => {
        console.error('%cTESTIMONIAL:js', 'color: red', 'Script load failed:', src, err);
        reject(err);
      };
      document.head.appendChild(script);
    });
  }

  async function init() {
    console.log('%cTESTIMONIAL:init', 'color: green', 'init() called');
    const container = document.querySelector('.testimonial-carousel');
    console.log('%cTESTIMONIAL:init', 'color: green', 'Container found:', !!container, container);
    
    if (!container) {
      console.debug('testimonial: .testimonial-carousel not found');
      return;
    }

    try {
      console.log('%cTESTIMONIAL:init', 'color: green', 'Swiper window object before load:', !!window.Swiper);
      addCss('https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css');
      
      // Load Swiper UMD from CDN (creates window.Swiper global)
      await addScript('https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js');
      
      console.log('%cTESTIMONIAL:init', 'color: green', 'Swiper window object after load:', !!window.Swiper, window.Swiper);
      
      if (!window.Swiper) {
        throw new Error('Swiper not found on window object');
      }

      console.log('%cTESTIMONIAL:init', 'color: green', 'Creating Swiper instance');
      
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

      console.log('%cTESTIMONIAL:init', 'color: green', 'Swiper instance created successfully');
      
      // Verify navigation buttons are working
      const prevBtn = document.querySelector('.swiper-button-prev');
      const nextBtn = document.querySelector('.swiper-button-next');
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          console.log('%cTESTIMONIAL:nav', 'color: green', 'Prev button clicked (manual listener)');
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          console.log('%cTESTIMONIAL:nav', 'color: green', 'Next button clicked (manual listener)');
        });
      }
    } catch (err) {
      console.error('%cTESTIMONIAL:error', 'color: red; font-weight: bold', 'Failed to initialize', err);
    }
  }

  console.log('%cTESTIMONIAL', 'color: green', 'Document readyState:', document.readyState);
  if (document.readyState === 'loading') {
    console.log('%cTESTIMONIAL', 'color: green', 'Attaching to DOMContentLoaded');
    document.addEventListener('DOMContentLoaded', init);
  } else {
    console.log('%cTESTIMONIAL', 'color: green', 'DOM already loaded, calling init immediately');
    init();
  }
})();
