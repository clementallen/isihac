const assert = require('chai').assert;

const quotes = require('../data/quotes');
const isihac = require('../index');

describe('All Quotes', ()=> {
    it('should return an array of quotes', ()=> {
        assert.instanceOf(isihac.allQuotes(), Array, 'quotes is an array instance');
    });
    it('should have the same length as the quote data', () => {
        assert.lengthOf(isihac.allQuotes(), quotes.length, 'quotes are the same');
    });
});

describe('Random Quote', () => {
    it('should return a quote that exists in the data', () => {
        assert.include(quotes, isihac.randomQuote(), 'quote exists in the data');
    });
    it('should return a different quote when called twice', () => {
        const firstQuote = isihac.randomQuote();
        const secondQuote = isihac.randomQuote();
        assert.notEqual(secondQuote, firstQuote, 'quotes are not equal');
    });
});
