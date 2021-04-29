"use strict";

const sitemap = require("../../.eleventy");

/**
 * Example of creating a sitemap using a data collection.
 *
 * @param {object} eleventyConfig Eleventy configuration object.
 */
module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://example.com",
    },
  });
};
