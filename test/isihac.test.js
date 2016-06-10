const chai = require('chai');
const should = chai.should();
const assert = chai.assert;

const quotes = require('../data/quotes');
const isihac = require('../index');

describe('All Quotes', ()=> {
    it('should return an object of quotes', ()=> {
        assert.instanceOf(isihac.allQuotes, Object, 'returned quotes is an object instance');
    });
});

describe('Random Quote', () => {
    it('should return quote that exists in the data', () => {
        assert.include(quotes, isihac.randomQuote(), 'quote exists in the data');
    });
    it('should return a random quote', () => {
        const firstQuote = isihac.randomQuote();
        assert.notEqual(isihac.randomQuote(), firstQuote, 'quotes are retrieved randomly')
    });
});
