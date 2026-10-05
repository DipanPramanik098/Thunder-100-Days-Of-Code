const express = require('express');

const app = express();

// ! Using EJS
app.set('view engine', 'ejs');


// basic insta pages
app.get('/insta/:username', (req, res) => {
    const followers = ["adam", "bob", "steve", "hakom"];
    let { username } = req.params;
    res.render('insta.ejs', {username, followers});
});



// passing data to ejs file
app.get('/rolldice', (req, res) => {
    let random = Math.floor(Math.random() * 6) + 1;
    res.render('rolldice.ejs', {randomNumber: random});
})

app.get('/',(req, res) => {
    // res.send("This is Home");
    // using ejs
    res.render('home.ejs');
})

app.listen(8080, () => {
    console.log(`app is listening on http://localhost:${8080}`);
})