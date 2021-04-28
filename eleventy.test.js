"use strict";

const test = require("ava");
const eleventyConfig = require("@11ty/eleventy/src/EleventyConfig");

const config = require("./.eleventy");

test("adds shortcodes", (t) => {
  config(eleventyConfig);

  t.truthy(eleventyConfig.liquidShortcodes.sitemap);
  t.truthy(eleventyConfig.nunjucksAsyncShortcodes.sitemap);
  t.truthy(eleventyConfig.javascriptFunctions.sitemap);
  t.is(typeof eleventyConfig.liquidShortcodes.sitemap, "function");
  t.is(typeof eleventyConfig.nunjucksAsyncShortcodes.sitemap, "function");
  t.is(typeof eleventyConfig.javascriptFunctions.sitemap, "function");
});
