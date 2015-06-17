var areIsomorphic = require('./Isomorphic.js');
var should = require('should');

describe('test Isomorphic', function() {
    it('areIsomorphic', function() {
        var result = areIsomorphic('abca', 'zbxz');
        result.should.equal(true);

        result = areIsomorphic('abcd', 'zbxz');
        result.should.equal(false);

        result = areIsomorphic('abca', 'zbxb');
        result.should.equal(false);

        result = areIsomorphic('turtle', 'tletur');
        result.should.equal(true);

        result = areIsomorphic('tletur', 'turtle');
        result.should.equal(true);
    });
});