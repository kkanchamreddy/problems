function longSequence(arr) {
    var i = 0, j = 0, length = arr.length, ls = [];
    for (i = 0; i < length; i++) {
        ls[i] = 1;
        for (j = 0; j < i; j++) {
            if (arr[j] < arr[i] && ls[j] <= ls[i]) {
                ls[i] = ls[j] + 1;
            }
        }
    }
    var result = 0;
    for (i = 0; i < length - 1; i++) {
        if (ls[i] > result) {
            result = ls[i];
        }
    }
    return result;
}

var sampleArr = [5, 2, 8, 6, 3, 6, 9, 7];
//[2,3,6,9]

console.log(longSequence(sampleArr));