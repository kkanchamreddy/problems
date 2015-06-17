/* Brute force O(n3) */
function findTriplets(arr) {
  var returnArray = [];
  var side = 0, length = arr.length, k = 0;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
        for (k = 0; k < length; k++) {
            if (i != j && j != k && k != i) {
                if (arr[i] + arr[j] > arr[k] &&
                    arr[j] + arr[k] > arr[i] &&
                    arr[k] + arr[i] > arr[j]) {
                    returnArray = [arr[i], arr[j], arr[k]];
                    return returnArray;
                }

            }
        }

    }
  }
  return returnArray;
}

function smartFind(arr) {
    arr.sort(function(a, b) {
        return a > b;
    });

    for (var i = 0; i < arr.length - 2; i++) {
        if (arr[i] + arr[i + 1] > arr[i + 2]) {
            return arr.slice(i, i + 3);
        }
    }
    return [];
}

module.exports.findTriplets = findTriplets;
module.exports.smartFind = smartFind;