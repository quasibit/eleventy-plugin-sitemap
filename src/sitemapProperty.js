"use strict";

module.exports = function sitemapProperty(item, property) {
  return item && item.data && item.data.sitemap && item.data.sitemap[property];
};
