require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoutes");

const MONGODB_URI= "mongodb+srv://shilpa:mind%40123@node-crud.9lptvoh.mongodb.net/?retryWrites=true&w=majority"

/*mongoose.connect(
    process.env.MONGODB_URI || URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);*/


const connectDB = async () => {
    console.log(process.env.MONGODB_URI, 'AAAAAAAAAAAAAAAAA')
    try {
        const conn = await mongoose.connect(MONGODB_URI || "mongodb://localhost/CRUD");
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
