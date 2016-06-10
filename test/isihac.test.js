const should = require('chai').should();
const isihac = require('../index');

describe('All Quotes', ()=> {
    it('should return an object of quotes', ()=> {
        isihac.allQuotes().should.be.instanceof(Object);
    });
});
