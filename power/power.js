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
		console.log('NO more recursion  b is 0', a);
		return 1;
	}
	if(b == 1){
		console.log('NO more recursion  b is 1', a);
		return a;
	}

	if(isEven(b)){
		return recursiveLogPower(a*a, Math.floor(b/2));
	} else {
		return a * recursiveLogPower(a*a, Math.floor(b/2));
	}

	
}

module.exports.recursivePower = recursivePower;
module.exports.recursiveLogPower = recursiveLogPower;

