var ArrayProducts = require('./ArrayProducts.js');
var should = require('should');

describe('Array Products without division', function(){
	it('Iterative solution', function(){
		var findArrayProducts = ArrayProducts.findArrayProducts;
		var productArray;

		productArray = findArrayProducts([2,3,4]);
		productArray.should.eql([12, 8, 6]);

		productArray = findArrayProducts([10, 3, 5, 6, 2]);
		productArray.should.eql([180, 600, 360, 300, 900]);

		productArray = findArrayProducts([1,2]);
		productArray.should.eql([2,1]);

		productArray = findArrayProducts([1]);
		productArray.should.eql([1]);

		productArray = findArrayProducts([]);
		productArray.should.eql([]);

		var emptyObjectCall = findArrayProducts.bind(this);
		emptyObjectCall.should.throw(Error);
		emptyObjectCall.should.throw(/Input array should not be empty/);
	});
});