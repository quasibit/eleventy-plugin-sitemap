"use strict";

const test = require("ava");
const sinon = require("sinon");

const config = require("./.eleventy");

test("adds shortcodes", (t) => {
  const eleventyConfig = {
    addLiquidShortcode: sinon.fake(),
    addJavaScriptFunction: sinon.fake(),
    addNunjucksAsyncShortcode: sinon.fake(),
  };

  config(eleventyConfig);

  t.true(eleventyConfig.addLiquidShortcode.calledWith("sitemap"));
  t.true(eleventyConfig.addJavaScriptFunction.calledWith("sitemap"));
  t.true(eleventyConfig.addNunjucksAsyncShortcode.calledWith("sitemap"));
});
