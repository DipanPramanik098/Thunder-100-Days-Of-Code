// =====================================================
// * 1. GLOBAL SCOPE
// =====================================================

// * Variables declared outside any function or block
// * are accessible from anywhere in the file.

let a = 20;
const b = 30;
var c = 40;

console.log(a, b, c); // 20 30 40



// =====================================================
// * 2. BLOCK SCOPE
// =====================================================

// * let and const are Block Scoped.
// * They exist only inside the { } block.

if (true) {

    let age = 21;
    const city = "Kolkata";

    console.log(age);   // 21
    console.log(city);  // Kolkata
}

// ! Error
// console.log(age);
// console.log(city);


// ? Why?
// Because let and const cannot be accessed
// outside the block where they are declared.


// =====================================================
// * 3. var ignores Block Scope
// =====================================================

// ! var DOES NOT follow block scope.
// * It only follows Function Scope.

if (true) {

    var x = 100;
}

console.log(x); // 100


// ? Why?
// Because var becomes available outside the block.


// =====================================================
// * 4. FUNCTION SCOPE
// =====================================================

// * Variables declared inside a function
// * cannot be accessed outside it.

function demo() {

    var y = 10;
    let z = 20;
    const pi = 3.14;

    console.log(y, z, pi);
}

demo();

// ! Error
// console.log(y);
// console.log(z);
// console.log(pi);


// =====================================================
// * 5. LEXICAL SCOPE
// =====================================================

// * Inner functions can access variables
// * from their parent function.

let name = "Global";

function greet() {

    let name = "Dipan";

    function meet() {

        // * JavaScript searches variables in this order:
        //
        // 1. Current Function
        // 2. Parent Function
        // 3. Global Scope
        // 4. ReferenceError

        console.log(name);
    }

    meet();

    console.log(name);
}

greet();

/*

Output

Dipan
Dipan

*/


// ? Why not "Global"?
// Because JavaScript found name inside greet() first.


// =====================================================
// * 6. Scope Chain
// =====================================================

let language = "JavaScript";

function first() {

    let framework = "React";

    function second() {

        let library = "Redux";

        console.log(language);
        console.log(framework);
        console.log(library);
    }

    second();
}

first();


/*

Scope Chain

second()

↓

Own Scope

↓

Parent Scope

↓

Global Scope

↓

ReferenceError

*/


// =====================================================
// * 7. Nested Function
// =====================================================

// * This is ONLY a Nested Function.

// ! This is NOT a Closure.

function counter() {

    function increment() {

        console.log("Increment");
    }

    increment();
}

counter();


// ? Why isn't this Closure?

// * Because increment()
// * executes before counter()
// * finishes execution.


// =====================================================
// * 8. REAL CLOSURE
// =====================================================

// * Closure means:
// * Inner function remembers variables
// * from outer function even after
// * outer function has finished execution.

function createCounter() {

    let count = 0;

    function increment() {

        count++;

        console.log(count);
    }

    return increment;
}

const counter1 = createCounter();

counter1(); // 1
counter1(); // 2
counter1(); // 3


// ? Why is count not reset to 0?

// ! Because JavaScript creates a Closure.

// * Even though createCounter()
// * has already finished,
// * count is still remembered.


// =====================================================
// * 9. Multiple Closures
// =====================================================

const counter2 = createCounter();

counter2(); // 1
counter2(); // 2

counter1(); // 4


// ? Why?

// * Every function call creates
// * its own independent memory.

/*

Memory

counter1

count = 4


counter2

count = 2

*/


// =====================================================
// * 10. Another Closure Example
// =====================================================

function outer() {

    let username = "Dipan";

    function inner() {

        console.log("Welcome", username);
    }

    return inner;
}

const welcome = outer();

welcome();

// Output

// Welcome Dipan


// ! outer() has already finished.
// ! But inner() still remembers username.


// =====================================================
// * 11. Bank Account using Closure
// =====================================================

function createBankAccount(initialBalance) {

    let balance = initialBalance;

    return {

        deposit(amount) {

            balance += amount;
            console.log("Balance:", balance);
        },

        withdraw(amount) {

            if (amount > balance) {

                console.log("Insufficient Balance");
                return;
            }

            balance -= amount;
            console.log("Balance:", balance);
        },

        getBalance() {

            console.log("Current Balance:", balance);
        }

    };
}

const dipanAccount = createBankAccount(1000);

dipanAccount.deposit(500);
dipanAccount.withdraw(300);
dipanAccount.getBalance();


// =====================================================
// * 12. Interview Difference
// =====================================================

/*

Scope
------
Determines where variables are accessible.


Block Scope
-----------
let and const exist only inside { }.


Function Scope
--------------
var exists only inside a function.


Lexical Scope
-------------
A child function can access variables
from its parent function.


Closure
--------
A function remembers variables from
its outer lexical scope even after
the outer function has finished.

*/