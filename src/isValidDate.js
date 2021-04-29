"use strict";

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
