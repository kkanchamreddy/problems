var Heap = require('./Heap.js');
var should = require('should');



describe('Heap Creation', function(){
	

	it('Heap Creation with an element', function(){
		var heapObj = new Heap(2);
		heapObj.size().should.equal(1);
		heapObj.isEmpty().should.equal(false);
	});

	it('Empty Heap Creation', function(){
		var heapObj = new Heap();
		heapObj.size().should.equal(0);
		heapObj.isEmpty().should.equal(true);
	});
});


describe('Heap Insert', function(){
	

	it('Insert an element', function(){
		var heapObj = new Heap(2);
		heapObj.insert(1);
		heapObj.insert(-1);

		heapObj.size().should.equal(3);


	});

	it('Insert duplicates', function(){
		var heapObj = new Heap(2);
		heapObj.insert(1);
		heapObj.insert(2);

		heapObj.size().should.equal(3);


	});


	
});


describe('Heap SiftUp', function(){
	

	it('Siftup- Insert in Descending Order', function(){
		var heapObj = new Heap(2);
		heapObj.insert(1);
		heapObj.insert(-1);

		heapObj.getMin().should.equal(-1);


	});

	it('Siftup- Insert in Ascending Order', function(){
		var heapObj = new Heap(5);
		heapObj.insert(6);
		heapObj.insert(7);

		heapObj.getMin().should.equal(5);


	});

	it('Siftup- Insert in Mixed Order', function(){
		var heapObj = new Heap(2);
		heapObj.insert(-1);
		heapObj.insert(1);
		heapObj.insert(-2);
		heapObj.insert(5);

		heapObj.getMin().should.equal(-2);


	});

	it('Siftup- Insert Duplicates', function(){
		var heapObj = new Heap(5);
		heapObj.insert(3);
		heapObj.insert(3);

		heapObj.getMin().should.equal(3);


	});


	
});
describe.only('Heap removeMin', function(){
	

	it('removeMin from Heap of Size 1', function(){
		var heapObj = new Heap(2);
		
		heapObj.removeMin().should.equal(2);
		heapObj.size().should.equal(0);


	});

	it('removeMin from Heap of Size 2', function(){
		var heapObj = new Heap(2);
		heapObj.insert(3);
		
		heapObj.removeMin().should.equal(2);
		heapObj.size().should.equal(1);
		heapObj.getMin().should.equal(3);


	});

	it('removeMin from Heap of Size > 2', function(){
		var heapObj = new Heap(2);
		heapObj.insert(3);
		heapObj.insert(4);
		
		heapObj.removeMin().should.equal(2);
		heapObj.size().should.equal(2);
		heapObj.getMin().should.equal(3);


	});


	
});

