"use strict";

module.exports = (item, property) =>
  item && item.data && item.data.sitemap && item.data.sitemap[property];
