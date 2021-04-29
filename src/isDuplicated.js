"use strict";

/**
 * Determine if an item is duplicated in a collection.
 *
 * @param {object} item Item to check.
 * @param {number} index Item index in the collection.
 * @param {Array} collection Collection of items.
 * @returns {boolean} True if the item is already present in the collection.
 */
module.exports = function isDuplicated(item, index, collection) {
  if (!collection) {
    return false;
  }

  const notFoundIndex = -1;
  const firstIndex = collection.findIndex((other) => other.url === item.url);

  if (firstIndex === notFoundIndex) {
    return false;
  }

  return index !== firstIndex;
};
