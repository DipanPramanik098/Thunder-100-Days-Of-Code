const http = require('http');

// ! Temporary Database
const Database = [
    {name: "John", age: 25, email: "john@example.com"},
    {name: "Jane", age: 30, email: "jane@example.com"},
    {name: "Bob", age: 35, email: "bob@example.com"},
    {name: "Alice", age: 28, email: "alice@example.com"}
]

const server = http.createServer((req,res) => {
    // * get , post, patch, delete

    if(req.method === "GET" & req.url === "/") {
        // res.end(JSON.stringify(Database)); // ? JSON.stringify() -> ye function object ko string me convert karta hai
        // ! agar object chahiye to JSON.parse() ka use karenge

        res.end(JSON.stringify(Database, null, 2)); // ? null -> ye parameter kaam nahi karega, 2 -> ye parameter indentation ke liye hai
    }
    else if(req.method === "POST" & req.url === "/") {
        // ? Data Kaise store karenge
        // const data = req.body;  // ! yah kaam nahi karega kyuki req.body sirf express me hota
        let data = "";
        // * on -> event listener hai jo ki data ko stream karta hai
        req.on("data", (chunk) => {
            data += chunk;
        })
        // * end -> event listener hai jo ki data ko stream karne ke baad call hota hai matalb saare data ko stream karne ke baad call hota hai
        req.on("end", () => {
            const user = JSON.parse(data);
            console.log(user);
            Database.push(user);
            res.end("User Data has been created"); 
        })
    }
    else if(req.method === "PATCH" & req.url === "/") {
        let data = "";
        req.on("data", (chunk) => {
            data += chunk;
        })
        req.on("end",()=>{
           const user = JSON.parse(data);
           const findUser = Database.find((u) => u.email === user.email);
           if(findUser) {
                // findUser.name = user.name || findUser.name;
                // findUser.age = user.age || findUser.age;
                // Object.assign(findUser, user); // ? Object.assign() -> ye function object ko merge karta hai

                // Method 3 ->  
                for( const {key,value} of Object.entries(user)) {
                    findUser[key] = value;
                }
                res.end("User Data has been updated");
           }else {
                res.end("User not found");
           } 
        })
        res.end("User Data has been updated");
    }
    else if(req.method === "DELETE" & req.url === "/") {
        res.end("User Data has been deleted");
    }else {
        res.end("Invalid Request");
    }
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
}) 