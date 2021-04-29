"use strict";

const test = require("ava");

const sitemapItems = require("./sitemapItems");

test("builds sitemap items", (t) => {
  const items = [
    {
      url: "/hello",
      date: new Date("2021-04-28T14:16:36.596Z"),
    },
    {
      url: "/world",
      date: new Date("2021-04-28T15:16:36.596Z"),
    },
  ];
  const result = sitemapItems(items);

  t.true(Array.isArray(result));
  t.is(result.length, items.length);
});

test("filters ignored items", (t) => {
  const items = [
    {
      url: "/hello",
      date: new Date("2021-04-28T14:16:36.596Z"),
    },
    {
      url: "/world",
      date: new Date("2021-04-28T15:16:36.596Z"),

      data: {
        sitemap: {
          ignore: true,
        },
      },
    },
  ];
  const result = sitemapItems(items);

  t.true(Array.isArray(result));
  t.is(result.length, 1);
  t.is(result[0].url, "/hello");
});

test("filters duplicated items", (t) => {
  const items = [
    {
      url: "/hello",
      date: new Date("2021-04-28T14:16:36.596Z"),
    },
    {
      url: "/world",
      date: new Date("2021-04-28T15:16:36.596Z"),
    },
    {
      url: "/hello",
      date: new Date("2021-04-28T14:16:36.596Z"),
    },
  ];
  const result = sitemapItems(items);

  t.true(Array.isArray(result));
  // eslint-disable-next-line no-magic-numbers
  t.is(result.length, 2);
  t.is(result[0].url, "/hello");
  t.is(result[1].url, "/world");
});

test("handles pagination items", (t) => {
  const items = [
    {
      data: {
        pagination: {
          pages: [
            {
              url: "/post_a",
            },
            {
              url: "/post_b",
            },
          ],
        },
      },
    },
  ];
  const result = sitemapItems(items);

  t.true(Array.isArray(result));
  // eslint-disable-next-line no-magic-numbers
  t.is(result.length, 2);
  t.is(result[0].url, "/post_a");
  t.is(result[1].url, "/post_b");
});
