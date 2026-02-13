import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Initialize Swiper using static imports so Vite bundles Swiper into the client chunk.
document.addEventListener('DOMContentLoaded', () => {
  console.debug('testimonial: DOMContentLoaded (bundled)');
  const container = document.querySelector('.testimonial-carousel');
  if (!container) {
    console.debug('testimonial: .testimonial-carousel not found (bundled), skipping');
    return;
  }

  try {
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

    console.debug('testimonial: swiper initialized (bundled)');
  } catch (err) {
    console.error('testimonial: Failed to initialize testimonial swiper (bundled)', err);
  }
});
