var LinkedList = function(){
	 this._head = null;
}

LinkedList.prototype = {
	isEmpty: function() {
		return this._head === null;
	}

	insert: function(val) {
		var node = {
			value: val,
			next: null
		}
		if(this.isEmpty()){
			this._head = node;
		}
	}
}
module.exports = LinkedList;
