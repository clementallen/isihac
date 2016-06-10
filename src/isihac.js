const quotes = require('../data/quotes');

module.exports = {
    allQuotes() {
        return quotes;
    },
    randomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }
};
