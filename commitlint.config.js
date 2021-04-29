"use strict";

module.exports = {
  extends: ["@commitlint/config-conventional"],

  ignores: [
    (message) => {
      if (!message) {
        return false;
      }

      const processed = message.trim().toLowerCase();

      // Exclude the following commit messages from linting.
      return (
        processed === "initial commit" ||
        processed.startsWith("chore(release):") ||
        processed.includes("dependabot[bot]")
      );
    },
  ],
};
