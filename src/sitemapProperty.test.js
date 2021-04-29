"use strict";

const test = require("ava");

const sitemapProperty = require("./sitemapProperty");

test("returns sitemap property", (t) => {
  const item = { data: { sitemap: { hello: "world" } } };
  const result = sitemapProperty(item, "hello");

  t.is(result, "world");
});

test("handles undefined sitemap property", (t) => {
  const item = {};
  const result = sitemapProperty(item, "hello");

  t.falsy(result);
});
