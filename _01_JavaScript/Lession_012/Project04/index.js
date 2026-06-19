const form = document.querySelector("form");
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const operation = document.querySelector("#operation");
const span = document.querySelector("span");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const n1 = Number(first.value);
    const n2 = Number(second.value);

    let result;

    switch(operation.value){
        case "+":
            result = n1 + n2;
            break;

        case "-":
            result = n1 - n2;
            break;

        case "*":
            result = n1 * n2;
            break;

        case "/":
            result = n2 !== 0 ? n1 / n2 : "Cannot divide by 0";
            break;

        case "%":
            result = n1 % n2;
            break;
    }

    span.textContent = result;
});