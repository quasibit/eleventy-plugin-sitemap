"use strict";

const test = require("ava");

const isIgnored = require("./isIgnored");

test("ignores items", (t) => {
  t.true(isIgnored({ data: { sitemap: { ignore: true } } }));
});

test("ignores items without URL", (t) => {
  t.true(isIgnored({}));
});

test("ignores empty items", (t) => {
  t.true(isIgnored());
});

test("returns boolean", (t) => {
  t.true(isIgnored({ data: { sitemap: { ignore: 1 } } }));
});
