# ISIHAC

## I'm Sorry I Haven't a Clue quote API
[![npm version](https://badge.fury.io/js/isihac.svg)](https://badge.fury.io/js/isihac)
[![Build Status](https://travis-ci.org/clementallen/isihac.svg?branch=master)](https://travis-ci.org/clementallen/isihac)
[![Code Climate](https://codeclimate.com/github/clementallen/isihac/badges/gpa.svg)](https://codeclimate.com/github/clementallen/isihac)
[![devDependency Status](https://david-dm.org/clementallen/isihac/dev-status.svg)](https://david-dm.org/clementallen/isihac#info=devDependencies)

### Install
```
npm install --save isihac
```


### Example
```
const isihac = require('isihac');

const allQuotes = isihac.allQuotes(); // retrieve all quotes
const randomQuote = isihac.randomQuote(); // retrieve a random isihac quote

console.log(allQuotes);
console.log(randomQuote);
```
