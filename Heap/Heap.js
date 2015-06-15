/*Heap.js */

var Heap = function(n){
	if(n) {
		this.heapAsArray = [n];
	} else {
		this.heapAsArray = [];
	}
	
	//this.value = n
	//thi.parent = null;
};

Heap.prototype = {
	constructor: Heap,
	size: function(){
		return this.heapAsArray.length;
	},
	isEmpty: function(){
		return this.size() === 0;
	},
	insert: function(n){
       this.heapAsArray.push(n);
       this.siftUp(this.size() - 1);
		
	},
	removeMin: function(){
		//remove the first element
		var min = this.heapAsArray.shift();
		var lastEle;
		
		//get the last element and put it at 0
		if(this.size() > 1){
			//lastEle = this.heapAsArray.splice(this.size()-1, 1)[0];
			lastEle = this.heapAsArray.pop();
			this.heapAsArray.unshift(lastEle);

			//sift down
			this.siftDown(0);
		}
		

		

		return min;

	},
	getMin: function(){
		if(this.heapAsArray.length > 0){
			return this.heapAsArray[0];
		}
		else {
			return NaN;
		}
	},
	siftUp: function(index) {
		if(index == 0) return;

		var parentIndex = Math.floor((index - 1)/2);
		var node = this.heapAsArray[index];
		var parent = this.heapAsArray[parentIndex];
		/*console.log('parentIndex -->', parentIndex);
		console.log('index --->', index);
		console.log('node---->', node);
		console.log('parentNode----->', parent);*/

		if(parent > node) {
			this.heapAsArray[index] = parent;
			this.heapAsArray[parentIndex] = node;
			this.siftUp(parentIndex);
		}
	},
	siftDown: function(index) {
		if(index >= this.size() -1) return;

		var leftIndex =  2 * index 
		var rightIndex = (2 * index) + 1;

		var leftValue = this.heapAsArray[leftIndex];
		var rightValue = this.heapAsArray[rightIndex];
		var currValue = this.heapAsArray[index];

		if(leftValue < currValue) {
			this.heapAsArray[leftIndex] = currValue;
			this.heapAsArray[index] = leftValue;
			this.siftDown(leftIndex);

		} else if(rightValue < currValue) {
			this.heapAsArray[rightIndex] = currValue;
			this.heapAsArray[index] = rightValue;
			this.siftDown(rightIndex);
		}




	}

}

module.exports = Heap;

