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
