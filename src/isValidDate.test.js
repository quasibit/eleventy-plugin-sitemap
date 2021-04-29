"use strict";

const test = require("ava");

const isValidDate = require("./isValidDate");

test("is valid date", (t) => {
  t.true(isValidDate(new Date()));
});

test("is not empty date", (t) => {
  t.false(isValidDate());
});

test("is not invalid date object", (t) => {
  t.false(isValidDate(new Date("hello")));
});
