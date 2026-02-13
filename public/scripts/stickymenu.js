// ===== sticky header
function initStickyMenu() {
  console.debug('stickymenu: initializing');
  const header = document.querySelector('.ud-header');
  if (!header) {
    console.debug('stickymenu: .ud-header not found, skipping');
    return;
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('sticky-header');
      header.style.position = 'fixed';
      header.style.width = '100%';
      header.style.top = '0';
      header.style.zIndex = '9999';
    } else {
      header.classList.remove('sticky-header');
      header.style.position = '';
    }
  }, { passive: true });

  console.debug('stickymenu: scroll listener attached');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStickyMenu);
} else {
  initStickyMenu();
}
