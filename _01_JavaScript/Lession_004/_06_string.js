let s = "Dipan";
let st = 'Dipan';
let str = `Dipan`;

console.log(s.length);
for( let i=0; i< s.length; i++){
    console.log(s[i]);
}

// character access
console.log(s[1]);

let ss = 'pramanik';

console.log(s + " " +  ss);

let h = 'Dipan Pramanik';
console.log(h.toLocaleLowerCase()); // return new string
console.log(h.toUpperCase()); // return new string

console.log(h);
console.log(h.includes('Dipan'));

console.log(h.indexOf('n'));

console.log(h.slice(2,7)); //pan -- 7th index excluded

console.log(h.slice(2)); // index 2 to end

console.log(h.substring(2,7)); // same like slice but slice work with negative value

console.log(h.slice(-3));
console.log(h.substring(-3)); // not work


console.log(h.replace("Pramanik" ,"Ami"));
console.log(h.replaceAll("Pramanik" ,"Ami")); // replace all Pramanik In a String

let x = '    hello     ';
console.log(x.trim());  // remove extra trailing space


let data = "Amir,Rohit,Anjali,Dipan";
console.log(data.split(',')); // , ke basis pe array mei convert kar dega ye