"use strict";

const sitemapDateTime = require("./sitemapDateTime");
const sitemapProperty = require("./sitemapProperty");

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
