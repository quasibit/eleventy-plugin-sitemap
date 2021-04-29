"use strict";

/**
 * Determine if an item has pagination.
 *
 * @param {object} item Eleventy item (page, post, etc.).
 * @returns {boolean} True if item has pagination pages.
 */
module.exports = function isPagination(item) {
  if (
    !item ||
    !item.data ||
    !item.data.pagination ||
    !item.data.pagination.pages
  ) {
    return false;
  }

  return true;
};
