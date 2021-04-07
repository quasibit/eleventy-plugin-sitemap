"use strict";

module.exports = (item) =>
  item && item.data && item.data.pagination && item.data.pagination.pages;
