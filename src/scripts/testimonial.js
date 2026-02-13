import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.testimonial-carousel');
  if (!container) return;

  // initialize Swiper safely on client
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
});
