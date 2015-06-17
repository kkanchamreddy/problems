var Postfix = require('./Postfix.js');
var should = require('should');

describe('Postfix', function() {
    it('Postfix Evaluate', function() {
        var evaluate = Postfix.evaluate;
        var val;
        val = evaluate('45+');
        val.should.equal(9);

        val = evaluate('456*+');
        val.should.equal(34);


    });
});