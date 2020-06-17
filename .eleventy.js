"use strict";

const sitemap = require("./src/sitemap");

module.exports = (eleventyConfig, options) => {
  function getSitemap(items) {
    return sitemap(items, options);
  }

  eleventyConfig.addLiquidShortcode("sitemap", getSitemap);
  eleventyConfig.addJavaScriptFunction("sitemap", getSitemap);
  eleventyConfig.addNunjucksAsyncShortcode("sitemap", getSitemap);
};
