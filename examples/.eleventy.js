"use strict";

const sitemap = require("../.eleventy");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://example.com",
    },
  });
};
