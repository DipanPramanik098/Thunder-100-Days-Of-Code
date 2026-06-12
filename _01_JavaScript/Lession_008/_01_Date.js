const now = new Date();  // it's an object
console.log(now); // +5.30 UTC


console.log(now.toString()); // based on device timer

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getMonth()); // 5 --> but this month is june --> its an inconsistency in js -- 
console.log(now.getMinutes());
console.log(now.getSeconds());

console.log("=================================================================================");
//  
const noww = Date.now();
console.log(noww); //millisecond ke andar result dega ye -- 1st jan 1970 12AM se lekar kitni time gujar chuka hai....

const da = new Date(noww);
console.log(da);


console.log("======================");
                // year, month, day, hours, minutes, seconds, ms 
const myDate = new Date(2026, 8 , 4, 6, 20, 22, 122);
console.log(myDate);

