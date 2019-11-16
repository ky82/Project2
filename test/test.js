var assert = require('assert');
describe('Mocha String Test', function () {
 it('should return number of charachters in a string', function () {
        assert.equal("Taylor Swift".length, 12);
    });
 it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
    });
});