"use strict";

const sitemap = require("../../.eleventy");

/**
 * Example of creating a sitemap using a paginated archive, e.g. /pages/1,
 * /pages/2, /pages/3.
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
