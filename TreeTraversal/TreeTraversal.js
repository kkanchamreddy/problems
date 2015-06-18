function createNode(data) {
	return {
		data: data,
		left: null,
		right: null
	};
}


function levelOrderTraversal(node) {
	var temp = node;
	var queue = [];
	var levelOrderArray = [];

	while(temp!=null) {
		levelOrderArray.push(temp.data);
		if(temp.left) {
			queue.push(temp.left);
		}
			
		if(temp.right) {
			queue.push(temp.right);
		}
		temp = queue.shift();

	}

	return levelOrderArray;
}

module.exports.levelOrderTraversal = levelOrderTraversal;
module.exports.createNode = createNode;
