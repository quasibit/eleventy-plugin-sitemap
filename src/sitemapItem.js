"use strict";

const lastmod = require("./lastmod");

/**
 * Build a sitemap item.
 *
 * @param {object} item Eleventy item (page, post, etc.)
 * @param {object|undefined} options Optional plugin user options.
 * @returns {object} Sitemap item.
 */
module.exports = function sitemapItem(item, options) {
  const sitemapData = (item.data && item.data.sitemap) || {};

  return {
    ...sitemapData,
    url: item.url,
    lastmod: lastmod(item, options),
  };
};
