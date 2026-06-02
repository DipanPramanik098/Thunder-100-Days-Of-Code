// primitive Datatype
// Number
let n = 21;
console.log(n);


// string
let name = "Dipan Pramanik";
let s2 = 'Thunder';

let s3 = `I am ${n} Years Old`;
console.log(name);
console.log(s2);
console.log(typeof name);
console.log(s3);


// boolean
let b1 = true;
let b2 = false;
console.log(b1);
console.log(b2);

// Undefined
let x;
console.log(x);
console.log(typeof x);

// null
let b = null;
console.log(b);
console.log(typeof b);

// bigint
let a  = 333333333333333333333333333333333n;
console.log(a);

// Symbol
let sy = Symbol("Dipan");
let sy2 = Symbol("Dipan");
console.log(sy);
console.log(sy2);

console.log(sy == sy2);  // symbol always create an unique element

// --------------------------------------------------------------------------
// Non Primitive DataType
let arr = [1,2,3,4,"Dipan", 9.9];
console.log(arr);
console.log(typeof arr);

// Object ----  Most Important
let person = {
    name : "Dipan",
    age : 21,
    city: "Kolkata"
}
console.log(person);
console.log(typeof person);

// function
// function greet(){
//     console.log("Hello JS Function");
// }
// greet(); // function call

let ga = function greet(){
    console.log("Hello JS Function");
}
console.log(ga);
console.log(typeof ga);
ga();

