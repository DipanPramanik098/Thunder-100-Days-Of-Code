// =====================================================
// * GLOBAL OBJECT & "use strict"
// =====================================================


// ! window is the Global Object in Browsers.
// ! global is the Global Object in Node.js.
// ! globalThis always points to the Global Object
// ! of the current JavaScript environment.

// console.log(window); // * Error in Node.js

console.log(global);

console.log("--------------------------------------------------");

console.log(globalThis);


// =====================================================
// * Without "use strict"
// =====================================================

// * JavaScript automatically creates a global variable
// * if a variable is assigned without let, const, or var.

d = 10;

console.log(d); // 10


// * Duplicate parameter names are allowed
// * (Not Recommended)

function add(num, num) {
    return num + num;
}

console.log(add(10, 20)); // 40


// =====================================================
// * With "use strict"
// =====================================================

// ! "use strict" enables Strict Mode.
// ! It helps catch common JavaScript mistakes.

"use strict";

// ! Error:
// d = 10;
// ReferenceError: d is not defined

// ! Error:
// Duplicate parameter names are NOT allowed.

// function add(num, num) {
//     return num + num;
// }


// =====================================================
// ? What does "use strict" do?
// =====================================================

// * Prevents accidental global variables.
// * Disallows duplicate function parameters.
// * Makes JavaScript more secure.
// * Throws errors for unsafe code.


// -------------------------
// ? Non Strict mode:
    // * window -> this -> global object
    // * Node Js -> this point to empty Object
    // * Inside Method in a object this keyword will point to the Object who invoked the message -> true for both window and node js.
console.log(this);

const u1 = {
    name: "Dipan",
    age: 10,
    greet: function(){
        console.log(this);
    }
}
u1.greet();
const u2 = {
    name: "Dipan",
    age: 10,
    greet: function(){
        console.log(this);
    }
}
u2.greet();



// ----------------------------------
function hello(){
    console.log(this);  // refer to global object---
}
hello();