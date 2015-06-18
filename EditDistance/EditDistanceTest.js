var editDistance = require('./EditDistance.js');
var should = require('should');

describe('EditDistance b/n two strings', function(){
    it('recursive', function(){
        var getEditDistance = editDistance.getEditDistance;
        var fasterEditDistance = editDistance.getSmartEditDistance;
        var distance, startTime, endTime;
         //distance = getEditDistance('kitten', 'sitting');
        distance = fasterEditDistance('ab', 'b');
        distance.should.equal(1);

        distance = fasterEditDistance('kitten', 'sitting');
        distance.should.equal(3);

        startTime = Date.now();
        distance = fasterEditDistance('Hello World ', 'dlroW olleH');
        endTime = Date.now();

        console.log('faster --', endTime - startTime, '---distance--', distance);


        startTime = Date.now();
        distance = getEditDistance('Hello World ', 'dlroW olleH');
        endTime = Date.now();

        console.log('slower --', endTime - startTime, '---distance--', distance);



    });

});

