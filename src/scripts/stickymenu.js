// ======= Sticky
document.addEventListener('DOMContentLoaded', function () {
  const ud_header = document.querySelector('.ud-header');
  if (!ud_header) return;

  const logo = document.querySelectorAll('.header-logo');
  const backToTop = document.querySelector('.back-to-top');

  const handleScroll = () => {
    const scrolled = window.pageYOffset > 0;

    if (scrolled) {
      ud_header.classList.add('sticky-header');
      ud_header.classList.remove('absolute', 'bg-transparent');
      // enforce fixed positioning in case CSS ordering prevents utility override
      ud_header.style.position = 'fixed';
      ud_header.style.top = '0';
      ud_header.style.left = '0';
    } else {
      ud_header.classList.remove('sticky-header');
      ud_header.classList.add('absolute', 'bg-transparent');
      ud_header.style.position = 'absolute';
      ud_header.style.top = '0';
      ud_header.style.left = '0';
    }

    // logo switching logic
    if (logo.length) {
      const logoEl = document.querySelector('.header-logo');
      if (logoEl) {
        if (document.documentElement.classList.contains('dark')) {
          // in dark mode prefer white logo when sticky
          logoEl.src = ud_header.classList.contains('sticky-header') ? '/assets/logo/logo-white.svg' : '/assets/logo/logo-white.svg';
        } else {
          logoEl.src = ud_header.classList.contains('sticky-header') ? '/assets/logo/logo.svg' : '/assets/logo/logo-white.svg';
        }
      }
    }

    // show or hide the back-to-top button
    if (backToTop) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'none';
      }
    }
  };

  // initial check + register
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});
