"use strict";

const sitemapProperty = require("./sitemapProperty");

module.exports = (item) => sitemapProperty(item, "ignore") || !item.url;
