// public copy of testimonial init with debug
console.debug('testimonial: public copy loaded');

document.addEventListener('DOMContentLoaded', async () => {
  console.debug('testimonial: DOMContentLoaded (public copy)');
  const container = document.querySelector('.testimonial-carousel');
  if (!container) {
    console.debug('testimonial: .testimonial-carousel not found (public copy)');
    return;
  }

  try {
    console.debug('testimonial: dynamic import (public copy)');
    const [{ default: Swiper }, { Navigation }] = await Promise.all([
      import('/node_modules/swiper/swiper-bundle.esm.browser.js'),
      import('/node_modules/swiper/modules/navigation/navigation.js').then(m => ({ Navigation: m.Navigation })),
    ]);

    const testimonialSwiper = new Swiper(container, {
      modules: [Navigation],
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

    console.debug('testimonial: swiper initialized (public copy)');
  } catch (err) {
    console.error('testimonial: Failed to initialize testimonial swiper (public copy)', err);
  }
});
