# eleventy-plugin-sitemap

[![Release workflow](https://github.com/quasibit/eleventy-plugin-sitemap/workflows/Release/badge.svg)](https://github.com/quasibit/eleventy-plugin-sitemap/actions?query=workflow%3ARelease)
[![Test workflow](https://github.com/quasibit/eleventy-plugin-sitemap/workflows/Test/badge.svg)](https://github.com/quasibit/eleventy-plugin-sitemap/actions?query=workflow%3ATest)
[![npm](https://img.shields.io/npm/v/eleventy-plugin-sitemap)](https://www.npmjs.com/package/eleventy-plugin-sitemap)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Eleventy](https://www.11ty.dev/) plugin to generate a sitemap using [ekalinin/sitemap](https://github.com/ekalinin/sitemap.js) generator.

- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Advanced usage](#advanced-usage)
- [License](#license)

## Installation

Install the package:

```sh
npm install --save eleventy-plugin-sitemap
```

Add the plugin to your [Eleventy configuration](https://www.11ty.dev/docs/config/)
(usually `.eleventy.js`):

```js
const sitemap = require("eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://example.com",
    },
  });
};
```

## Usage

Create a sitemap file and use the shortcode to generate the sitemap XML:

```njk
---
permalink: /sitemap.xml
layout: null
eleventyExcludeFromCollections: true
---
{% sitemap collections.all %}
```

The above snippet does the following:

- Sets the permalink to `/sitemap.xml`.
- Disables any [layout](https://www.11ty.dev/docs/layouts/).
- Excludes the sitemap file from Eleventy collections.
- Calls the `sitemap` shortcode.

As the first argument to the shortcode, you pass the collection of items that
you want to use in the sitemap.

This shortcode is available for Liquid, Nunjucks, and Javascript templates.

You can also copy this sample from the examples and adapt it to your needs:

```sh
cp node_modules/eleventy-plugin-sitemap/examples/sitemap.njk sitemap.njk
```

After creating the sitemap, you should add the sitemap to `robots.txt`:

```txt
Sitemap: https://example.com/sitemap.xml
```

## Options

The following options are available:

```js
eleventyConfig.addPlugin(sitemap, {
  // Name of the property for the last modification date.
  // By default it is undefined and the plugin will fallback to `date`.
  // When set, the plugin will try to use this property and it will fallback
  // to the `date` property when needed.
  lastModifiedProperty: "modified",

  sitemap: {
    // Options for SitemapStream. See https://github.com/ekalinin/sitemap.js/blob/master/api.md#sitemapstream
    // Hostname is needed when the URLs of the items don't include it.
    hostname: "https://example.com",
  },
});
```

## Advanced usage

### Customizing sitemap properties

You can customize the values used for the sitemap links by adding [front matter](https://www.11ty.dev/docs/data-frontmatter/)
to your pages.

```yaml
---
sitemap:
  - changefreq: weekly
  - priority: 0.8
---
```

For a full list of options, please refer to [Sitemap Item Options](https://github.com/ekalinin/sitemap.js/blob/master/api.md#sitemap-item-options).

### Exclude pages from the sitemap

You have several options to exclude pages from the sitemap.

You can exclude them using the standard `eleventyExcludeFromCollections`
property, which will exclude them from all collections.

```yaml
---
eleventyExcludeFromCollections: true
---
```

You can use the `ignore` property on the `sitemap` data, which will only
exclude it from the sitemap.

```yaml
---
sitemap:
  - ignore: true
---
```

Or you can create a [custom collection](https://www.11ty.dev/docs/collections/#advanced-custom-filtering-and-sorting)
that excludes the items that you don't want in the sitemap and then pass that
collection to the shortcode.

```js
eleventyConfig.addCollection("sitemap", function(collectionApi) {
  return collectionApi.getAll().filter(item => {
    // Place your condition here for excluding items from the sitemap.
    return true;
  });
});
```

Specify the collection in the shortcode:

```njk
{% sitemap collections.sitemap %}
```

### Create a multilingual sitemap

For creating a [multilingual sitemap](https://webmasters.googleblog.com/2012/05/multilingual-and-multinational-site.html)
you need to add alternate  language child links for each link.

You could do this with [front matter](#customizing-sitemap-properties) and the
[links property](https://github.com/ekalinin/sitemap.js/blob/master/api.md#sitemap-item-options)
, but in most cases it's easier to do this with a custom collection.

```js
eleventyConfig.addCollection("sitemap", function(collectionApi) {
  return collectionApi
    .getAll()
    .map((item, index, all) => {
      return {
        url: item.url,
        date: item.date,
        data: {
          ...item.data,
          sitemap: {
            ...item.data.sitemap,
            links:
              all
                // Find all the translations of the current item.
                // This assumes that all translated items that belong together
                // have the same `translationKey` value in the front matter.
                .filter(other => other.data.translationKey === item.data.translationKey)

                // Map each translation into an alternate link. See https://github.com/ekalinin/sitemap.js/blob/master/api.md#ILinkItem
                // Here we assume each item has a `lang` value in the front
                // matter. See https://support.google.com/webmasters/answer/189077#language-codes
                .map(translation => {
                  return {
                    url: translation.url,
                    lang: translation.data.lang,
                  };
                }),
          },
        },
      }
    });
});
```

And then pass that collection to the sitemap shortcode:

```njk
{% sitemap collections.sitemap %}
```


## License

MIT. See [LICENSE](./LICENSE).
