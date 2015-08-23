var DutchFlag = require('./DutchFlag.js');
var should = require('should');

describe('Count Sort', function(){
    it('Count Sort', function(){
        var countSort = DutchFlag.countSort;
        var arr = [1,4,2,9,6,8,7,5,3];
        var sortedArray = countSort(arr,4);//sorting with pivot as '6'

        sortedArray.should.eql([1,4,2,3,5,6,7,8,9]);
        

    });

});