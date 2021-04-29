"use strict";

const { SitemapStream, streamToPromise } = require("sitemap");

const sitemapItems = require("./sitemapItems");

/**
 * Builds an XML sitemap.
 *
 * @async
 * @param {Array} items Array with items built using function `sitemapItem`.
 * @param {object|undefined} options Optional plugin user options.
 * @returns {Promise<string>} XML sitemap.
 */
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
