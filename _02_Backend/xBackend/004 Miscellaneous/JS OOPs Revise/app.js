//  ! Prototype
// Create an array object
const arr = [10, 20, 30];

// __proto__ gives us the prototype of the arr object.
// For an array, its prototype is Array.prototype.
console.log(arr.__proto__);

// Array.prototype is the actual prototype object
// that contains array methods like push(), pop(), map(), etc.
console.log(Array.prototype);

// Both point to the same prototype object,
// so this returns true.
console.log(arr.__proto__ === Array.prototype); // true


// Example of using a method from Array.prototype
// push() is available to arr through its prototype.
arr.push(40);

console.log(arr); // [10, 20, 30, 40]


// Prototype chain:
//
// arr
//   ↓
// Array.prototype
//   ↓
// Object.prototype
//   ↓
// null
//
// If JavaScript cannot find a property/method inside arr,
// it looks for it in Array.prototype,
// then Object.prototype,
// and finally stops at null.