"use strict";

const sitemapDateTime = require("./sitemapDateTime");
const sitemapProperty = require("./sitemapProperty");

module.exports = (item, options) => {
  const lastModifiedProperty = options && options.lastModifiedProperty;

  return (
    sitemapProperty(item, "lastmod") ||
    (lastModifiedProperty &&
      item.data &&
      item.data[lastModifiedProperty] &&
      sitemapDateTime(item.data[lastModifiedProperty])) ||
    sitemapDateTime(item.date)
  );
};
