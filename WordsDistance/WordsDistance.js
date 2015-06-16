function getMinDistance(mainStr, str1, str2){
	if(!mainStr || !str1 ||!str2) {
		return -1;
	}

	var strArray = mainStr.split(' ');
	var minDistance = strArray.length + 1, index1 = -1, index2 = -1;
	var distance;
	for(var i = 0; i< strArray.length; i++) {
		var str = strArray[i];
		if(str === str1) {
			index1 = i;
		} 
		if(str === str2) {
			index2 = i;
		}
		distance = index2 - index1;
		absDistance = Math.abs(distance);
		if(index1 != -1 && index2!= -1 && minDistance > absDistance) {
			minDistance = distance;
		}

	}
	if(minDistance > strArray.length)
		minDistance = -1;
	return minDistance;
}

module.exports = getMinDistance;