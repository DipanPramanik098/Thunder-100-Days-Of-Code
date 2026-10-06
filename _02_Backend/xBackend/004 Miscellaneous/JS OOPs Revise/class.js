// Class is a template/blueprint for creating objects.
class Person {

    // Constructor runs automatically when a new object is created.
    constructor(name, age) {
        // "this" refers to the current object.
        this.name = name;
        this.age = age;
    }

    // Method of the Person class.
    // This method can be used by every Person object.
    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}


// Create objects using the "new" keyword.
let p1 = new Person("Adam", 25);
let p2 = new Person("Eve", 25);


// Access object properties.
console.log(p1.name); // Adam
console.log(p2.name); // Eve

console.log(p1.age);  // 25
console.log(p2.age);  // 25


// Call the talk() method.
p1.talk(); // Hi, my name is Adam
p2.talk(); // Hi, my name is Eve