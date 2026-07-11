import express from "express";
import { products } from "./data.js";

const app = express();

// 
app.use(express.json()); // Middleware to parse JSON request body

// ! Query Params -> /products?category=mobile&brand=Apple
app.get("/products", (req, res) => {
    console.log(req.query);
    const { category, brand } = req.query;
    let filteredProducts = products;
    if (category) {
        filteredProducts = filteredProducts.filter((p) => p.category === category);
    }
    if (brand) {
        filteredProducts = filteredProducts.filter((p) => p.brand === brand);
    }
    res.json(filteredProducts);
})

// ! Update a product by ID
app.patch("/product", (req, res) => {
    const data = req.body;

    const fetchProduct = products.find((p) => p.id == data.id);

    if (fetchProduct) {
        Object.assign(fetchProduct, data);
        res.send("Product is updated successfully");
    }
    else {
        res.send("Product doesn't exist");
    }
})

// * Get a specific product by ID -> params -> 
app.get("/products/:id", (req, res) => {
    console.log(req.params);
    // const { id } = req.params;
    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send("Product not found");
    }
})

// ! Post a new product
app.post("/", (req, res) => {
    console.log(req.body);
    const data = req.body;
    products.push(data);
    res.status(201).json({
        message: "Product added successfully",
        product: data
    });
})

// ! Delete a product by ID
app.delete("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
        const deletedProduct = products.splice(index, 1);
        res.json({
            message: "Product deleted successfully",
            product: deletedProduct[0]
        });
    } else {
        res.status(404).json({
            message: "Product not found"
        });
    }
});

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/products", (req, res) => {
    res.json(products);
})



app.listen(3000, () => {
    console.log("Server Listening at Port No 3000");
})