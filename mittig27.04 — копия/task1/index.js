// начальный массив
const numbersList = [1, 2, 3, 4, 5];

/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */
const lastNumber = numbersList.pop();
console.log(lastNumber);

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достаньте последний элемент массива и поместите его в переменную lastNumber
// выведите эту переменную в консоль

// ... code here

/* push - добавит элемент в конец массива */
numbersList.push(6);

// console.log(result);

// c помощью метода push добавьте число 6 в конец массива
// выведите numbersList в консоль

// ... code here

/* shift - удалит из массива первый элемент и вернет его */
const firstNumber = numbersList.shift();
console.log(firstNumber);
// c помощью метода shift достаньте первый элемент массива и поместите его в переменную firstNumber
// выведите эту переменную в консоль

// ... code here

// numbersList.unshift(0);
// console.log(numbersList);
// // c помощью метода unshift добавьте число 0 в начало массива
// выведите numbersList в консоль

// ... code here

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */
// function func(item) {
//   console.log(item);
// }
// numbersList.forEach(func);
/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* элементы массива newArr - это результат вызова callback для каждого элемента arr */
/* newArr[i] = callback(arr[i]) */
function squareArr(num) {
  console.log("call");
  return num * num;
}

const squaredNumbers = numbersList.map(squareArr);
console.log(squaredNumbers);
// c помощью метода map создайте новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведите squaredNumbers в консоль

// ... code here

/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив. */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true */
/* callback(arr[i]) === true -> элемент будет добавлен в финальный массив  */
/* callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив  */

// c помощью метода filter создайте новый массив evenNumbers, в котором только четные числа из numbersList
// выведите evenNumbers в консоль
function callback(num) {
  return num % 2 === 0;
}

const res = numbersList.filter(callback);
// ... code here

console.log(res);
/* метод find */
/* const arrElement = arr.filter(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback. */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* если callback(arr[i]) вернет true, то filter прекратит поиск и вернет этот элемент */

// c помощью метода find найдите первое нечетное число в numbersList и выведите его в консоль

// ... code here

function callback(num) {
  console.log(num);
  return num % 2 === 1;
}

const firstOdd = numbers_list(callback);
