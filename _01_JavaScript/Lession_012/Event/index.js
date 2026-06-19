// const c1 = document.querySelector('#child1');
// const c2 = document.querySelector('#child2');
// const c3 = document.querySelector('#child3');
// const c4 = document.querySelector('#child4');

// c1.addEventListener('click',()=>{
//     console.log("Child1 Click");
// })

// c2.addEventListener('click',()=>{
//     console.log("Child2 Click");
// })

// c3.addEventListener('click',()=>{
//     console.log("Child3 Click");
// })

// c4.addEventListener('click',()=>{
//     console.log("Child4 Click");
// })

// Todo  -- Instead of this we can directly add event listner for parent
const p = document.querySelector('#parent');
//? e-- event object
p.addEventListener('click', (e) => {
    // console.log("Parent Clicked");
    // console.log(e);
    e.target.textContent = "I am Clicked";
})


// ----------------------===============================--------------------------------------------
const gp = document.getElementById('grandParent');
const pt = document.getElementById('Parent');
const c = document.getElementById('child');

// * Event Bubbling -- false by default (child --> parent -> grandPrent)

// gp.addEventListener('click',()=>{
//     console.log("Grand Parent Clicked");
// })
// pt.addEventListener('click',()=>{
//     console.log("Parent Clicked");
// },false)
// c.addEventListener('click',()=>{
//     console.log("Child Clicked");
// })

// !reverse Order  --- Now( grand Parent ---> parent ---> child);  
// ? Event Capturing
gp.addEventListener('click', () => {
    console.log("Grand Parent Clicked");
}, true)
pt.addEventListener('click', () => {
    console.log("Parent Clicked");
}, true)
c.addEventListener('click', () => {
    console.log("Child Clicked");
}, true)


// 
const btn = document.querySelector('button');
// btn.addEventListener("click",()=>{
//     btn.textContent = "I am Clicked";
//     console.log("Hello");
// })

//  Todo -- remove eventlistner
// btn.removeEventListener('click',()=>{
//     btn.textContent = "I am Clicked";
// })

function handle() {
    btn.textContent = "I am Clicked";
    console.log("Hello");

    // Todo -- remove eventlistner
    btn.removeEventListener('click', handle);  //*  Now the reference is same
}
btn.addEventListener("click", handle)

