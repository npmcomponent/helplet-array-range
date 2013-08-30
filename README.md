
# array-range

  Python-like range(from, to, steps) in JavaScript.

## Installation

  Install with [component(1)](http://component.io):

    $ component install helplet/array-range

## Usage

```js
var range = require("array-range");

console.log(range( 4)); // [0,  1,  2,  3]
console.log(range(-4)); // [0, -1, -2, -3]

console.log(range( 1,  4)); // [        1,  2,  3]
console.log(range(-1,  4)); // [-1, 0,  1,  2,  3]
console.log(range(-1, -4)); // [       -1, -2, -3]
console.log(range( 1, -4)); // [ 1, 0, -1, -2, -3]

console.log(range(1, 5,  2)); // [1, 3]
console.log(range(1, 5, -2)); // [1, 3]
console.log(range(1, 3, .5)); // [1, 1.5, 2.5]

// You can also mount `range` to the Array.prototype
Array.prototype.range = range;

var arr = [1, 2, 3];
arr.range(5);
console.log(arr); // [1, 2, 3, 0, 1, 2, 3, 4];

// You can also bind it to an array
var arr = []
  , addRange = range.bind(arr);
addRange(3);
addRange(5, 10);
console.log(arr) // [0, 1, 2, 5, 6, 7, 8, 9]

// And you can call it on an array
var arr = [];
range.call(arr, 3);
range.call(arr, 5, 10);
console.log(arr) // [0, 1, 2, 5, 6, 7, 8, 9]

// ????
// PROFIT!!!
```

## API

### range([from], to, [steps])

  Returns and array containing the numbers `from` `to` in `steps`.

  `from` can be omitted or `null`, which is interpreted as `0`. It can be negative and *is* included in the array.
  `to` *is not* included in the array. It can be negative.
  `steps` can be omitted or `null`, which is interpreted as `1`. `steps` can be negative and will be converted with `Math.abs(steps)`.
  If `to` is smaller than `from`, the increment direction will be inversed (negative).

  If `range`'s context is an array, it will push the values to that array. (`Array.prototype.range = range`, `range.bind(arr)`)

## License

  MIT
