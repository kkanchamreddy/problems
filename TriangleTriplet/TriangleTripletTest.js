var TriangleTriplet = require('./TriangleTriplet.js');
var should = require('should');

describe('TriangleTriplet', function() {
    it('findTriplets - Bruteforce', function() {
        var findTriplets = TriangleTriplet.findTriplets;

        var triplets = findTriplets([10, 2, 7, 1]);
        triplets.should.have.length(0);

        triplets = findTriplets([1, 6, 4, 5]);
        triplets.should.have.length(3);

    });

    it.only('findTriplets - sort & search', function() {
        var findTriplets = TriangleTriplet.smartFind;

        var triplets = findTriplets([10, 2, 7, 1]);
        triplets.should.have.length(0);

        triplets = findTriplets([1, 6, 4, 5]);
        triplets.should.have.length(3);

    });
});