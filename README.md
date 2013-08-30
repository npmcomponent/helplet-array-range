
# array-range

  Python's range(from, to, steps) in JavaScript.

## Installation

  Install with [component(1)](http://component.io):

    $ component install helplet/array-range

## API

### range([from], to, [steps])

  Returns and array containing the numbers `from` `to` in `steps`.

  `from` can be omitted or `null`, which is interpreted as `0`. It can be negative and *is* included in the array.
  `to` *is not* included in the array. It can be negative.
  `steps` can be omitted or `null`, which is interpreted as `1`.
  It can be negative, making the increment direction negative.
  If `to` is smaller than `from`, the direction will also be negative.
  If `to` is smaller than `from` and `steps` is negative, the direction will be positive.

## License

  MIT
