const express = require('express');
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoutes");


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",
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
);


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/CRUD");
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
