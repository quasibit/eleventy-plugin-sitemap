"use strict";

const test = require("ava");

const sitemap = require("./sitemap");

test("builds sitemap", async (t) => {
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
  const options = {
    sitemap: {
      hostname: "https://example.com",

      xmlns: {
        news: false,
        xhtml: true,
        image: false,
        video: false,
      },
    },
  };
  const result = await sitemap(items, options);
  const expected =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' +
    "<url>" +
    "<loc>https://example.com/hello</loc>" +
    "<lastmod>2021-04-28T14:16:36.596Z</lastmod>" +
    "</url>" +
    "<url>" +
    "<loc>https://example.com/world</loc>" +
    "<lastmod>2021-04-28T15:16:36.596Z</lastmod>" +
    "</url>" +
    "</urlset>";

  t.is(result, expected);
});
