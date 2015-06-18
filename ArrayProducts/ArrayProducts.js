/* [2,3,4] -> [12, 8, 6]  with out using division
   [10, 3, 5, 6, 2] ->  [180, 600, 360, 300, 900]
*/

function findArrayProducts(arr) {
	if(!arr) {
		//return [];
		// or throw an error
		throw new Error('Input array should not be empty');
	}
	var returnArray = [], i = 0, length = arr.length, product = 1;
	for(i = 0; i < length; i++) {
		returnArray[i] = product;
		product = product * arr[i];
	}
	product = 1;
	for(i = length -1; i >= 0; i--) {
		returnArray[i] = returnArray[i] * product;
		product = product * arr[i];
	}

	return returnArray;
}

module.exports.findArrayProducts = findArrayProducts;