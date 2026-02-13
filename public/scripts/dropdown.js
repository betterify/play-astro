// public copy of dropdown.js
// Handles responsive navbar toggling
(function(){
  console.log('%cDROPDOWN', 'color: blue; font-weight: bold', 'IIFE wrapper executed');
  
  function initializeNavbar() {
    console.log('%cDROPDOWN:init', 'color: blue', 'initializeNavbar() called');
    const navbarToggler = document.querySelector('#navbarToggler');
    const navbarCollapse = document.querySelector('#navbarCollapse');

    console.log('%cDROPDOWN:init', 'color: blue', 'navbarToggler found:', !!navbarToggler, navbarToggler);
    console.log('%cDROPDOWN:init', 'color: blue', 'navbarCollapse found:', !!navbarCollapse, navbarCollapse);

    if (!navbarToggler || !navbarCollapse) {
      console.warn('Navbar elements not found (public copy)');
      return;
    }

    console.log('%cDROPDOWN:init', 'color: blue', 'Attaching click listener to navbarToggler');
    navbarToggler.addEventListener('click', (e) => {
      console.log('%cDROPDOWN:click', 'color: orange', 'Click event fired!');
      e.preventDefault();
      e.stopPropagation();
      navbarToggler.classList.toggle('navbarTogglerActive');
      navbarCollapse.classList.toggle('hidden');
      console.log('%cDROPDOWN:click', 'color: orange', 'Menu hidden state:', navbarCollapse.classList.contains('hidden'));
      console.log('%cDROPDOWN:click', 'color: orange', 'Toggler active state:', navbarToggler.classList.contains('navbarTogglerActive'));
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

    console.log('%cDROPDOWN:init', 'color: blue', 'All listeners attached successfully');
  }

  console.log('%cDROPDOWN', 'color: blue', 'Document readyState:', document.readyState);
  if (document.readyState === 'loading') {
    console.log('%cDROPDOWN', 'color: blue', 'Document still loading, attaching DOMContentLoaded listener');
    document.addEventListener('DOMContentLoaded', initializeNavbar);
  } else {
    console.log('%cDROPDOWN', 'color: blue', 'Document already loaded, calling initializeNavbar immediately');
    initializeNavbar();
  }
})();
