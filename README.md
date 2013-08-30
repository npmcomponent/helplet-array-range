
# array-range

  Python-like range(from, to, steps) in JavaScript.

## Installation

  Install with [component(1)](http://component.io):

    $ component install helplet/array-range

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
