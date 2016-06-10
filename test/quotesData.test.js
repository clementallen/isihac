const assert = require('chai').assert;
const quotes = require('../data/quotes');

describe('Quote data', ()=> {
    it('should only contain strings', ()=> {
        for(let i = 0; i < quotes.length; i++) {
            assert.isString(quotes[i], 'quote is in string format');
        }
    });

    it('should be an array', () => {
        assert.isArray(quotes, 'quotes is an array');
    });

    it('should contain unique quotes', () => {
        const sortedQuotes = quotes.slice().sort();
        for (let i = 0; i < quotes.length - 1; i++) {
            assert.notEqual(sortedQuotes[i + 1], sortedQuotes[i], 'quotes are unique');
        }
    });
});
