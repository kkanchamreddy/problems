var reA = /[^a-zA-Z]/g;
var reN = /[^0-9]/g;
function sortAlphaNum(a, b) {
    var aA = a.replace(reA, "");
    var bA = b.replace(reA, "");
    if (aA === bA) {
        var aN = parseInt(a.replace(reN, ""), 10)
        var bN = parseInt(b.replace(reN, ""), 10);
        return aN - bN;
    } else {
        return aA - bA;
    }
}

var input = ['p1', 'p10', 'p12', 'p2', 'p21'];
var input2 = ['p1a', 'p1b', 'p10', 'p12', 'p2', 'p21'];

console.log(input2.sort(sortAlphaNum));
