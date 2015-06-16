var getMinDistance = require('./WordsDistance.js');
var should = require('should');

describe('Words Distance', function(){
	it('Words Distance --', function(){
		var val = getMinDistance('Hello how are you', 'Hello', 'you');
		val.should.equal(3);

		val = getMinDistance('Hello how Hello are you', 'Hello', 'you');
		val.should.equal(2);

		val = getMinDistance('Hello how Hello are you when you', 'Hello', 'you');
		val.should.equal(2);

		val = getMinDistance('you how are Hello', 'Hello', 'you');
		val.should.equal(-3);

		val = getMinDistance('Happy birthday to you', 'Hello', 'you');
		val.should.equal(-1);

		val = getMinDistance('Happy Happy', 'Happy', 'Happy');
		val.should.equal(0);
	})
})