"use strict";

const sitemap = require("./src/sitemap");

module.exports = function eleventyPluginSitemap(eleventyConfig, options) {
  const finalOptions = options || {};

  function getSitemap(items) {
    return sitemap(items, finalOptions);
  }

  eleventyConfig.addLiquidShortcode("sitemap", getSitemap);
  eleventyConfig.addJavaScriptFunction("sitemap", getSitemap);
  eleventyConfig.addNunjucksAsyncShortcode("sitemap", getSitemap);
};
