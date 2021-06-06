let array1 = [8, 7, 3, 2];
let array2 = [9, 1, 2, 5, 5];

function maxPossible(arr1, arr2) {
  let sortedArr2 = arr2.sort((a, b) => a - b);
  let newArr = [];

  function inner(arr1, sortedArr2) {
    if (arr1.length === 0) {
      return;
    }
    if (arr1[0] < sortedArr2[sortedArr2.length - 1]) {
      newArr.push(sortedArr2[sortedArr2.length - 1]);
      sortedArr2 = sortedArr2.slice(0, -1);
    } else if (arr1[0] > sortedArr2[sortedArr2.length - 1]) {
      newArr.push(arr1[0]);
    }
    inner(arr1.slice(1), sortedArr2);

    return newArr;
  }
  ////
  return inner(arr1, sortedArr2);
}

console.log(maxPossible(array1, array2));
