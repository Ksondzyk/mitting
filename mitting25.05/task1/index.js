// class Sportsmen {
//   constructor(age, name) {
//     this.age = age;
//     this.name = name;
//     this.merried = false;
//   }
//   run() {
//     console.log(`${this.name} is running`);
//   }
//   toString() {
//     console.log("fdfvdf");
//   }
// }

// const user1 = new Sportsmen("Bob", 17);
// console.log(user1);
// console.log(user1.toString());

// const user2 = new Sportsmen("Tom", 17);

// user2.run();
class Sportsmen {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} is running`);
  }
}
const user1 = new Sportsmen("Tom", 17);
class Swimer extends Sportsmen {
  constructor(name, style) {
    super(name);
    this.style = style;
  }
  swim() {
    console.log(`${this.name} is swiming`);
  }
}
const swi = new Swimer("John", "style1");

console.log(swi);

swi.swim();
