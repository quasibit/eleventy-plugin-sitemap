"use strict";

const isIgnored = require("./isIgnored");
const isDuplicated = require("./isDuplicated");
const paginationItems = require("./paginationItems");
const sitemapItem = require("./sitemapItem");

module.exports = (items, options) =>
  items
    .flatMap(paginationItems)
    .filter(
      (item, index, collection) =>
        !isIgnored(item) && !isDuplicated(item, index, collection)
    )
    .map((item) => sitemapItem(item, options));
