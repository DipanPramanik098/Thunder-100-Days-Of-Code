// Constructor function
// This function is used as a blueprint to create Person objects.
function Person(name, age) {
    // "this" refers to the new object that will be created.
    this.name = name;
    this.age = age;
}


// Add a method to Person's prototype.
// The method is shared by all Person objects,
// so a separate copy is NOT created for every object.
Person.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`);
};


// The "new" operator creates a new Person object.
// It automatically:
// 1. Creates a new empty object.
// 2. Links that object to Person.prototype.
// 3. Sets "this" to the new object.
// 4. Returns the new object.
let p1 = new Person("Adam", 25);
let p2 = new Person("Eve", 25);


// Each object has its own properties.
console.log(p1.name); // Adam
console.log(p2.name); // Eve


// Both objects share the same talk() method
// through Person.prototype.
p1.talk(); // Hi, my name is Adam
p2.talk(); // Hi, my name is Eve


// Check whether both objects use the same prototype.
console.log(p1.__proto__ === Person.prototype); // true
console.log(p2.__proto__ === Person.prototype); // true


// The objects are different,
// but their prototype is the same.
console.log(p1 === p2); // false
console.log(p1.__proto__ === p2.__proto__); // true