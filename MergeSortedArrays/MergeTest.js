var MergeArrays = require('./Merge.js');
var should = require('should');

describe('Merge sorted Arrays', function() {
    it('Merge extra space', function() {
        var mergeFunc = MergeArrays.merge;
        var result = mergeFunc([1,3,5,7], [2,4,6,8]);
        result.should.eql([1,2,3,4,5,6,7,8]);

        result = mergeFunc([1,3,5,7], [2,4,6,8,10,12,13,14]);
        result.should.eql([1,2,3,4,5,6,7,8,10, 12, 13, 14]);

        result = mergeFunc([1,3,5,7, 11, 12, 13, 14], [2,4,6,8,10]);
        result.should.eql([1,2,3,4,5,6,7,8,10, 11,12, 13, 14]);
    });
});
