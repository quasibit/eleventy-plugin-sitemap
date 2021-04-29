"use strict";

const isValidDate = require("./isValidDate");

module.exports = function sitemapDateTime(date) {
  if (!date) {
    return;
  }

  const dateObject = typeof date === "string" ? new Date(date) : date;

  if (!isValidDate(dateObject)) {
    return;
  }

  return dateObject.toISOString();
};
