"use strict";

const test = require("ava");

const sitemapItem = require("./sitemapItem");

test("builds sitemap item", (t) => {
  const item = {
    url: "/hello",
    date: new Date("2021-04-28T14:16:36.596Z"),
  };
  const result = sitemapItem(item);
  const expected = {
    url: "/hello",
    lastmod: "2021-04-28T14:16:36.596Z",
  };

  t.deepEqual(result, expected);
});

test("keeps sitemap properties", (t) => {
  const item = {
    url: "/hello",

    data: {
      sitemap: {
        priority: 0.8,
        lastmod: "2021-04-28T14:16:36.596Z",
        changefreq: "weekly",
      },
    },
  };
  const result = sitemapItem(item);
  const expected = {
    url: "/hello",
    lastmod: "2021-04-28T14:16:36.596Z",
    priority: 0.8,
    changefreq: "weekly",
  };

  t.deepEqual(result, expected);
});

test("handle empty sitemap properties", (t) => {
  const item = {
    url: "/hello",
    date: new Date("2021-04-28T14:16:36.596Z"),
    data: {},
  };
  const result = sitemapItem(item);
  const expected = {
    url: "/hello",
    lastmod: "2021-04-28T14:16:36.596Z",
  };

  t.deepEqual(result, expected);
});
