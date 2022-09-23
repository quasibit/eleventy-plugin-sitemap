"use strict";

// Polyfill for supporting Node v10.
// eslint-disable-next-line import/no-unassigned-import
require("array-flat-polyfill");

const packageJson = require("./package.json");
const sitemap = require("./src/sitemap");

/**
 * Add the sitemap plugin to the Eleventy configuration.
 *
 * @param {object} eleventyConfig Eleventy configuration object.
 * @param {object} options Plugin user options.
 */
module.exports = function eleventyPluginSitemap(eleventyConfig, options) {
  try {
    eleventyConfig.versionCheck(packageJson["11ty"].compatibility);
  } catch (error) {
    // eslint-disable-next-line no-console, putout/putout
    console.log(
      `WARN: Eleventy Plugin (${packageJson.name}) Compatibility: ${error.message}`
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
