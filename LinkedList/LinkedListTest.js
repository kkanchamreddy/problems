var LinkedList = require('./LinkedList.js');
var should = require('should');



describe('LinkedList Creation', function(){
	

	

	it('Empty LinkedList Creation', function(){
		var llObj = new LinkedList();
		llObj.isEmpty().should.equal(true);
	});
});