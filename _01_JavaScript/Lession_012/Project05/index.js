const textarea = document.querySelector("#comment");
const textCount = document.querySelector("#textCount");
const wordCount = document.querySelector("#wordCount");

textarea.addEventListener('input', () => {
    const text = textarea.value.trim();
    textCount.textContent = text.length;

    wordCount.textContent = text.trim() === ""
        ? 0
        : text.trim().split(/\s+/).length;
})