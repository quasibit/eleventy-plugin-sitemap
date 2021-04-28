"use strict";

const test = require("ava");

const isPagination = require("./isPagination");

test("detects pagination", (t) => {
  const item = {
    data: {
      pagination: {
        pages: [
          {
            url: "hello",
          },
        ],
      },
    },
  };

  t.true(isPagination(item));
});

test("handles undefined", (t) => {
  t.false(isPagination());
});
