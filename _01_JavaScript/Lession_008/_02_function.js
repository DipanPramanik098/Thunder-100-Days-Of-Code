function greet(){
    console.log("Hello Function");
}

greet();

// 
function add(a,b){ // parameters
    return a+b;
}
console.log(add(1,2)); //argument passing

// 
console.log("-====================================-");
function addN(a,b,c=0){ //c =0 --> default --means if c value is given it will take that otherwise use 0
    console.log(a+b+c);
}

addN(1,2);
addN(1,98,2);

// if user give many numbers -- 1,2,3,4,5,6,7,8,9,10
// use rese operator
function addR(...num){
    let sum = 0;
    for(let n of num){
        sum+=n;
    }
    return sum;
}

console.log(addR(1,2,3,4,5,6,7,8,9,0,0,11));
console.log("-====================================-");

// ? method to create function
const hello = function (){
    console.log("This is a Hello Function");
}
hello();

// 
console.log("-====================================-");


// * Arrow Function-- Modern Way To Create A Function
const addArrow = (a,b) =>{
    return a+b;
}

console.log(addArrow(4,5));
console.log("===-----------------------===");

// Single parameter
const square = n => n*n;
console.log(square(12));

console.log("===-----------------------===");

const user = () => {
    return {
        name: "Dipan",
        age: 21
    }
}
console.log(user);
console.log(user());