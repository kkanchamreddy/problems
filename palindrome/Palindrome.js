function isPalindrome(str) {
	if(!str){
		return false;
	}
    str = str.toLowerCase().replace(/[^\w]/g, '');
	str = str.split('');
    var i = 0; j = str.length - 1;
	while( i < j) {
		if(str[i] !== str[j]){
			return false;
			
		} 
		i++;
		j--;
	}

	return true;
} 

module.exports.isPalindrome = isPalindrome;