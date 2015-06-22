var Find = require('./Find.js');
var should = require('should');

describe('Find number in sorted rotated array', function() {
    it('Find', function() {
        var inputArray;
        var findNumber = Find.findNumber;
        inputArray = [7, 9, 11, 12, 13, 1, 5];
        findNumber(inputArray, 1).should.equal(5);
        findNumber(inputArray, 9).should.equal(1);
        findNumber(inputArray, 13).should.equal(4);

    });
});