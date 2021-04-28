"use strict";

const sitemapProperty = require("./sitemapProperty");

module.exports = (item) =>
  !item || !item.url || sitemapProperty(item, "ignore");
