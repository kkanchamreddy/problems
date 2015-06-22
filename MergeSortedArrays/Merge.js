function merge(arr1, arr2) {
    var mergedArray = [];
    var length1 = arr1.length, length2 = arr2.length;
    var i = 0, j = 0;
    while (i < length1 && j < length2) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i++]);
        } else if (arr2[j] < arr1[i]) {
            mergedArray.push(arr2[j++]);
        }
    }
     while (i < length1) {
        mergedArray.push(arr1[i++]);
    }

    while (j < length2) {
        mergedArray.push(arr2[j++]);
    }
    return mergedArray;
}



module.exports.merge = merge