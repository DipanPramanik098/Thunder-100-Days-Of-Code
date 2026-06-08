const a = [1,2,3,4,5,6,7];

const b = a;

b[2] = 99; // change both because store by reference

console.log(a);
console.log(b);


// 2D array
let a2d = [[1,2,3],[4,5,6],[7,8,9]];

// num of row  or num of one dimensional array
console.log(a2d.length);

// print all 1d array or all row
for(let i=0; i<a2d.length; i++){
    console.log(a2d[i]);
}
// access single element -- row,col
console.log(a2d[1][0]); //4


// Print 2d array
for(let row = 0; row < a2d.length; row++){
    for(let col = 0; col < a2d[row].length; col++){
        console.log(a2d[row][col]);
    }
}

console.log("-----------------------------------------------------");
// using for of
for(let row of a2d){
    for(let col of row){
        console.log(col);
    }
}

console.log("-----------------------------------------------------");

// 3D array -- array of 2D array
let a3d = [[[1,2,3],[4,5,6],[7,8,9]], [[11,12,13],[14,15,16],[17,18,19]]];
console.log(a3d);

console.log("-----------------------------------------------------");

const aa = [1,2,3];
const ab = [4,5];

console.log(aa.concat(ab));
console.log("-----------------------------------------------------");

const ac = [6,7,8,9];
console.log(aa.concat(ab,ac));

console.log("-----------------------------------------------------");

// * spread Operator (right side of assign)
const demo = [...aa, ...ab, ...ac];
console.log(demo);

console.log("-----------------------------------------------------");

const numm = [10,20,30,40,50];
// destructure
const [ first, second ] = numm;
console.log(first, second);

const [f, s, ...all] = numm; // * REST Operator  (left side of assign)
console.log(f, s, all);

