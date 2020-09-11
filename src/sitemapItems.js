"use strict";

const sitemapItem = require("./sitemapItem");
const sitemapProperty = require("./sitemapProperty");

module.exports = (items, options) =>
  items
    .filter((item) => !sitemapProperty(item, "ignore") && item.url)
    .map((item) => sitemapItem(item, options));
