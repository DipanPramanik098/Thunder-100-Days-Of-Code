let count = 0;

const span = document.querySelector("span");
const incrementBtn = document.querySelector(".in");
const decrementBtn = document.querySelector(".de");

incrementBtn.addEventListener("click", () => {
    count++;
    span.textContent = count;
});

decrementBtn.addEventListener("click", () => {
    if(count <= 0) return;
    count--;
    span.textContent = count;
});