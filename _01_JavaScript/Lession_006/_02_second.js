
let a = [1, 2, 3, "Dipan", true, "Pramanik"];
console.log(a);

// update value

a[0] = "Hello";
console.log(a);

let num = [10, 20, 30, 40, 50];

//insert end
num.push(11);
console.log(num);
//delete from end
num.pop();
console.log(num);

// insert begin
num.unshift(111);
console.log(num);
//delete from begin
num.shift();
console.log(num);

// TODO -- Address Calculation -- base address + index * size_of_dtype
// ! js number takes 8 bytes.

// * typeof array is actually object
console.log(typeof num);


// TODO -- For Of Loop

for(let n of num){
    console.log(n);
}


console.log("===========================");
let x= [1,2,3,4,5,6,7,8,9,0];

 // ! slice
// console.log(x.slice(1,3)); //[2,3] ---> ending index exclude -- no change in original array -- only return a copy of given index
// console.log(x);


 // * splice
// console.log(x.splice(0,3,"Dipan")); //change the actual array -- replace from index 0 to 3  element with "Dipan"; // also create a new array with index 0 to 3 element [1,2,3]
// console.log(x);



// 
// delete 3
x.splice(2,1);
console.log(x);

// insert 2 element from 2nd index
x.splice(2, 0, 3, 3.5);
console.log(x);

