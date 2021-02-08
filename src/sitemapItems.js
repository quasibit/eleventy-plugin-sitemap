"use strict";

const sitemapItem = require("./sitemapItem");
const sitemapProperty = require("./sitemapProperty");

function isPagination(item) {
  return (
    item !== undefined &&
    item.data !== undefined &&
    item.data.pagination !== undefined &&
    item.data.pagination.pages !== undefined
  );
}

function getPaginationUrls(item) {
  if (isPagination(item)) {
    return item.data.pagination.pages.map((page) => ({
      ...item,
      url: page.url,
    }));
  }

  return [item];
}

module.exports = (items, options) =>
  items
    .filter((item) => !sitemapProperty(item, "ignore") && item.url)
    .flatMap(getPaginationUrls)
    .map((item) => sitemapItem(item, options));
