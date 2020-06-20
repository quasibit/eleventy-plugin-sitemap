"use strict";

module.exports = (date) => {
  const dateObject = typeof date === "string" ? new Date(date) : date;

  return dateObject.toISOString();
};
