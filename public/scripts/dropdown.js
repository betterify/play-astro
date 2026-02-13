// public copy of dropdown.js
// Handles responsive navbar toggling
// NOTE: Header.astro also has an inline script for this, so we check for duplication
(function(){
  console.log('%cDROPDOWN', 'color: blue; font-weight: bold', 'IIFE wrapper executed');
  
  function initializeNavbar() {
    console.log('%cDROPDOWN:init', 'color: blue', 'initializeNavbar() called');
    const navbarToggler = document.querySelector('#navbarToggler');
    const navbarCollapse = document.querySelector('#navbarCollapse');

    // Check if Header already initialized this
    if (navbarToggler && navbarToggler.dataset.navbarInitialized === 'true') {
      console.log('%cDROPDOWN', 'color: blue', 'Header.astro already initialized navbar, skipping');
      return;
    }

    console.log('%cDROPDOWN:init', 'color: blue', 'navbarToggler found:', !!navbarToggler, navbarToggler);
    console.log('%cDROPDOWN:init', 'color: blue', 'navbarCollapse found:', !!navbarCollapse, navbarCollapse);

    if (!navbarToggler || !navbarCollapse) {
      console.warn('Navbar elements not found (public copy)');
      return;
    }

    console.log('%cDROPDOWN:init', 'color: blue', 'Attaching click listener to navbarToggler');
    
    // Test if the button is interactive
    console.log('%cDROPDOWN:init', 'color: blue', 'Button styles:', {
      display: window.getComputedStyle(navbarToggler).display,
      pointerEvents: window.getComputedStyle(navbarToggler).pointerEvents,
      visibility: window.getComputedStyle(navbarToggler).visibility,
      opacity: window.getComputedStyle(navbarToggler).opacity,
    });
    
    navbarToggler.addEventListener('click', (e) => {
      console.log('%cDROPDOWN:click', 'color: orange', 'Click event fired!');
      e.preventDefault();
      e.stopPropagation();
      navbarToggler.classList.toggle('navbarTogglerActive');
      navbarCollapse.classList.toggle('hidden');
      console.log('%cDROPDOWN:click', 'color: orange', 'Menu hidden state:', navbarCollapse.classList.contains('hidden'));
      console.log('%cDROPDOWN:click', 'color: orange', 'Toggler active state:', navbarToggler.classList.contains('navbarTogglerActive'));
    });

    // Also add mousedown listener as backup
    navbarToggler.addEventListener('mousedown', (e) => {
      console.log('%cDROPDOWN:mousedown', 'color: purple', 'Mousedown event fired!');
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

    // Mark as initialized
    navbarToggler.dataset.navbarInitialized = 'true';
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
