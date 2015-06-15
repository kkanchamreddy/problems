var fibRecursive = function(n) {
	if(n <= 1) {
		return n;
	} else {
		return fibRecursive(n-1) + fibRecursive(n-2);
	}
}

var fibIterate = function(n) {


      var i;
      var fibs = new Array();
      fibs.push(0);
      fibs.push(1);
      
      for(i=0; i<n; i++){
        fibs.push(fibs[0] + fibs[1]);
        fibs.shift();
      }
      return fibs[0];
  

  
}

module.exports.fibRecursive = fibRecursive;
module.exports.fibIterate = fibIterate;