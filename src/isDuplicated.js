"use strict";

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
