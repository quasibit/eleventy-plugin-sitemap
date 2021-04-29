"use strict";

const sitemap = require("./src/sitemap");

/**
 * Add the sitemap plugin to the Eleventy configuration.
 *
 * @param {object} eleventyConfig Eleventy configuration object.
 * @param {object} options Plugin user options.
 */
module.exports = function eleventyPluginSitemap(eleventyConfig, options) {
  const finalOptions = options || {};

  function getSitemap(items) {
    return sitemap(items, finalOptions);
  }

  eleventyConfig.addLiquidShortcode("sitemap", getSitemap);
  eleventyConfig.addJavaScriptFunction("sitemap", getSitemap);
  eleventyConfig.addNunjucksAsyncShortcode("sitemap", getSitemap);
};
