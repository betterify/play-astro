// public copy of dropdown.js
// Handles responsive navbar toggling
(function(){
  // idempotent navbar initializer (public copy)
  function initializeNavbar() {
    console.debug('dropdown: initializeNavbar called');
    const navbarToggler = document.querySelector('#navbarToggler');
    const navbarCollapse = document.querySelector('#navbarCollapse');

    if (!navbarToggler || !navbarCollapse) {
      console.warn('Navbar elements not found (public copy)');
      return;
    }

    if (navbarToggler.dataset.dropdownInitialized === 'true') {
      console.debug('dropdown: already initialized (public copy)');
      return;
    }

    navbarToggler.addEventListener('click', () => {
      console.debug('dropdown: navbarToggler clicked, toggling menu visibility');
      navbarToggler.classList.toggle('navbarTogglerActive');
      console.debug('dropdown: navbarTogglerActive toggled, current classes:', navbarToggler.className);
      navbarCollapse.classList.toggle('hidden');
      console.debug('dropdown: hidden toggle applied, navbarCollapse classes:', navbarCollapse.className);
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

    navbarToggler.dataset.dropdownInitialized = 'true';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNavbar);
  } else {
    initializeNavbar();
  }
})();
