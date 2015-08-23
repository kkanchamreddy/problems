/* [2,3,4] -> [12, 8, 6]  with out using division
   [10, 3, 5, 6, 2] ->  [180, 600, 360, 300, 900]
*/

function maxProfitWrong(arr) {
	var currBuy = arr[0];
	var currSell = arr[1];
	var currMaxProfit = currSell - currBuy;

	var newBuy = arr[0], newSell = arr[1];

	for(var i = 2; i< arr.length; i++){
		if(arr[i] - newBuy > currMaxProfit) {
			newSell = arr[i];
		} else if(arr[i] < currBuy) {
			newBuy = arr[i];
		} 
		if(newSell - newBuy > currMaxProfit) {
			currMaxProfit = newSell - newBuy;
		}
	}

	return (currMaxProfit < 0) ? 0 : currMaxProfit;
}

function maxProfit(arr) {
	var maxProfit = arr[1] - arr[0];
	var minPrice = arr[0];
	var currPrice;
	var currentProfit = maxProfit;

	for( var i = 1; i < arr.length; i++) {
		currPrice = arr[i];
		

		currentProfit = currPrice - minPrice;
		if(currentProfit > maxProfit) {
			maxProfit = currentProfit;
		}

		if(currPrice < minPrice) {
			minPrice = currPrice;
		}
	}

	return maxProfit;
} 

module.exports.maxProfit = maxProfit;