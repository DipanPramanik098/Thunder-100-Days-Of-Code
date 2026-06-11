// array of Objects -- 
// An array of objects in JavaScript is one of the most common ways to store and manage structured data (like a list of users, products, or tweets).

// Here is a straightforward example, along with how you can use it.

// The Code Example
// Imagine you are building an app and need to store information about a few books. Each book has a title, an author, and a publication year.

// JavaScript
// An array of objects
const library = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
  },
  {
    title: "1844",
    author: "George Orwell",
    year: 1949
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  }
];


const user = {
    name : "Dipan",
    age : 21,
    location: "Kolkata",
    emailId: "myselfdipan6@gmail.com",
    greet : function(name){             //methods
        console.log("Hello ",name);
    },
    arr: ["This", "is", "an","array","under","object", 1,2,3],
    //object under object
    address : {
        vill : "Jayramchak",
        post : "Mahadole"
    }
}

function printObj(obj){
    console.log(obj);
}

printObj(user);
console.log("===================================================");
// accessing element
console.log(user.name);
console.log(user.age);
console.log(user["location"]);
user.greet("Aman");
console.log(user.address.vill);
console.log("===================================================");

// create a new key val--
user.aadhar = 21330;

console.log(user);
console.log("===================================================");

// update value
user.location = "Panskura";
console.log(user);
console.log("===================================================");

// delete field
delete user.emailId;
console.log(user);
console.log("===================================================");

//  deleting an entire object
let player = { score: 100 };

// The object is currently alive because 'player' points to it.

player = null; 

// Now, the object { score: 100 } has no references. 
// JavaScript's garbage collector will automatically delete it from memory soon.
console.log(player);

console.log("===================================================");

// ! access all keys
console.log(Object.keys(user)); // return an string array of keys
console.log("===================================================");

// * print all values
console.log(Object.values(user));
console.log("===================================================");

// ? key value both --
console.log(Object.entries(user));
console.log("===================================================");

// TODO - manually print all key val --
// ! using for of loop ---  this used to iterate the key array
for(key of Object.keys(user)){
    console.log(`${key} = ${user[key]}`);
}
console.log("===================================================");

// all val
for(val of Object.values(user)){
    console.log(val);
}
console.log("===================================================");

// all
for(ans of Object.entries(user)){
    console.log(ans);
}
console.log("===================================================");


const o1 = {
    name : "Dipan",
}
const o2 = o1;  //potint to same reference

o2.name = "Hello"; 
console.log(o1);

console.log("===================================================");
