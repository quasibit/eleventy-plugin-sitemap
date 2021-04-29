"use strict";

const sitemapProperty = require("./sitemapProperty");

/**
 * Determine if an item should be ignored (explicitly or because it's empty
 * or without URL).
 *
 * @param {object} item Eleventy item (page, post, etc.).
 * @returns {boolean} True if the item is ignored.
 */
module.exports = function isIgnored(item) {
  return !item || !item.url || Boolean(sitemapProperty(item, "ignore"));
};
