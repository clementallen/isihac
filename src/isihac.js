const quotes = require('../data/quotes');

module.exports = {
    specificQuote(index) {
        return new Promise((resolve, reject) => {
            resolve(quotes[index]);
        });
    },
    allQuotes() {
        return new Promise((resolve, reject) => {
            resolve(quotes);
        });
    }
};
