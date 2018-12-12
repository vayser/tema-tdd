var { equal, deepEqual } = require('assert');

var {
  reverse,
  summ,
} = require('./src');


describe.skip('summ', function() {

  it('should return summ of 2 variables', function() {
    equal(2, summ(1, 1));
  });

  it('should return summ even if some variables are undefined', function() {
    equal(1, summ(1));
  });

  it('should return 0 if both variables are undefined', function() {
    equal(0, summ());
  });

});

describe('reverse', function() {
  it('should reverse array', () => {
    deepEqual([1, 2], reverse([2, 1]))
  })

  it('should reverse array with single element', () => {
    deepEqual([1], reverse([1]))
  })

  it('should reverse array with 0 elements', () => {
    deepEqual([], reverse([]))
  })

  it('should reverse array with different types', () => {
    deepEqual([1, 'two'], reverse(['two', 1]))
  })

  it('should reverse string', () => {
    deepEqual('aloha', reverse('ahola'))
  })
})
