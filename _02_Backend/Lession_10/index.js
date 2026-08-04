import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Customer from "./buildSchema.js";
import Users from "./data.js"

const app = express();
await mongoose.connect(process.env.URI);

app.use(express.json());

// create a customer
app.post("/customer", async (req, res) => {

    const customer = await Customer.create(req.body);
    res.json({
        message: "User is created Successfully",
        customer: customer
    });
})

// create customer in bulk
app.post("/customer/bulk", async (req, res) => {

    const customer = await Customer.insertMany(Users);
    res.json({
        message: "User is created Successfully",
        customer: customer
    });
})


// get information of all the customer
app.get("/customer", async (req, res) => {

    const customer = await Customer.find();
    res.json({
        message: "All user information is here",
        customer: customer
    });
})

app.get("/customer/filter", async (req, res) => {

    //   const {city,accountType}   = req.query;
    // req.query = {city: "Banglore", accountType: "current"}

    const customer = await Customer.find(req.query);

    res.json(customer);

})

// fetch particular customer information on the basis of its accountNumber

app.get("/customer/:accountNumber", async (req, res) => {

    const accountValue = req.params.accountNumber;
    const customer = await Customer.findOne({ accountNumber: accountValue });

    if (!customer) {
        res.json({
            message: "Customer Doesnt exist",
        });
    }
    else {
        res.json({
            message: "Customer information",
            customer: customer
        });
    }


})


// delete user on the basis of their account Number
app.delete("/customer/:accountNumber", async (req, res) => {

    const accountValue = req.params.accountNumber;
    const customer = await Customer.findOneAndDelete({ accountNumber: accountValue });

    if (!customer) {
        res.json({
            message: "Customer Doesnt exist",
        });
    }
    else {
        res.json({
            message: "Customer Deleted",
            customer: customer
        });
    }

})


//  Update City Of USER
app.patch("/customer/:accountNumber", async (req, res) => {
    const { city } = req.body;

    const customer = await Customer.findOneAndUpdate( 
        // * filter, update, options 
        { accountNumber: req.params.accountNumber }, 
        { city: city }, 
        { new: true }
    );
    return res.json({
        message: "Customer City Updated",
        customer: customer
    });
})


// ! amount Deposite
app.patch("/customer/deposite/:accountNumber", async (req, res) => {
    const { amount } = req.body;
    const customer = await Customer.findOne({ accountNumber: req.params.accountNumber });

    if (!customer) {
        return res.json({
            message: "Customer Doesnt exist",
        });
    }
    customer.balance += amount;
    await customer.save(); // save the updated customer document to the database
    return res.json({
        message: "Customer Balance Updated",
        customer: customer
    });
})

// Withdraw Amount
app.patch("/customer/withdraw/:accountNumber", async (req, res) => {
    const User = Customer.findOne(
        {accountNumber: req.params.accountNumber}
    )
    const { amount } = req.body;
    if(!User){
        return res.json({
            message: "Customer Doesnt exist",
        });
    }
    if(User.balance < amount){
        return res.json({
            message: "Insufficient Balance",
        });
    }
    User.balance -= amount;
    await User.save(); // save the updated customer document to the database
    return res.json({
        message: "Customer Balance Updated",
        customer: User
    });
})
app.listen(3000, () => {
    console.log("Server start at port 3000");
})