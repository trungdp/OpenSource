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
    res.render("index");
});

server.listen(process.env.PORT || 8000);