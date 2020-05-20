function printMessage(age, city) {
  console.log(
    `hello ${this.name}, email ${this.email}, age ${age}, city: ${city}`
  );
}
// printMessage(30);
//input function ,obj arg1,arg2,argN
//output function

let user = {
  name: "Alex",
  email: "gmail.com",
  tempFunction: 1100,
};
// printMessage.bind(user, 30, "kiev")();
// printMessage.bind(user, 30, "kiev")();
// printMessage.bind(user, 30, "kiev")();
//use bind

// function bind1(func, context, ...args) {
//   return func.bind(context, ...args);
// }

// bind1(printMessage, user)(30, "Kiev");
// bind1(printMessage, user, 30)("Kiev");
// bind1(printMessage, user, 30, "Kiev");

// console.log(user);

// //call/apply
//algo
// put func to the context
//2 call func as object property

// function bind2(func, context, ...arg) {
//   return function (...args1) {
//     let copyContex = Object.assign({}, context);
//     copyContex.tempFunction = func;
//     return copyContex.tempFunction(...arg, ...args1);

//     // console.log(copyContex);
//   };
// }

// bind2(printMessage, user)(30, "Kiev");
// bind2(printMessage, user, 30)("Kiev");
// bind2(printMessage, user, 30, "Kiev");
// console.log(user);

// //custom
function bind3(func, context, ...arg) {
  return function (...funcArgs) {
    let res = func.apply(context, funcArgs.concat(arg));
    return res;
  };
}
bind3(printMessage, user)(30, "Kiev");
bind3(printMessage, user, 30)("Kiev");
bind3(printMessage, user, 30, "Kiev");
console.log(user);
