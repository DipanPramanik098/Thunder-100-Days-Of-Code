// console.log("Hello Ji Kaise Ho?");

const ele = document.getElementById('first');
console.log(ele);

function f1() {
    ele.textContent = "Change Using JS"
}
function f2() {
    ele.textContent = "Aapne Double Click Kari Hai"
}
ele.addEventListener('click',()=>{
    f1();
    ele.style.backgroundColor = 'black';
    ele.style.color = 'white';
})
// double click
ele.addEventListener('dblclick',()=>{
    f2();
    ele.style.backgroundColor = 'yellow';
    ele.style.color = 'red';
})