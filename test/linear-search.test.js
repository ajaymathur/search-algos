const linearSearch = require('../linear-search');
const expect = require('chai').expect;

describe('linear-search', () => {
  "use strict";

  it('searches and returns the found index', () => {
    const result = linearSearch([1,2,3], 3);
    expect(result).to.equal(2);
  });

  it('searches and returns the -1 if element is not found', () => {
    const result = linearSearch([1,2,3], 4);
    expect(result).to.equal(-1);
  });
});
