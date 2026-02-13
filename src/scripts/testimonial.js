import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', async () => {
  console.debug('testimonial: DOMContentLoaded');
  const container = document.querySelector('.testimonial-carousel');
  if (!container) {
    console.debug('testimonial: .testimonial-carousel not found, skipping init');
    return;
  }

  try {
    console.debug('testimonial: initializing swiper');
    // Dynamically load Swiper only on the client to avoid any SSR/evaluation issues
    const [{ default: Swiper }, { Navigation }] = await Promise.all([
      import('swiper'),
      import('swiper/modules').then(m => ({ Navigation: m.Navigation })),
      import('swiper/css'),
      import('swiper/css/navigation'),
    ]);

    // eslint-disable-next-line no-unused-vars
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

    console.debug('testimonial: swiper initialized');
  } catch (err) {
    // Fail silently but log to console for debugging
    console.error('testimonial: Failed to initialize testimonial swiper', err);
  }
});
