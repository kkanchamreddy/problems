var stringReplace = require('./StringReplace.js');
var should = require('should');



describe('stringReplace', function(){
	
	it('stringReplace', function(){
		stringReplace('aaabbcbb','bb', 'ee').should.equal('aaaeecee');		
	});
});