function getEditDistance(s, t) {
    //console.log(str1, '---', str2);
    if(s.length == 0) return t.length;
    if(t.length === 0) return s.length;

    return Math.min(getEditDistance(s.substr(1), t) + 1,
                    getEditDistance(t.substr(1), s) + 1,
                    getEditDistance(s.substr(1), t.substr(1)) + (s[0]===t[0]? 0: 1)
        );

}

getSmartEditDistance = function(a, b){
  if(a.length == 0) return b.length;
  if(b.length == 0) return a.length;

  var matrix = [];

  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }

  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }

  return matrix[b.length][a.length];
}

module.exports.getEditDistance = getEditDistance;
module.exports.getSmartEditDistance = getSmartEditDistance;

/*
    sport, sort  -> 1
    kitten , sitting -> 3
    ED(P, T) = min(ED(Pi-1, Tj-1), ED(Pi-1, Tj), ED(Pi, Tj-1))

    Math.min(ED('', 'b') + 1, ED('a', '') + 1, ED('','') +1)
    Math.min(1 + 1, 1 + 1, 1)

    Math.min(2, 2, 1)


    Math.min(ED('a', 'b') + 1, ED('ab', '') + 1, ED('a','') +1)

    Math.min(1 + 1, 2 + 1, 1 +1)
    Math.min(2, 3, 2)

    kanchamreddy
    lankireddy

*/