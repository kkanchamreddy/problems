function reverseString(str) {
	if(!str) {
		return str;
	}
	var result = '';
	var i , length = str.length;

	for(i = length - 1; i> -1; i--) {
		result += str[i];
	}
	return result;
}

function reverseStringInPlace(str) {
	if(!str) {
		return str;
	}
	var i = 0, j = str.length -1, tempChar;
	str = str.split('');
	
	while( i < j) {
		tempChar = str[i];
		str[i] = str[j];
		str[j] = tempChar;

		i++;
		j--;
	}
	return str.join('');
}

function builtInReverse(str) {
	if(!str){
		return str
	}

	return str.split('').reverse().join('');
}

function recursive(s) {
	return (s === '') ? '' : recursive(s.substr(1)) + s.charAt(0);

}

module.exports.reverseString = reverseString;
module.exports.reverseStringInPlace = reverseStringInPlace;
module.exports.builtInReverse = builtInReverse;

module.exports.recursive = recursive;