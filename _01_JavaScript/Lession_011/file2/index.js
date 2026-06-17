// ? Create
const h1 = document.createElement('h1');
h1.textContent = "Created By JS";
console.log(h1);

//add under body
// document.querySelector('body').append(h1);

// * after the hello coder army -- > 
document.querySelector('#first').after(h1);

// 
const ele2 = document.createElement('h3');
ele2.textContent = "Learnig CRUD Operation";
ele2.id = 'newId';
// ele2.className = 'classN';
ele2.classList.add = 'classN';

console.log(ele2);

// aage add karte hai
document.querySelector('#first').before(ele2);
// 

// ! get and setAttribute
ele2.getAttribute('class');
ele2.setAttribute('Dipan','Pramanik');


// 

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent = "Web Dev";
const li2 = document.createElement('li');
li2.textContent = "Security";
const li3 = document.createElement('li');
li3.textContent = "System Design";
const li4 = document.createElement('li');
li4.textContent = "DevOps";


ul.append(li1);
ul.append(li2);
ul.append(li3);
ul.append(li4);
// * prepend mei sabse aage attach ho jata hai.

document.querySelector('body').append(ul);


const p = document.createElement('p');
p.textContent = "-----------------------------------------------------------------------------------------------";
document.querySelector('body').append(p);

// 
const ul2 = document.createElement('ul');
const foods = ["Milk", "Soya", "Chicken", "Egg", "Samosa", "Jalebi"];

const arr = [];

for(const food of foods){
    const li = document.createElement('li');
    li.textContent = food;
    arr.push(li);
}
// thid is done because of avoiding multiple Time DOM Manupulation--->
ul2.append(...arr);
document.querySelector('body').append(ul2);
