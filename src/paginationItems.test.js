"use strict";

const test = require("ava");

const paginationItems = require("./paginationItems");

// eslint-disable-next-line max-statements
test("returns pagination items", (t) => {
  const page1 = { url: "/post_a" };
  const page2 = { url: "/post_b" };
  const page3 = { url: "/post_c" };
  const item = {
    data: {
      pagination: {
        pages: [page1, page2, page3],
      },
    },
  };
  const result = paginationItems(item);
  const total = 3;

  t.true(Array.isArray(result));
  t.true(result.length === total);
  t.is(result[0].url, page1.url);
  t.is(result[1].url, page2.url);
  // eslint-disable-next-line no-magic-numbers
  t.is(result[2].url, page3.url);
});

test("handles non-pagination items", (t) => {
  const item = {
    url: "hello",
  };
  const result = paginationItems(item);

  t.true(Array.isArray(result));
  t.deepEqual(result[0], item);
});

test("handles paginated archive", (t) => {
  const hrefs = ["/posts", "/posts/2", "/posts3"];
  const total = hrefs.length;
  const item = {
    data: {
      pagination: {
        pages: Array.from({ length: total }).fill(undefined),
        hrefs,
      },
    },
  };
  const result = paginationItems(item);

  t.true(Array.isArray(result));
  t.true(result.length === total);

  hrefs.forEach((href, index) => {
    t.is(result[index].url, href);
  });
});
