"use strict";

module.exports = (item) => {
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
