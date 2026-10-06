// ========================================
// INHERITANCE IN JAVASCRIPT
// ========================================


// Parent Class (Super Class)
// Person contains common properties and methods.
class Person {

    constructor(name, age) {
        // "this" refers to the current object.
        this.name = name;
        this.age = age;
    }

    // Method of the parent class.
    greet() {
        console.log(`Hello! My name is ${this.name}.`);
    }
}


// Child Class (Sub Class)
// Student inherits from the Person class using "extends".
class Student extends Person {

    constructor(name, age, marks) {

        // super() calls the constructor of the parent class.
        // It initializes the inherited properties: name and age.
        super(name, age);

        // "this" refers to the current Student object.
        // marks is a new property specific to Student.
        this.marks = marks;
    }

    // This method overrides the greet() method of Person.
    greet() {

        // super.greet() calls the parent class's greet() method.
        super.greet();

        console.log(
            `I am a student and my marks are ${this.marks}.`
        );
    }

    // Method specific to the Student class.
    showDetails() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Marks: ${this.marks}`
        );
    }
}


// ========================================
// Creating an object of Student class
// ========================================

let s1 = new Student("Adam", 25, 95);


// Call the overridden greet() method.
s1.greet();

// Call the Student-specific method.
s1.showDetails();


// ========================================
// INHERITANCE
// ========================================

// Student automatically gets properties and methods
// from Person because Student extends Person.
//
// Student
//   ↓ extends
// Person
//
// Student can use:
// - name        → inherited from Person
// - age         → inherited from Person
// - greet()     → inherited/overridden from Person
// - marks       → its own property
// - showDetails() → its own method