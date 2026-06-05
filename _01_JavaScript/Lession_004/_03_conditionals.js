// 1. CONDITIONALS (if, else if, else)
console.log("=== CONDITIONALS ===");

let age = 18;

if (age < 18) {
    console.log("You are a minor.");
} else if (age === 18) {
    console.log("You just became an adult!");
} else {
    console.log("You are an adult.");
}

// Another conditional example: check even/odd
let number = 7;
if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}

// 2. WHILE LOOP
console.log("\n=== WHILE LOOP ===");

let count = 1;
while (count <= 5) {
    console.log(`While loop iteration: ${count}`);
    count++;
}

// Example: countdown using while
let timer = 3;
console.log("Countdown start:");
while (timer > 0) {
    console.log(timer);
    timer--;
}
console.log("Blast off!");

// 3. FOR LOOP
console.log("\n=== FOR LOOP ===");

// Basic for loop: print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(`For loop iteration: ${i}`);
}