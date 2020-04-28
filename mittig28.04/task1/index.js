// ... code here
const numbersList = [4.78, 6.9, 3.666];

// function callback(acc, num) {
//   console.log(acc, num);
//   const newAcc = acc + num;
//   // return undefined;
// }

// const sum = numbersList.reduce(callback, 0);
// console.log(sum);

const getTotalPrice = (arr) => {
  const sum = arr.reduce(function callback(acc, num) {
    return acc + num;
  }, 0);
  return "$" + Math.floor(sum * 100) / 100;
};
