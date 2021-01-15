"use strict";

const lastmod = require("./lastmod");

module.exports = (item, options) => ({
  ...((item.data && item.data.sitemap) || {}),
  url: item.url,
  lastmod: lastmod(item, options),
});
