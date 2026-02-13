// public copy of dropdown.js
// Handles responsive navbar toggling
(function(){
  // existing logic
  function initializeNavbar() {
    const navbarToggler = document.querySelector('#navbarToggler');
    const navbarCollapse = document.querySelector('#navbarCollapse');

    if (!navbarToggler || !navbarCollapse) {
      console.warn('Navbar elements not found (public copy)');
      return;
    }

    navbarToggler.addEventListener('click', () => {
      navbarToggler.classList.toggle('navbarTogglerActive');
      navbarCollapse.classList.toggle('hidden');
    });

    document.querySelectorAll('#navbarCollapse ul li:not(.submenu-item) a').forEach((e) =>
      e.addEventListener('click', () => {
        navbarToggler.classList.remove('navbarTogglerActive');
        navbarCollapse.classList.add('hidden');
      })
    );

    const submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach((el) => {
      const link = el.querySelector('a');
      if (link) {
        link.addEventListener('click', (e) => {
          const submenu = el.querySelector('.submenu');
          if (submenu) {
            e.preventDefault();
            submenu.classList.toggle('hidden');
          }
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNavbar);
  } else {
    initializeNavbar();
  }
})();
