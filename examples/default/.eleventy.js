"use strict";

const sitemap = require("../../.eleventy");

/**
 * Standard example using a few posts and the all collection.
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
