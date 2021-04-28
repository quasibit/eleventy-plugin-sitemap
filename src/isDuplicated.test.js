"use strict";

const test = require("ava");

const isDuplicated = require("./isDuplicated");

test("detects duplicated item", (t) => {
  const all = [{ url: "hello" }, { url: "world" }, { url: "hello" }];
  const index = all.length - 1;

  t.true(isDuplicated(all[index], index, all));
});

test("does not consider original item a duplicate", (t) => {
  const all = [{ url: "hello" }, { url: "world" }, { url: "hello" }];
  const index = 0;

  t.false(isDuplicated(all[index], index, all));
});

test("is not duplicated item", (t) => {
  const all = [{ url: "hello" }, { url: "world" }];
  const index = 0;

  t.false(isDuplicated(all[index], index, all));
});
