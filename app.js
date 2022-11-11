//Object literals with a sayHello function in each object
let person1 = {
  name: "Jen",
  sayHello: function () {
    console.log(`Hello my name is ${this.name}`);
  },
};
let person2 = {
  name: "Jamie",
  sayHello: function () {
    console.log(`Hello my name is ${this.name}`);
  },
};
let person3 = {
  name: "Sequoya",
  sayHello: function () {
    console.log(`Hello my name is ${this.name}`);
  },
};
let person4 = {
  name: "Emily",
  sayHello: function () {
    console.log(`Hello my name is ${this.name}`);
  },
};
let person5 = {
  name: "Logan",
  sayHello: function () {
    console.log(`Hello my name is ${this.name}`);
  },
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

// Class->constructor ES6 syntax
//creates a Class with a constructor that has parameters that can be used for all "Person" age, city, and name inputs.
class Person {
  constructor(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
  }
  introduction() {
    console.log(
      `Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}`
    );
  }
}
let p1 = new Person("Jen", "Sheffield", 38);
let p2 = new Person("Jamie", "Huntsville", 37);
let p3 = new Person("Sequoya", "Sheffield", 24);
let p4 = new Person("Emily", "Germantown", 32);
let p5 = new Person("Logan", "Germantown", 34);

p1.introduction();
p2.introduction();
p3.introduction();
p4.introduction();
p5.introduction();

//Inheritance

class Vehicle {
  constructor(name, wheels, manufacturer, doors) {
    this.name = name;
    this.wheels = wheels;
    this.manufacturer = manufacturer;
    this.doors = doors;
  }
  aboutVehicle() {
    console.log(
      `This a ${this.name}. It is made by ${this.manufacturer} and it has ${this.wheels} wheels.`
    );
  }
}

class Truck extends Vehicle {
  constructor(name, wheels, manufacturer, doors, bed) {
    super(name, wheels, manufacturer);
    this.bed = bed;
    this.doors = doors;
  }
  aboutVehicle() {
    console.log(
      `This a ${this.name}. It is made by ${this.manufacturer}. It has ${this.wheels} wheels, ${this.doors} doors and a bed.`
    );
  }
}

class Sedan extends Vehicle {
  constructor(name, wheels, manufacturer, doors, size, mpg) {
    super(name, wheels, manufacturer);
    this.doors = doors;
    this.size = size;
    this.mpg = mpg;
  }
  aboutVehicle() {
    console.log(
      `This a ${this.name}. It is made by ${this.manufacturer}. It has ${this.wheels} wheels, ${this.doors} doors, is ${this.size}, and gets ${this.mpg} average miles per gallons.`
    );
  }
}

class Motorcycle extends Vehicle {
  constructor(name, wheels, manufacturer, doors, handlebars) {
    super(name, wheels, manufacturer);
    this.handlebars = handlebars;
    this.doors = doors;
  }
  aboutVehicle() {
    console.log(
      `This a ${this.name}. It is made by ${this.manufacturer}. It has ${this.wheels} wheels, ${this.doors} doors, and has handlebars.`
    );
  }
}

let Ram2500 = new Truck("Ram 2500 Super Duty", 6, "Dodge", 4, true);
let Optima = new Sedan("Optima", 4, "Kia", 4, "medium-sized", 32);
let Harley = new Motorcycle("Fat Boy 114", 2, "Harley-Davidson", 0, true);

Ram2500.aboutVehicle();
Optima.aboutVehicle();
Harley.aboutVehicle();
