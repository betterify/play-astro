// ===== responsive navbar
function initializeNavbar() {
  const navbarToggler = document.querySelector('#navbarToggler');
  const navbarCollapse = document.querySelector('#navbarCollapse');

  if (!navbarToggler || !navbarCollapse) {
    console.warn('Navbar elements not found');
    return;
  }

  navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('navbarTogglerActive');
    navbarCollapse.classList.toggle('hidden');
  });

  //===== close navbar-collapse when a link is clicked
  document.querySelectorAll('#navbarCollapse ul li:not(.submenu-item) a').forEach((e) =>
    e.addEventListener('click', () => {
      navbarToggler.classList.remove('navbarTogglerActive');
      navbarCollapse.classList.add('hidden');
    })
  );

  // ===== Sub-menu
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

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeNavbar);
} else {
  initializeNavbar();
}
