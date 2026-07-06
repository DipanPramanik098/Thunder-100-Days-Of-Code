// ==========================================
// first.js
// Semantic Versioning (SemVer) Example
// ==========================================

// Version Format:
// MAJOR.MINOR.PATCH
// Example: 1.0.0

// ------------------------------------------
// v1.0.0 (Initial Release)
// Features: add(), sub()
// ------------------------------------------

function add(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1 - n2;
}

console.log("===== Version 1.0.0 =====");
console.log(add(10, 20)); // 30
console.log(sub(20, 5));  // 15

// ------------------------------------------
// v1.0.1 (Patch Update)
// Bug Fix: Input validation added
// No new features
// ------------------------------------------

function addPatch(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        return "Invalid Input";
    }
    return n1 + n2;
}

console.log("\n===== Version 1.0.1 (Patch) =====");
console.log(addPatch(10, 20));      // 30
console.log(addPatch("10", 20));    // Invalid Input

// ------------------------------------------
// v1.1.0 (Minor Update)
// New Feature: multiply()
// Old functions still work
// ------------------------------------------

function multiply(n1, n2) {
    return n1 * n2;
}

console.log("\n===== Version 1.1.0 (Minor) =====");
console.log(addPatch(5, 5));     // 10
console.log(sub(10, 3));         // 7
console.log(multiply(4, 5));     // 20

// ------------------------------------------
// v2.0.0 (Major Update)
// Breaking Changes
// add()  -> sum()
// sub()  -> difference()
// New Feature: divide()
// Old code using add()/sub() must be changed
// ------------------------------------------

function sum(n1, n2) {
    return n1 + n2;
}

function difference(n1, n2) {
    return n1 - n2;
}

function divide(n1, n2) {
    if (n2 === 0) {
        return "Cannot divide by zero";
    }
    return n1 / n2;
}

console.log("\n===== Version 2.0.0 (Major) =====");
console.log(sum(20, 30));           // 50
console.log(difference(30, 10));    // 20
console.log(multiply(6, 7));        // 42
console.log(divide(20, 4));         // 5

// Export latest version of the package
module.exports = {
    sum,
    difference,
    multiply,
    divide
};