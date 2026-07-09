const http = require('http');
const url = require('url');

const Database = [
    { name: "Dipan", age: 10, email: "pdipan@gmail.com" },
    { name: "Mohit", age: 20, email: "messi@gmail.com" }
]


function createUser(user) {
    Database.push(user);
}

// user = {email: "neymar@gmail.com"}

function DeleteUser(user) {
    // user.email
    for (let i = 0; i < Database.length; i++) {
        if (Database[i].email == user.email) {
            Database.splice(i, 1);
            break;
        }
    }

}


// user = {email:"neymar@gmail.com", age:11}
// * Patch update means we will update only the given fields in the user object. 
// * Put update means we will update the whole user object.
// function patchUpdate(user){
//     for(let i=0;i<Database.length;i++){
//         if(Database[i].email == user.email){

//         }
//     }
// }


const server = http.createServer((req, res) => {

    console.log("Request is coming");
    console.log(req.url);
    const parsed = url.parse(req.url, true);
    console.log(parsed);
    const operation = parsed.pathname.slice(1);
    console.log(operation);
    console.log("-----");

    // * localhost:3000/deleteUser?email=neymar@gmail.com
    if (operation == "deleteUser") {
        DeleteUser(parsed.query);
        res.end("I have delete the user");
        return;
    }

    // * localhost:3000/createUser?name=Alice&age=28&email=alice@example.com
    else if (operation == "createUser") {
        createUser(parsed.query);
        res.end("User is created");
        return;
    }

    // * localhost:3000/getUser
    else if (operation == "getUser") {
        res.end(JSON.stringify(Database));
        return;
    }

    res.end("I am available");
})

server.listen(3000, () => {
    console.log("Server is listening at port 3000");
})