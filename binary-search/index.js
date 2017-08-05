'use strict';

function binarySearch(source, element, sorted = false) {
  return search(source, 0, source.length - 1, element);
}

//binary search
function search(source, start, end, element) {
  if(start > end) {
    return -1;
  }

  const middle = Math.floor((start+end) / 2);
  const value = source[middle];

  if(value > element) {
    return search(source, start, end - 1, element);
  }

  if(value < element) {
    return search(source, start + 1, end, element);
  }

  return middle;
}

module.exports = binarySearch;
