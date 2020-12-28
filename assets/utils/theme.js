const KEY = "dark-theme";
const DARK_THEME_CLASS = "dark";

/**
 * initialize theme on page load
 */
const init = () => {
  let isDarkTheme = sessionStorage.getItem(KEY);

  if (isDarkTheme === null) {
    // theme not set, select operator system preferences
    isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  } else {
    // parse session storage value
    isDarkTheme = isDarkTheme === "true";
  }

  if (isDarkTheme) {
    document.documentElement.classList.add(DARK_THEME_CLASS);
  } else {
    document.documentElement.classList.remove(DARK_THEME_CLASS);
  }

  const btn = document.querySelector("#theme-toggle");
  const main = document.querySelector('main');
  /**
   * Button click handler to toggle theme
   */
  btn.onclick = () => {
    document.documentElement.classList.toggle(DARK_THEME_CLASS);

    main.classList.add('transition-bg');

    const isDark = document.documentElement.classList.contains(
      DARK_THEME_CLASS
    );

    if (isDark) {
      sessionStorage.setItem(KEY, true);
    } else {
      sessionStorage.setItem(KEY, false);
    }
  };
};

init();
