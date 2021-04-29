"use strict";

const { SitemapStream, streamToPromise } = require("sitemap");

const sitemapItems = require("./sitemapItems");

module.exports = async function sitemap(items, options) {
  const streamOptions = options && options.sitemap;
  const stream = new SitemapStream(streamOptions);
  const links = sitemapItems(items, options);

  for (const link of links) {
    stream.write(link);
  }

  stream.end();

  const data = await streamToPromise(stream);

  return data.toString();
};
