class Animal {
    constructor(name) {
        this.name = name;
    }


    sayHi() {
        console.log(this.name);
    }
}

const a1 = new Animal('Jack');

console.log(a1)

class Dog extends Animal {}

const d1 = new Dog('sam')

d1.sayHi()
// полиморфизм это обычное прототипное наследование,или просто наследование


function calculate(operation, a, b){
    const sum = (a,b)=>a+b;
    const diff = (a,b)=>a-b;

    if (operation === '+'){
        return sum(a, b)
    }
     if (operation === '-'){
        return diff(a,b)
    }
}

const result = calculate('+', 4,3);
console.log(result)