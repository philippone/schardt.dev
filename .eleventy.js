const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const moment = require("moment");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  // Copy `css/fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  eleventyConfig.addPassthroughCopy("src/styles/fonts");
  eleventyConfig.addPassthroughCopy("src/styles/assets");

  // eleventyConfig.setTemplateFormats([
  //   "njk",
  //   "md",
  //   "css",
  //   "jpg",
  //   "png",
  //   "webp"
  // ]);

  eleventyConfig.addPassthroughCopy("src/assets/**/*.svg");
  eleventyConfig.addPassthroughCopy("src/assets/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/assets/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/assets/**/*.png");
  eleventyConfig.addPassthroughCopy("src/assets/**/*.webp");
  eleventyConfig.addPassthroughCopy("src/assets/**/*.pdf");
  eleventyConfig.addPassthroughCopy("src/assets/utils/*.js");
  

  // Nunjucks Filter based on locale
  eleventyConfig.addNunjucksFilter("localization", function (collection, locale) {
    return collection.filter((item) => item.url.includes(locale));
  });

  eleventyConfig.addNunjucksFilter('is_string', function(obj) {
    return typeof obj == 'string';
  });

  module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  };

  // date filter (localized)
  eleventyConfig.addNunjucksFilter("date", function (date, format, locale) {
    locale = locale ? locale : "en";
    moment.locale(locale);
    return moment(date).format(format);
  });

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`
    // pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    dir: {
      input: "./src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
