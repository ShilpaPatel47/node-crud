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
const app = express();
//middleware
app.use(express.json());

const port = 3000

app.use("/api/blogs", blogRouter);
app.listen(port, function (){
    console.log(`You app working on http://localhost:${port}/`)
})

module.exports = app;
