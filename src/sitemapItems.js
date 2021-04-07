"use strict";

const paginationItems = require("./paginationItems");
const sitemapItem = require("./sitemapItem");
const sitemapProperty = require("./sitemapProperty");

module.exports = (items, options) =>
  items
    .flatMap(paginationItems)
    .filter((item) => !sitemapProperty(item, "ignore") && item.url)
    .map((item) => sitemapItem(item, options));
