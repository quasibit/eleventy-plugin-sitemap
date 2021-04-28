"use strict";

const test = require("ava");

const sitemapDateTime = require("./sitemapDateTime");

test("returns ISO string", (t) => {
  const isoDate = "2021-04-28T14:16:36.596Z";
  const date = new Date(isoDate);
  const result = sitemapDateTime(date);

  t.is(result, isoDate);
});

test("accepts strings", (t) => {
  const isoDate = "2021-04-28T14:16:36.596Z";
  const result = sitemapDateTime(isoDate);

  t.is(result, isoDate);
});

test("handles empty date", (t) => {
  const date = "";
  const result = sitemapDateTime(date);

  t.falsy(result);
});
