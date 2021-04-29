"use strict";

const isPagination = require("./isPagination");

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
