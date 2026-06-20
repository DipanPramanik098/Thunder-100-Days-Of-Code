const passwordInput = document.querySelector("#password");
const length = document.querySelector("#length");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const number = document.querySelector("#number");
const special = document.querySelector("#special");


const submitBtn = document.querySelector("#submitBtn");

passwordInput.addEventListener("input", () => {
    const data = passwordInput.value;

    const isLengthValid = data.length >= 8;
    const hasUppercase = /[A-Z]/.test(data);
    const hasLowercase = /[a-z]/.test(data);
    const hasNumber = /[0-9]/.test(data);
    const hasSpecial = /[^A-Za-z0-9]/.test(data);

    if (isLengthValid) {
        length.textContent = "✅ Minimum 8 characters";
    }

    if (hasUppercase) {
        uppercase.textContent = "✅ At least 1 uppercase letter";
    }

    if (hasLowercase) {
        lowercase.textContent = "✅ At least 1 lowercase letter";
    }

    if (hasNumber) {
        number.textContent = "✅ At least 1 number";
    }

    if (hasSpecial) {
        special.textContent = "✅ At least 1 special character";
    }

    // Enable button only if all conditions are true
    submitBtn.disabled = !(
        isLengthValid &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSpecial
    );
});