// ! IIFE -- Immideately Invoked Function
(function hello(){
    console.log("Hello Jii");
})();


// we can pass function into an another function

// function greet(){
//     console.log("greet");
// }

// function meet(){
//     console.log("meet");
// }

// greet();
// meet();

function greet(callback){
    console.log("greet");
    callback();
}

function meet(){
    console.log("meet");
}

console.log("--====-===-===-===--");
greet(meet);
console.log("--====-===-===-===--");

function a(){
    console.log('Am');
}
function b(callback){
    console.log("I");
    callback()
    console.log("Dipan");
}

b(a);

console.log("--====-===-===-===--");
