let array = ["a", "b", "c", "d", "e", "f", "g"];
function rotate(arr, i) {
  if (i > 0) {
    if (i === 0) {
      return;
    } else if (i !== 0) {
      arr.push(arr[0]);
      arr.shift(arr[0]);
    }

    rotate(arr, i - 1);

    return arr;
  } else if (i < 0) {
    if (i === 0) {
      return;
    } else if (i !== 0) {
      arr.unshift(arr[arr.length - 1]);
      arr.pop();
    }

    rotate(arr, i + 1);

    return arr;
  }
}

console.log(rotate(array, -3));
