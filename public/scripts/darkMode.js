// public copy of darkMode.js
(function(){
  function initThemeSwitcher() {
    const themeSwitcher = document.getElementById('themeSwitcher');

    if (!themeSwitcher) {
      console.warn('Theme switcher button not found (public copy)');
      return;
    }

    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const themeCheck = () => {
      if (userTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (userTheme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        if (systemTheme) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    const themeSwitch = () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    };

    themeSwitcher.addEventListener('click', () => { themeSwitch(); });
    themeCheck();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeSwitcher);
  } else {
    initThemeSwitcher();
  }
})();
