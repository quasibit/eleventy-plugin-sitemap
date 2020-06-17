"use strict";

const { SitemapStream, streamToPromise } = require("sitemap");

const sitemapItems = require("./sitemapItems");

module.exports = (items, options) => {
  const streamOptions = options && options.sitemap;
  const stream = new SitemapStream(streamOptions);
  const links = sitemapItems(items, options);

  links.forEach((link) => {
    stream.write(link);
  });
  stream.end();

  return streamToPromise(stream).then((data) => data.toString());
};
