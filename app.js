require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const blogRouter = require("./routes/BlogRoutes");

const MONGODB_URI= "mongodb+srv://shilpa:mind%40123@node-crud.9lptvoh.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    console.log(MONGODB_URI, 'AAAAAAAAAAAAAAAAA')
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
const app = express();
//middleware
app.use(express.json());

const port = 3000

app.use("/api/blogs", blogRouter);


connectDB().then(() => {
    app.listen(port, function (){
        console.log(`You app working on http://localhost:${port}/`)
    })
})

module.exports = app;
