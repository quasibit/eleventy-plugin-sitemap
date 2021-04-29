"use strict";

const isValidDate = require("./isValidDate");

/**
 * Formats a date for use in the sitemap.
 *
 * @param {Date|string} date Date object or date string (to be passed to Date
 * constructor).
 * @returns {string|undefined} Formatted date for sitemap.
 */
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
