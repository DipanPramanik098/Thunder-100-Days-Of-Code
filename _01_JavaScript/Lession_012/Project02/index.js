// function changeColor(color) {
//     document.body.style.backgroundColor = color;
// }

// document.getElementById("red").addEventListener("click", () => {
//     changeColor("red");
// });

// document.getElementById("green").addEventListener("click", () => {
//     changeColor("green");
// });

// document.getElementById("blue").addEventListener("click", () => {
//     changeColor("blue");
// });

// document.getElementById("yellow").addEventListener("click", () => {
//     changeColor("yellow");
// });

// document.getElementById("purple").addEventListener("click", () => {
//     changeColor("purple");
// });

// document.getElementById("black").addEventListener("click", () => {
//     changeColor("black");
// });

// 

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

["red", "green", "blue", "yellow", "purple", "black"].forEach(color => {
    document.getElementById(color).addEventListener("click", () => {
        changeColor(color);
    });
});