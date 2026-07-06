// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end("Hello Coder Army");
// })

// server.listen(3000, ()=>{
//     console.log("Server Listen At Port No 3000");
// })




// format check kar rha hun
// password hai? strong hai
// frontend: Is data ko validate kar leta hun..

// custom code likhu ya already present library ko hi use karlu Internet se lekar


// TODO - Use Validator via npm-->
import validator from "validator";

const email = "dipanpramanik6@gmail.com";
const password = "Dipan@11009";
const comment = "jadkjh sjuhbo i;sdpb sd.knvbu";
const url = "https://www.google.com";

console.log("Is Email Valid? :", validator.isEmail(email));
console.log("Is Password Strong? :", validator.isStrongPassword(password));
console.log("Is URL Valid? :", validator.isURL(url));
console.log("Is Numeric? :", validator.isNumeric("12345"));
console.log("Is Mobile Number Valid? :", validator.isMobilePhone("9876543210", "en-IN"));
console.log("Is Empty? :", validator.isEmpty(""));
console.log("Is Comment Length Valid? :", validator.isLength(comment, { min: 10, max: 200 }));
console.log("Escaped Comment :", validator.escape(comment));
console.log("Trimmed String :", validator.trim("    Hello World    "));