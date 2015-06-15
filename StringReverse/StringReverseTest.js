var reverse = require('./StringReverse.js').reverseString;
var reverseStringInPlace = require('./StringReverse.js').reverseStringInPlace;
var should = require('should');



describe.only('String Reverse', function(){
  /*
	it('with wierd characters', function(){
		var str = 'foo 𝌆 bar mañana mañana';
		var reversedString = reverse(str);
		reversedString.should.equal('anañam anañam rab 𝌆 oof');
	})*/
	
	it('Even Character Reverse', function(){
		var reversedString = reverse('abcd');
		reversedString.should.equal('dcba');
	});

	it('Odd Character Reverse', function(){
		var reversedString = reverse('abc');
		reversedString.should.equal('cba');
	});

	it('Single Character Reverse', function(){
		var reversedString = reverse('a');
		reversedString.should.equal('a');
	});

	it('null Reverse', function(){
		var nullString = null;
		var reversedString = reverse(nullString);
		should.equal(reversedString, null);
	});

	it('Undefined String Reverse', function(){
		var undefinedString;
		var reversedString = reverse(undefinedString);
		should.equal(reversedString, null);
	});
});



describe('String Reverse reverseStringInPlace', function(){
	
	it('Even Character Reverse', function(){
		var reversedString = reverseStringInPlace('abcd');
		reversedString.should.equal('dcba');
	});

	it('Odd Character Reverse', function(){
		var reversedString = reverseStringInPlace('abc');
		reversedString.should.equal('cba');
	});

	it('Single Character Reverse', function(){
		var reversedString = reverseStringInPlace('a');
		reversedString.should.equal('a');
	});

	it('null Reverse', function(){
		var nullString = null;
		var reversedString = reverseStringInPlace(nullString);
		should.equal(reversedString, null);
	});

	it('Undefined String Reverse', function(){
		var undefinedString;
		var reversedString = reverseStringInPlace(undefinedString);
		should.equal(reversedString, null);
	});
});
