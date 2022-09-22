"use strict";

// Polyfill for supporting Node v10.
// eslint-disable-next-line import/no-unassigned-import
require("array-flat-polyfill");

const pkg = require("./package.json");
const sitemap = require("./src/sitemap");

/**
 * Add the sitemap plugin to the Eleventy configuration.
 *
 * @param {object} eleventyConfig Eleventy configuration object.
 * @param {object} options Plugin user options.
 */
module.exports = function eleventyPluginSitemap(eleventyConfig, options) {
  try {
    eleventyConfig.versionCheck(pkg["11ty"].compatibility);
  } catch (e) {
    console.log(
      `WARN: Eleventy Plugin (${pkg.name}) Compatibility: ${e.message}`
    );
  }

  const finalOptions = options || {};

  function getSitemap(items) {
    return sitemap(items, finalOptions);
  }

  eleventyConfig.addLiquidShortcode("sitemap", getSitemap);
  eleventyConfig.addJavaScriptFunction("sitemap", getSitemap);
  eleventyConfig.addNunjucksAsyncShortcode("sitemap", getSitemap);
};
