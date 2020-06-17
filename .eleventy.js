"use strict";

const sitemap = require("./src/sitemap");
const sitemapDateTime = require("./src/sitemapDateTime");

module.exports = (eleventyConfig, options) => {
  function getSitemap(items) {
    return sitemap(items, options);
  }

  eleventyConfig.addFilter("sitemapDateTime", sitemapDateTime);
  eleventyConfig.addLiquidShortcode("sitemap", getSitemap);
  eleventyConfig.addJavaScriptFunction("sitemap", getSitemap);
  eleventyConfig.addNunjucksAsyncShortcode("sitemap", getSitemap);
};
