
const user = {
    name :"Dipan",
    age : 10,
    value : 7000,
    city: "Kolkata",
    nested: {
        val1: "xyz",
        val2: "shof"
    }
}

// destructuring
const {age , value} = user;

console.log(age);
console.log(value);

// or
const {age : agename } = user;
console.log(agename);

// separate copy --  spread operator
const u2 = {...user}; // different but nested object are same 

console.log(user);
console.log(u2);

u2.name = "Hello Dipan";
u2.nested.val1 = "Hello changed value";


console.log(user);
console.log(u2);


console.log('===========================================');
// separate copy
const u3 = structuredClone(user); // its create a complete separate copy

// for in loop
for(key in u3){
    console.log(key);
    console.log(u3[key]);
}

