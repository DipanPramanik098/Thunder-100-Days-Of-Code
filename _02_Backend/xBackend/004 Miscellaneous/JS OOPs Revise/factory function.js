function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
    return person;
}

// Create a new person object using the factory function
let person1 = PersonMaker("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.