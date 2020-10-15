const expect = require('chai').expect;
const names = require('.');

describe('random-names', function(){
    it('should have a list of all available names', function() {
        expect(names.all).to.satisfy(isArrayOfStrings);
      });
    
      it('should allow me to get a random name from the list', function() {
        expect(names.random()).to.satisfy(isIncludedIn(names.all));
      });
});

function isArrayOfStrings(array) {
    return array.every(function(i) {
      return typeof i === 'string';
    });
  }
  
  function isIncludedIn(array) {
    return function(item) {
      return array.includes(item);
    };
  }