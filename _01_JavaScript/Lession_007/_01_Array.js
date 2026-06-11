const names = ["Dipan", "Pramanik", "Rajat", "hakom", "Ajit"];

console.log(names);

// sort ==
console.log(names.sort());  //based on ascii val

// reverse
console.log(names.reverse());

// -------------------------------------------------

const nums = [10, 20, 7, 101, 23, 78, 4];
console.log(nums.sort());  //consider numbers as a String 

// sort numbers --
nums.sort((a,b) => a-b);
console.log(nums); // now its sort based on integers

// descending Order
console.log(nums.sort((a,b) => b-a));