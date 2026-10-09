
const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
// uuidv4(); // Generate a unique ID

const methodOverride = require('method-override');

// Allows HTML forms to simulate PATCH, PUT and DELETE requests
app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Demo Database
let posts = [
    {
        id: "1a",
        username:"dipan",
        content: "I Love Coding",
    },{
        id: "2b",   
        username:"HelloWorld",
        content: "Sleep Code Repeat",
    }
]


//index route
app.get('/posts', (req, res) => {
    res.render('index', { posts: posts });
});

// Create Post route
    // * ferm
    app.get('/posts/new', (req, res)=>{
        res.render('new');
    })
    // * post
    app.post('/posts', (req,res) => {
        const { username, content } = req.body;
        posts.push({ id: uuidv4(), username, content });
        res.redirect('/posts');
    });

// single post route
app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    const post = posts.find(p => p.id === id);
    if (post) {
        res.render('show', { post: post });
    } else {
        res.status(404).send('Post not found');
    }
});

// Update Post Route

// * form
app.get('/posts/:id/edit',(req,res)=> {
    res.render('edit', { post: posts.find(p => p.id === req.params.id) });
})

app.patch('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { username, content } = req.body;

    // Find the post using its unique ID
    const post = posts.find(p => p.id === id);

    // Return 404 if the post does not exist
    if (!post) {
        return res.status(404).send('Post not found');
    }

    // Update the existing post directly
    post.username = username;
    post.content = content;

    // Redirect to the updated post's detail page
    res.redirect(`/posts/${id}`);
});



 // Delete Post Route
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;

    // Remove the post whose ID matches the URL ID
    posts = posts.filter(p => p.id !== id);

    // Redirect to the updated posts list
    res.redirect('/posts');
});


// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.listen(3000, () => {
    console.log('Server Listening on http://localhost:3000');
});
