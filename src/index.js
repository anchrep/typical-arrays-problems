
exports.min = function min (array) {
  if (array === undefined || array.length === 0 ) {
    return 0;
  }
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0 ) {
    return 0;
  }
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0 ) {
    return 0;
  } else {
    let sum = array.reduce((previosValue, currentItem) => previosValue + currentItem);
    let result = sum / array.length;
    return result;
  }
}
