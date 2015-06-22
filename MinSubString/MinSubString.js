function findMinSubString(mainStr, targetStr) {
    var charMap = {}, found = {}, count = 0; var tempChar, begin = 0, end = 0, last = 0;;
    var minLength = mainStr.length, tempLength;
     for (i = 0; i < targetStr.length; i++) {
        tempChar = targetStr[i]
        if (tempChar in charMap) {
            //var currCount = charMap[tempChar]
            charMap[tempChar] = charMap[tempChar] + 1;
        } else {
            charMap[tempChar] = 1;
        }
     }
    for (end = 0; end < mainStr.length; end++) {
        if (!(mainStr[end] in charMap)) continue;
        tempChar = mainStr[end];
        if (tempChar in found) {
            found[tempChar] = found[tempChar] + 1;
        } else {
            found[tempChar] = 1;
        }

        //console.log(tempChar, found[tempChar]);
        if (found[tempChar] <= charMap[tempChar]) {
            count++;
        }

        if (count === targetStr.length) {
            tempChar = mainStr[begin];
            while (!charMap[tempChar] || found[tempChar] > charMap[tempChar]) {
                if (found[tempChar] > charMap[tempChar]) {
                    found[tempChar] = found[tempChar] - 1;
                }
                begin++;
                tempChar = mainStr[begin];
                console.log('---', mainStr.substring(begin, end));
            }

            tempLength = end - begin + 1;
            if (tempLength < minLength) {
                //last = end
                minLength = tempLength;
            }

        }
    }

    if (count === targetStr.length) {
console.log(mainStr.substr(begin, tempLength));
        return mainStr.substr(begin, tempLength);
    } else {
        return null;
    }

}

module.exports.findMinSubString = findMinSubString;