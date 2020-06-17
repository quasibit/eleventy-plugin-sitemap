"use strict";

const sitemapDateTime = require("./sitemapDateTime");
const sitemapProperty = require("./sitemapProperty");

module.exports = (item, { lastModifiedProperty }) =>
  sitemapProperty(item, "lastmod") ||
  (lastModifiedProperty &&
    item.data[lastModifiedProperty] &&
    sitemapDateTime(item.data[lastModifiedProperty])) ||
  sitemapDateTime(item.date);
