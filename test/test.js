require("../src/index");
var expect = require("chai").expect;

describe('Array flaten test', function () {
  it('should return array [1,2,3,4,5,6]', function () {
    expect([1,2,[3,4,[5]],6].flatten()).to.deep.equal([1,2,3,4,5,6]);
  });

  it('should return array [1,2,3,4,5,6]', function () {
    expect([1,2,3,4,5,6].flatten()).to.deep.equal([1,2,3,4,5,6]);
  });

  it('should return array ["a","b",1,2,3]', function () {
    expect([["a","b"],1,2,3].flatten()).to.deep.equal(["a","b",1,2,3]);
  });

  it('should return array ["a","b",{a:1}]', function () {
    expect([["a","b"],[{a:1}]].flatten()).to.deep.equal(["a","b",{a:1}]);
  });
});
