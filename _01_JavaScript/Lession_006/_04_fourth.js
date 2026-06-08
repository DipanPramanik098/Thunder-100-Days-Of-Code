const names = ["Dipan","Apurba","Sinchan","Dipan"];

console.log(names);

// convert whole array to a string
console.log(names.join(','));
console.log(names.join(' '));


// indexof
console.log(names.indexOf("Dipan"));
console.log(names.indexOf("Dip"));

console.log(names.lastIndexOf("Dipan"));

console.log(names.includes("Dipan"));
console.log(names.includes("Dip"));

// object
let obj = {
    age: 20,
    amount: 70
}
console.log(obj.age);