module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "no-underscore-dangle": "off",
    "prefer-destructuring": "off",
    "no-console": "off",
    "arrow-parens": "off",
    "wrap-iife": "off",
    "no-plusplus": "off",
    "no-await-in-loop": "off",
    "global-require": "off",
  },
  "globals": {
    "writeFile": true,
    "readFile": true,
    "existsFile": true,
    "LOG": true,
  }
};
