//Object Literals//
// let person1 = {
//     name: 'Franco', 
//     sayHello: function() {
//         console.log(`Hello! My name is ${this.name}.`)
//     }
// }

// let person2 = {
//     name: 'Cole', 
//     sayHello: function() {
//         console.log(`Hello! My name is ${this.name}.`)
//     }
// }

// let person3 = {
//     name: 'Mary', 
//     sayHello: function() {
//         console.log(`Hello! My name is ${this.name}.`)
//     }
// }

// let person4 = {
//     name: 'Kayla', 
//     sayHello: function() {
//         console.log(`Hello! My name is ${this.name}.`)
//     }
// }

// let person5 = {
//     name: 'Blake', 
//     sayHello: function() {
//         console.log(`Hello! My name is ${this.name}.`)
//     }
// }

// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

// //Psuedo Classes//

// function Person(name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age; 
// }

// Person.prototype.sayHello = function() {
//     alert(`Hey! My name is ${this.name}, I am ${this.age} and live in ${this.city}`)
// }

// let p1 = new Person('Franco', 'Hoover', 26);
// let p2 = new Person('Cole', 'Hoover', 20); 
// let p3 = new Person('Mary', 'Hoover', 18);
// let p4 = new Person('Kayla', 'Hoover', 19);
// let p5 = new Person('Blake', 'Hoover', 25);

// p1.sayHello();
// p2.sayHello();
// p3.sayHello();
// p4.sayHello();
// p5.sayHello();

// //Psuedo Classes with ES6 Syntax//

// class Persona {
//     constructor(name, city, age) {
//         this.name = name;
//         this.city = city;
//         this.age = age;
//     }

//     sayHello() {
//         alert(`Hey! My name is ${this.name}, I am ${this.age} and live in ${this.city}`);
//     }
// }

// let pA1 = new Persona('Franco', 'Hoover', 26);
// let pA2 = new Persona('Cole', 'Hoover', 20);
// let pA3 = new Persona('Mary', 'Hoover', 18);
// let pA4 = new Persona('Kayla', 'Hoover', 19);
// let pA5 = new Persona('Blake','Hover', 25);

// pA1.sayHello();
// pA2.sayHello();
// pA3.sayHello();
// pA4.sayHello();
// pA5.sayHello();

//Inheritance//

//note: skip the class about trucks
class Vehicle {
    constructor(manufacturer, wheels) {
        this.manufacturer = manufacturer;
        this.wheels = wheels
    }

   aboutVehicle() {
       console.log(`The vehicle is made by ${this.manufacturer} and it has ${this.wheels} wheels.`);
   } 
}

class Sedans extends Vehicle {
    constructor(manufacturer, wheels, doors, milage, size) {
        super(manufacturer, wheels);
        this.doors = doors;
        this.milage = milage;
        this.size = size;
    }

    aboutVehicle() {
        console.log(`The vehicle is made by ${this.manufacturer}. It has ${this.wheels} wheels, as well as ${this.doors} doors. Other features it has are that it has ${this.milage} milage and its size is ${this.size}.`);
    }
}

class Motorcycles {
    constructor(manufacturer, wheels, handleBars, noDoors) {
        super(manufacturer, wheels);
        this.handlebars = handleBars;
        this.noDoors = noDoors;
    }

    aboutVehicle() {
        if(noDoors === 0 && handldeBars === 2) {
            console.log(`This vehicle is made by ${this.manufacturer}, it has no doors, ${this.wheels} wheels, and ${this.handlebars} handlebars. its a motorcycle!`);
        }
        else {

        }
    }
}

// let s1 = new Sedans('Honda', 4, 4, 80, 'medium')
// s1.aboutVehicle();