const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/register', (req, res) => {
    let { username, password } = req.query;

    console.log(req.query);

    res.send(`GET: ${username} ${password}`);
});

app.post('/register', (req, res) => {
    console.log("POST REQUEST RECEIVED");
    console.log(req.body);

    res.send(`POST: ${req.body.username}`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});