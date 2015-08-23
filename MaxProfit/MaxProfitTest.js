var MaxProfit = require('./MaxProfit.js');
var should = require('should');

describe('MaxProfit', function(){
	it('MaxProfit', function(){
		var maxProfit = MaxProfit.maxProfit;
		var profit;

		//profit = maxProfit([500,502,499,497,500,503,505,510,508]); 
		//profit.should.eql(13);


		profit = maxProfit([500,499,497,450]); 
		profit.should.eql(-1);

		
	});
});