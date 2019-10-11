var path = require("path");
var express = require("express");
var app = express();
var server = require('http').createServer(app);

//Chỉ ra đường dẫn chứa css, js, images...
app.use(express.static(path.join(__dirname, 'client')));
app.set("view engine", "ejs");
app.set("views", "./views");


//Tạo socket 
app.get("/", function(req, res) {
    var posts = [{title:"Man must explore, and this is exploration at its greatest",
                 subtitle:"Problems look mighty small from 150 miles up",
                 author:"Start Bootstrap"},
                 {title:"I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
                 subtitle:"Problems look mighty small from 150 miles up",
                 author:"Start Bootstrap"},
                 {title:"Science has not yet mastered prophecy",
                 subtitle:"We predict too much for the next year and yet far too little for the next ten.",
                 author:"Start Bootstrap"},
                 {title:"Failure is not an option",
                 subtitle:"Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
                 author:"Start Bootstrap"}]
    res.render("index",{posts:posts});
});

server.listen(process.env.PORT || 8000);