function swap(arr, i, j){
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function countSort(arr, index) {
	var pivot = arr[index];
	//var arr = [1,4,2,9,6,8,7,5,3];
	var small = 0, equal = 0,  large = arr.length - 1;
	console.log('Init--', arr);
	while (equal <= large) {

		if(arr[equal] < pivot){
			swap(arr, small++ ,equal++);
		} else if(arr[equal] === pivot) {
			equal++;
		} else {
			swap(arr, equal, large--);
		}
		console.log(arr);
	}

	return arr;
}

module.exports.countSort = countSort;

