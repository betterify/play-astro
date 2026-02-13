// Scroll to top handler
(function () {
  console.debug('scrolltop: loaded');

  const backToTopButton = document.querySelector('.back-to-top');
  if (!backToTopButton) {
    console.debug('scrolltop: .back-to-top not found');
    return;
  }

  function scrollHandler() {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove('hidden');
    } else {
      backToTopButton.classList.add('hidden');
    }
  }

  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', scrollHandler, { passive: true });
  console.debug('scrolltop: initialized');
})();
