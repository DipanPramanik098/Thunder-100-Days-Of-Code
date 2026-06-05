console.log(Math.abs(-65));

console.log(Math.LN10);
console.log(Math.LOG10E);

console.log(Math.floor(2.3));  // 6oti value ko lega=> 2
console.log(Math.floor(-2.3));
console.log(Math.ceil(2.3));
console.log(Math.ceil(-2.3)); // badi value ko lega => -2


// Important
console.log(Math.random()); // generate a value between 0 to 1 (0 included and 1 excluded)

// make 0 to 9 
console.log(Math.random() * 10);
// decimal nhi chahiye
console.log(Math.floor(Math.random() * 10));
// 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

// 2 to 10
console.log(Math.floor(Math.random() * 10) + 2);

// Math.floor(Math.random() * (max-min+1) + min);

// 2 se 5 tak
// ---- min 2, max 5
console.log(Math.floor(Math.random() * (5-2 + 1)) + 2);  // clock cycle of the system se random function random number generate kar sakta hai


// // otp k liye isko use mat karna hai -- 

// // rapido --- same otp every time ? is it related to our phone number?
// Yes and no - here's how:

// 1. Phone number determines WHICH OTP you receive
// The OTP is sent to your specific phone number

// Different phone numbers receive different OTPs

// Rapido's server links the OTP to your phone number in their database

// 2. But OTP value itself is RANDOM
// Not mathematically derived from your phone number

// Generated using random algorithms

// No pattern based on your phone number digits

//  agar mobile switch off ho jaye to?
//  ==Aapko OTP nahi milega jab tak phone ON nahi hota. But OTP ki validity expire ho sakti hai.

// Assignment -- 0000 to 9999
// This ensures 4 digits (0000 to 9999)
let randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');    //padStart() is a JavaScript method that adds characters to the beginning of a string until it reaches a certain length.
console.log(randomNum); // Example: "3847", "0923", "0042", "0005"