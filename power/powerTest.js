var power = require('./power.js');
var should = require('should');



describe('power a^b', function(){
	
	it('a^b - recursive', function(){

		var recursivePower = power.recursivePower;

		var result1 = recursivePower(2, 3);
		result1.should.equal(8);

		var result2 = recursivePower(2, 0);
		result2.should.equal(1);

		var result3 = recursivePower(2, 1);
		result3.should.equal(2);

		/*var result4 = recursivePower(2, -3);
		result4.should.equal();
		*/
	});


	it.only('a^b - recursive Log', function(){

		var recursivePower = power.recursiveLogPower;

		var result1 = recursivePower(2, 4);
		result1.should.equal(16);

		var result2 = recursivePower(2, 0);
		result2.should.equal(1);

		var result3 = recursivePower(2, 1);
		result3.should.equal(2);

		var result4 = recursivePower(2, -3);
		result4.should.equal(-8);
	});
});