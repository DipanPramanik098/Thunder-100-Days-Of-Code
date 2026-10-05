const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const instaData = require('./data.json');

app.set('view engine', 'ejs');

app.get('/insta/:username', (req, res) => {
    // const followers = ["adam", "bob", "steve", "hakom"];
    let { username } = req.params;
    const user = instaData[username];
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.render('insta.ejs', { username, user });
    // res.send(user);
})

app.get('/', (req, res) => {
    res.send({
        name: "Dipan Pramanik",
        learning: "EJS"
    });
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});