var MinSubString = require('./MinSubString.js');
var should = require('should');

describe('Find MinSubString', function() {
    it('Find MinSubString', function() {
        var findMinString = MinSubString.findMinSubString;
        var result;

        result = findMinString('this is a test string', 'tist');
        result.should.equal('t stri');

    });
});
