var TreeTraversal = require('./TreeTraversal.js');
var should = require('should');

describe('Tree Traversal', function(){
	it('Level Order Tree Traersal', function(){
		var createNode = TreeTraversal.createNode;
		var root = createNode(1);
		root.left= createNode(2);
		root.right = createNode(3);

		root.left.left = createNode(4);
		root.left.right = createNode(5);

		root.right.left = createNode(6);
		root.right.right = createNode(7);

		var levelOrderTraversal = TreeTraversal.levelOrderTraversal;

		var levelOrderArray = levelOrderTraversal(root);

		levelOrderArray.should.eql([1,2,3,4,5,6,7]);
	});
});