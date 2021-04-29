"use strict";

const isIgnored = require("./isIgnored");
const isDuplicated = require("./isDuplicated");
const paginationItems = require("./paginationItems");
const sitemapItem = require("./sitemapItem");

/**
 * Builds items for the sitemap.
 *
 * @param {Array} items Array of Eleventy items (pages, posts, etc.).
 * @param {object|undefined} options Optional plugin user options.
 * @returns {Array} Array of sitemap items.
 */
module.exports = function sitemapItems(items, options) {
  return items
    .flatMap(paginationItems)
    .filter(
      (item, index, collection) =>
        !isIgnored(item) && !isDuplicated(item, index, collection)
    )
    .map((item) => sitemapItem(item, options));
};
