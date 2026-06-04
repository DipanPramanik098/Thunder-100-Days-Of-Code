let firstNum = 10;

let secondNum = 10;

console.log(firstNum);
console.log(secondNum);  // primitive datatype -- copy by value.  -- create indivisual copy for each

let obj1= {
    name: "Dipan",
    age:21
}

console.log(obj1);

let obj2 = obj1;
console.log(obj2);

obj2.name = "Dipan Pramanik";

console.log(obj1);
console.log(obj2); // refference same hai inka isiliye change ho jayega dono hi.... 
// Non Premitive same refference ko point krta hai by default

// This rule is made by ECMA scriptn
//  -- implement by different browser



let a = 10;
let b = 10;

console.log(a==b);

let ax = "dipan";
let bx = "pramanik";
console.log(ax == bx);


// 
let obj  = {
    name : "dipan",
    age : 21
}

let objj = obj1;

let o = {
    name : "dipan",
    age : 21
}

console.log(obj1 == objj);  // copy address
 
console.log(obj == o);  // false because value same hi hai lekin non primitive datatype hai ye reference ko store krta hai  -- iske hisab se obj letts address 1000 but o address 2000 (for example ).


// immutable & mutable
// primitive datatype immutable hoga hum usko change nhi kar sakte
// Non Primitive datatype mutable hote hai...


let s = "Dipan"; // once created it can't change u can reasigned  but "Dipan" still stay in the memory



let x = 20;
x = 30;
console.log(x);

const c = {
    name : "Dipan",
    age : 21
}

console.log(c);
console.log(c.age);

c.age = 10;  // yes this changes allow because the address is same and object is non primitive datatype
console.log(c);
console.log(c.age);

// c= {
//     name: "Hello",
//     age: 22                     // this is not allow because it's change the address becise here we create a new object
// }
// console.log(c);

// js say - bas code likhle iske upar focus mat kar ki memory me kya ho raha hai wo v8 engine dekh lega.😂😂😂