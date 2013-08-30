/**
 * Expose `range`.
 */
module.exports = range;


function range(from, to, steps) {
  switch(arguments.length) {
    case 1:
      to = from;
      from = 0;
      steps = 1;
      break;
    case 2:
    case 3:
      from = from || 0;
      to = to || 0;
      steps = Math.abs(steps) || 1;
      break;
    default:
      throw new Error("Cannot call `range(from, to, steps)` with " + arguments.length + " arguments.");
  }

  var inverse = from > to
    , arr = this instanceof Array ? this : [];
  for(var i = from; inverse ? i > to : i < to; inverse ? i -= steps : i += steps)
    arr.push(i);

  return arr;
}