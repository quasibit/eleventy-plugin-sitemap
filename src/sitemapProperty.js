"use strict";

/**
 * Get the value of a sitemap property.
 * A sitemap property is a property for the sitemap data bag.
 *
 * @param {object} item Eleventy item (page, post, etc.).
 * @param {string} property Name of the sitemap property.
 * @returns {*} Value of the property or undefined.
 */
module.exports = function sitemapProperty(item, property) {
  return item && item.data && item.data.sitemap && item.data.sitemap[property];
};
