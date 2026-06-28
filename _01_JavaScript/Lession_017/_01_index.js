const user = {
    name: "Dipan",
    age: 21,
    city: "Panskura",
    greet: function (){
        console.log("Hello Dipan");
    }
}

console.log(user);
console.log(user.hasOwnProperty('name'));
console.log(user.toString());


const user2 = {
    college: "NSEC"
}

// Prototype 
user2.__proto__ = user;

console.log(user2.greet);
user2.greet();
console.log(user2.name);
// 
