"use strict";

module.exports = (date) => {
  if (!date) {
    return;
  }

  const dateObject = typeof date === "string" ? new Date(date) : date;

  return dateObject.toISOString();
};
