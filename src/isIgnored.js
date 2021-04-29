"use strict";

const sitemapProperty = require("./sitemapProperty");

module.exports = function isIgnored(item) {
  return !item || !item.url || Boolean(sitemapProperty(item, "ignore"));
};
