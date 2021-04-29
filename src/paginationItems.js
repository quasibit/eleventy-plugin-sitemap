"use strict";

const isPagination = require("./isPagination");

/**
 * Builds an array with all pagination items.
 * If the item does not have pagination, returns an array with the item itself.
 *
 * @param {object} item Eleventy item (page, post, etc.).
 * @returns {Array} All pagination items or an array with the item.
 */
module.exports = function paginationItems(item) {
  if (!isPagination(item)) {
    return [item];
  }

  return item.data.pagination.pages.map((page, index) => {
    const url = (page && page.url) || item.data.pagination.hrefs[index];

    return {
      ...item,
      ...page,
      url,
    };
  });
};
