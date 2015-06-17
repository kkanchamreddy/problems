function areIsomorphic(str1, str2) {

    var length1 = str1.length;
    var length2 = str2.length;
    var char1, char2;
    if (length1 != length2) {
        return false;
    }
    if (length1 == 1) {
        return true;
    }
    var used = [];
    var charMap = {};
    for (var i = 0; i < length1; i++) {
        char1 = str1[i];
        char2 = str2[i];
        
        if (!charMap[char1] && used.indexOf(char2) < 0) {
            charMap[char1] = char2;
            used.push(char2);
        }

        if (charMap[char1] != char2) {
            return false;
        }

    }

    return true;

}

module.exports = areIsomorphic;
/*
apple
bccle

a -1
p - 2
l - 1
e -1

equal length
 put them in a map

*/