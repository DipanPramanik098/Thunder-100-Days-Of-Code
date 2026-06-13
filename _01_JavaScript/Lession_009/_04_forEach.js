const arr = [1,2,3,4,5,6,7,8];

// ! number, index, pura array
arr.forEach((num)=>{
    console.log(num);
})
console.log("====================");
arr.forEach((num,index)=>{
    console.log(num, index);
})
console.log("====================");
arr.forEach((num,index,arr)=>{
    console.log(num, index,arr);
})
console.log("====================");


// Array.prototype.forLoop = function(Callback){
//     for(let i=0;i<arr.length; i++){
//         Callback(arr[i],i,arr);
//     }
   
// }