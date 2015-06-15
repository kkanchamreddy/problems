var Fib = require('./Fib.js');
var fibRecursive = Fib.fibRecursive;
var fibIterative = Fib.fibIterate;
var should = require('should');



describe('Fibonacci Recursive', function(){
	

	it('Fib 0', function(){
		var fib0 = fibRecursive(0);
		fib0.should.equal(0);
	});

	it('Fib 1', function(){
		var fib1 = fibRecursive(1);
		fib1.should.equal(1);
	});

	it('Fib 2', function(){
		var fib2 = fibRecursive(2);
		fib2.should.equal(1);
	});

	it('Fib 3', function(){
		var fib3 = fibRecursive(3);
		fib3.should.equal(2);
	});

	it('Fib 4', function(){
		var fib4 = fibRecursive(4);
		fib4.should.equal(3);
	});
});


describe.only('Fibonacci Iterative', function(){
	
	it('Fib 0', function(){
		var fib0 = fibIterative(0);
		fib0.should.equal(0);
	});

	it('Fib 1', function(){
		var fib1 = fibIterative(1);
		fib1.should.equal(1);
	});

	it('Fib 2', function(){
		var fib2 = fibIterative(2);
		fib2.should.equal(1);
	});

	it('Fib 3', function(){
		var fib3 = fibIterative(3);
		fib3.should.equal(2);
	});

	it('Fib 4', function(){
		var fib4 = fibIterative(4);
		fib4.should.equal(3);
	});
});