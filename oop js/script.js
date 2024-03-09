// let obj = {
//   name: "harry",
//   id: 123,
// };
// console.log(obj);

class Animal {
  constructor(name) {
    this.name = name;
    console.log("object is created...");
  }

  jumps() {
    console.log("kood raha hoo");
  }
}
class tiger extends Animal {
  constructor(name) {
    super(name);
    console.log("you called constructor again");
  }
  eats() {
    super.eats();
    console.log("kha ra ha hoo");
  }
}

let a = new Animal("Karthik");
let b = new tiger("harshik");
console.log(a);
console.log(b);
