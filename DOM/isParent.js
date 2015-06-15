function isParent(child, parent){
	var ancestor = child.parentNode;
	while(ancestor){
		if(ancestor == parent) {
			return true;
		}
		ancestor = ancestor.parentNode
	}
	return false;
}