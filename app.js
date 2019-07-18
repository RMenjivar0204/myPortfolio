var express = require("express");
var app = express();

// ROUTES
var indexRoutes = require("./routes/index");


app.set("view engine", "ejs");

app.use("/", indexRoutes);


app.listen(3000, function(){
    console.log("Now Running Portfolio on 3000");
});