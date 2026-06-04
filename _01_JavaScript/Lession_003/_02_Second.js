//  var --- ye old method hai ab use nhi hota

// var a = 10;
// console.log(a);

// var a = 20; 
// console.log(a); // ye kuch bhi kar sakta hai bhai

// if(true){
//     var c = 0;
// }
// console.log(c); // c ko block k bahar bhi access kar sakta hai ye 

// Operator in Js

// Arithmetic Operator
console.log(3+4);
console.log(3-4);
console.log(3*4);
console.log(3/4);
console.log(3**4);
console.log(5%3); //remainder


// Assignment Operator
let a = 10;

let b=20;

console.log(a+=b);
console.log(a);

console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);

// pre increment -- use first then increase
let f = 0;
console.log(f++);
console.log(f);

// post increment -- increase first then use 
console.log(++f);
console.log(f);

//  same for decrement --f, f--
console.log("=============");

// comparison Operator -- gives true or false
console.log(10 == 5);
console.log(10 >= 5);
console.log(10 <= 5);
console.log(10 > 5);
console.log(10 < 5);
console.log(10 != 5);

console.log("==============");

console.log("10"==10); //true -- just because == compare  only value not type --- convert 10 to "10"
// for this case use === 
console.log("10"===10); //false
// Aisa mat krna vai

console.log(10+"10");
console.log("10"+10);
console.log(10+10);

console.log("-----------------------------------------");
let str = "10";
console.log(str, typeof str);

let st_to_num = Number(str);
console.log(st_to_num, typeof st_to_num);


console.log("-----------------------------------------");

console.log(30+'7'); // 307 --  30 converted to String
console.log(String(30)+'7'); // Better to do this with clarity

console.log("-----------------------------------------");

console.log(null == undefined);  // null is loosely equal to undefined and not to anyone -- true 
console.log(null === undefined); // false

//  all other false
console.log(null == 0);
console.log(null == false);


// -----
console.log("-----------------------------------------");
console.log(null == 0);
console.log(null >= 0); //true
console.log(null <= 0); //true  all other false
console.log(null > 0);
console.log(null < 0);

// ---
console.log('---------------------------------');
console.log(0 == false);

console.log('---------------------------------');
console.log(true && true);  // && if first value true then jo bhi second value hai usko seedha bhejdo & pehla false matlab return pehla
console.log(true && false);
console.log(false && false);
console.log(false && true);

console.log('---------------------------------');
console.log(true || true); //pehla true to return krdo pehle ko  and pehla false to return kardo dusre ko 
console.log(true || false);
console.log(false || false);
console.log(false || true);

console.log('---------------------------------');
console.log(true && 'Dipan'); //Dipan
console.log('---------------------------------');
console.log(false && 'Dipan'); //false -- this case agar pehla false hai fir khudko return kardo'
console.log('---------------------------------');
console.log(false || 'Dipan');
console.log('Dipan' || false);

