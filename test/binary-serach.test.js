const binarySearch = require('../binary-search');
const expect = require('chai').expect;

describe('binary-search', () => {
  "use strict";

  it('searches in sorted source and returns the found index', () => {
    const result = binarySearch([1,2,3], 3);
    expect(result).to.equal(2);
  });

  it('searches and returns the -1 if element is not found', () => {
    const result = binarySearch([1,2,3], 4);
    expect(result).to.equal(-1);
  });
});
