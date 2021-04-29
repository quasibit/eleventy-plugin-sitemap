"use strict";

const sitemap = require("../../.eleventy");

/**
 * Example of creating a sitemap for a multilingual site.
 * A custom sitemap collection is created with the necessary lang attribute.
 *
 * @param {object} eleventyConfig Eleventy configuration object.
 */
module.exports = (eleventyConfig) => {
  const hostnames = {
    en: "https://example.com",
    pt: "https://example.pt",
  };

  eleventyConfig.addPlugin(sitemap);

  eleventyConfig.addCollection("sitemap", (collectionApi) =>
    collectionApi.getAll().map((item, index, all) => ({
      url: hostnames[item.data.lang] + item.url,
      date: item.date,

      data: {
        ...item.data,

        sitemap: {
          ...item.data.sitemap,

          links: all

            // Find all the translations of the current item.
            // This assumes that all translated items that belong together
            // have the same `translationKey` value in the front matter.
            .filter(
              (other) => other.data.translationKey === item.data.translationKey
            )

            // Map each translation into an alternate link. See https://github.com/ekalinin/sitemap.js/blob/master/api.md#ILinkItem
            // Here we assume each item has a `lang` value in the front
            // matter. See https://support.google.com/webmasters/answer/189077#language-codes
            .map((translation) => ({
              url: hostnames[translation.data.lang] + translation.url,
              lang: translation.data.lang,
            })),
        },
      },
    }))
  );
};
