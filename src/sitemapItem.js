"use strict";

const lastmod = require("./lastmod");

module.exports = function sitemapItem(item, options) {
  const sitemapData = (item.data && item.data.sitemap) || {};

  return {
    ...sitemapData,
    url: item.url,
    lastmod: lastmod(item, options),
  };
};
