/* ========  themeSwitcher start ========= */
function initThemeSwitcher() {
  const themeSwitcher = document.getElementById('themeSwitcher');

  if (!themeSwitcher) {
    console.warn('Theme switcher button not found');
    return;
  }

  // Theme Vars
  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Initial Theme Check
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

  // Manual Theme Switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // call theme switch on clicking button
  themeSwitcher.addEventListener('click', () => {
    themeSwitch();
  });

  // invoke theme check on initial load
  themeCheck();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeSwitcher);
} else {
  initThemeSwitcher();
}

