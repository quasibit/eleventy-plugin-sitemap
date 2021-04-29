"use strict";

/**
 * Determine if passed argument is a valid date object.
 *
 * @param {*} maybeDate Value to check.
 * @returns {boolean} True if value is a valid date object.
 */
module.exports = function isValidDate(maybeDate) {
  if (!maybeDate) {
    return false;
  }

  if (!(maybeDate instanceof Date)) {
    return false;
  }

  if (Number.isNaN(maybeDate.getTime())) {
    return false;
  }

  return true;
};
