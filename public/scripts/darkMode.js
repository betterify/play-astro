// Dark mode toggle (public copy)
(function () {
  console.debug('darkMode: public copy loaded');

  if (window.__PLAY_ASTRO_THEME_INITIALIZED) {
    console.debug('darkMode: already initialized by header, skipping');
    return;
  }

  function initTheme() {
    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = userTheme || systemTheme;

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const themeSwitcher = document.querySelector('#themeSwitcher');
  if (!themeSwitcher) {
    console.debug('darkMode: #themeSwitcher not found');
    return;
  }

  themeSwitcher.addEventListener('click', (e) => {
    e.preventDefault();
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    console.debug('darkMode: theme toggled to', isDark ? 'dark' : 'light');
  });

  initTheme();
  console.debug('darkMode: initialized');
})();
