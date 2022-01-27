module.exports = {
  globDirectory: "_site/",
  globPatterns: [
    "assets/icons/**",
    "assets/pwa/**",
    "assets/utils/**",
    "assets/philipp.webp",
    "styles/**",
    "en/manifest.json",
    "de/manifest.json",
    "404.html",
    "favicon.ico",
  ],
  swDest: "./_site/sw.js",
  swSrc: "./src/service-worker.js",
};
