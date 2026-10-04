const express = require('express');
const app = express();
const port = 3000;

// routing
app.get('/apple', (req, res) => {
    res.send({
        name: 'apple',
        color: 'red',
        price: 1000
    })
})

app.get('/id/:name', (req, res) => {
    const { name } = req.params;
    res.send({
        name: name
    });
});

// query string

app.get("/search", (req, res) => {
    let { name, age } = req.query;

    if (!name) {
        return res.send("No search query");
    }

    res.send(`Name: ${name}, Age: ${age}`);
});


// post
// patch
// delete



// app.use('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('*', (req, res) => {
//     res.send('404 Not Found');
// });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})