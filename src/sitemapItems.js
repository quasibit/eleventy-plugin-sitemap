"use strict";

const isIgnored = require("./isIgnored");
const paginationItems = require("./paginationItems");
const sitemapItem = require("./sitemapItem");

module.exports = (items, options) =>
  items
    .flatMap(paginationItems)
    .filter((item) => !isIgnored(item))
    .map((item) => sitemapItem(item, options));
