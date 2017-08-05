'use strict';

function linearSearch(source, element, mulitple = false) {
  for(let i = 0; i < source.length; i++) {
    if(source[i] === element) {
      return i;
    }
  }
  return -1;
}

module.exports = linearSearch;
