/* power(a,b) calculates a^b */

/* O(n) , TODO: handle negative exponents*/
function recursivePower(a,b){
	if( b === 0){
		return 1;
	}
	//(b > 0)? b-- : b++;
	return a * recursivePower(a, b-1);
}


function isEven(num){
	return num%2 === 0;
}
/* O(log n) , TODO: handle negative exponents*/
function recursiveLogPower(a,b){
	if(b == 0) {
		return 1;
	}
	if(b == 1){
		return a;
	}
    if(b > 0){
    	b = Math.floor(b/2);
    } else {
    	b = Math.ceil(b/2);
    }
    var power = recursiveLogPower(a*a, b);

	if(isEven(b)){
		return power;
	} else {
		return a * power;
	}
}

function nonRecursive(a,b) {
	var returnVal =   1;
	while(b > 0) {
		if(b%2!=0)
			returnVal = returnVal * a; 
		a = a*a;
		b = Math.floor(b/2);
	}

	return returnVal;
}



module.exports.recursivePower = recursivePower;
module.exports.recursiveLogPower = recursiveLogPower;
module.exports.nonRecursive = nonRecursive;

