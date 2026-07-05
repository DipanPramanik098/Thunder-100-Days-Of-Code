const http = require('http');

const server = http.createServer((req, res)=>{

    const path = req.url.split('/');
    // ? path = ['', add, 10, 20]

    const operation = path[1];
    const n1 = Number(path[2]);
    const n2 = Number(path[3]);

    // ! Edge Cases
    if(path.length < 4){
        res.end("Invalid Format Or Field Missing");
    }

    // * Actual Operation
    if(operation == 'add'){
        res.end(JSON.stringify(n1+n2));
    }else if(operation == 'sub'){
        res.end(JSON.stringify(n1-n2));
    }else if(operation == 'mul'){
        res.end(JSON.stringify(n1*n2));
    }else if(operation == 'div'){
        res.end(JSON.stringify(n1/n2));
    }else{
        res.end('Wrong Type Operation');
    }
    // res.end(`Server Listen At Port No 3000`);
});

server.listen(3000, ()=>{
    console.log("hello Node.js");
})