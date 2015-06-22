/* Find location of a number in a sorted and rotated Array

ex:[1, 5, 7, 9, 11, 12 13] -> [7, 9, 11, 12, 13, 1, 5]
index of 1 -> 5

[1, 5, 7, 9, 11, 12 13] -> [12, 13, 1, 5, 7, 9, 11]
index of 1 ->2

*/

function findNumber(arr, number) {
    var right = arr.length - 1;
    var left = 0;
    var median;
    while (left <= right) {

        median = (left + right) / 2;
//console.log('left----', left, '   right-----', right, '   median------', median);
        if (arr[median] == number) return median;
        if (arr[left] <= arr[median]) {
            if (arr[left] < number && number < arr[median]) {
                right = median - 1;
            } else {
                left = median + 1;
            }
        } else {
            if (arr[median] < number && number < arr[right]) {
                left = median + 1;
            } else {
                right = median - 1;
            }
        }
    }

    return -1;
}





module.exports.findNumber = findNumber;