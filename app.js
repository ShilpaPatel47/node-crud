const express = require('express');
const mongoose = require("mongoose");
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
const port = 3000

app.listen(port, function (){
    console.log(`You app working on http://localhost:${port}/`)
})

module.exports = app;
