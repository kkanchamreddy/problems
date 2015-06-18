var Postfix = require('./Postfix.js');
var should = require('should');

describe('Postfix', function() {
    it('Postfix Evaluate', function() {
        var evaluate = Postfix.evaluate;
        var val;
       val = evaluate('4 5 +');
        val.should.equal(9);

        val = evaluate('4 5 6 * +');
        val.should.equal(34);

        val = evaluate('10 5 6 * +');
        val.should.equal(40);


    });
});