"use strict";

const test = require("ava");

const lastmod = require("./lastmod");

test("returns lastmod property", (t) => {
  const lastmodDate = "2021-04-28T15:49:05.333Z";
  const item = {
    date: new Date("2021-04-28T14:16:36.596Z"),

    data: {
      sitemap: {
        lastmod: lastmodDate,
      },
    },
  };

  t.is(lastmod(item), lastmodDate);
});

test("returns date property", (t) => {
  const date = "2021-04-28T15:49:05.333Z";
  const item = {
    date: new Date(date),
  };

  t.is(lastmod(item), date);
});

test("returns custom lastmod property", (t) => {
  const lastmodDate = "2021-04-28T15:49:05.333Z";
  const item = {
    date: new Date("2021-04-28T14:16:36.596Z"),

    data: {
      modifiedAt: lastmodDate,
    },
  };
  const options = { lastModifiedProperty: "modifiedAt" };

  t.is(lastmod(item, options), lastmodDate);
});
