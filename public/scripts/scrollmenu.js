// Scroll menu - adds active state to menu items based on scroll position
(function () {
  console.debug('scrollmenu: loaded');

  const sections = document.querySelectorAll('section[id]');
  const menuItems = document.querySelectorAll('#navbarCollapse a');

  if (sections.length === 0 || menuItems.length === 0) {
    console.debug('scrollmenu: sections or menu items not found');
    return;
  }

  function updateActiveSection() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    menuItems.forEach(item => {
      item.classList.remove('ud-menu-scroll', 'active');
      if (item.getAttribute('href') === `#${current}` || item.getAttribute('href') === `/#${current}`) {
        item.classList.add('ud-menu-scroll', 'active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();
  console.debug('scrollmenu: initialized');
})();
