var arr = [];
function isHappy(num) {

    num = num.toString();
    if (arr.indexOf(num) > -1) {
        return false;
    }
    arr.push(num);
    var length = num.length;
    var i = 0;
    var sum = 0;
    for (i = 0; i < length; i++) {
        var digit = num.charAt(i);
        sum += digit * digit;
    }

    if (sum === 1) {
        return true;
    } else {
        return isHappy(sum);
    }
}

console.log('isHappy--->', isHappy(7));