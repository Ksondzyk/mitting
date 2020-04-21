// function squareArr(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const square = arr[i] * arr[i];
//     result.push(square);
//   }
//   return result;
// }

// const numbers = [1, 2, 3, 4, 5];
// const res = squareArr(numbers);
// console.log(res);
// console.log(numbers);

// input arr
// output boolean

function some(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      return true;
    }
  }
  return false;
}
const numbers = [177, 27, 36, 47, 58];
const res = some(numbers);
console.log(res);
console.log(numbers);
