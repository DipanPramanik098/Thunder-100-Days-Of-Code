import express from 'express';

const app = express();
// * Middleware to parse JSON request bodies - You can use express.json() middleware to automatically parse incoming JSON request bodies and make them available in req.body. This is especially useful when working with APIs that send data in JSON format.
app.use(express.json()); // Middleware to parse JSON request bodies 


// No need to use if else like raw node
app.get('/', (req, res) => {
    res.send('Hello, World!');
})
app.post('/data', (req, res) => {
    console.log(req.body);
    res.send('Data received!');
})
app.delete('/data', (req, res) => {
    res.send('Data deleted!');
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})