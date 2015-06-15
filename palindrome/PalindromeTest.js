var isPalindrome = require('./Palindrome.js').isPalindrome;
var should = require('should');



describe('isPalindrome', function(){
	
	it('isPalindrome', function(){
		isPalindrome('test').should.equal(false);
		isPalindrome('tet').should.equal(true);
		isPalindrome('teet').should.equal(true);
		isPalindrome('amanaplanacanalpanama').should.equal(true);
		isPalindrome('A man, a plan, a canal, Panama').should.equal(true);
		
	});
});