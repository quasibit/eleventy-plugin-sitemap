"use strict";

const sitemapDateTime = require("./sitemapDateTime");
const sitemapProperty = require("./sitemapProperty");

/**
 * Determine the "lastmod" property (last modified date for the sitemap item).
 *
 * @param {object} item Eleventy item (page, post, etc.).
 * @param {object|undefined} options Optional object with "lastModifiedProperty"
 * property with the name of the last modified property on the item.
 * @returns {string|undefined} Last modified date string or undefined.
 */
module.exports = function lastmod(item, options) {
  const lastModifiedProperty = options && options.lastModifiedProperty;
  const hasCustom =
    lastModifiedProperty && item.data && item.data[lastModifiedProperty];
  const customLastModified =
    hasCustom && sitemapDateTime(item.data[lastModifiedProperty]);

  return (
    sitemapProperty(item, "lastmod") ||
    customLastModified ||
    sitemapDateTime(item.date)
  );
};
