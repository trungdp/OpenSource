var path = require("path");
var express = require("express");
var app = express();
var server = require('http').createServer(app);
var mysql = require('./database/db.js');
var Post = require('./models/Post');

//Chỉ ra đường dẫn chứa css, js, images...
app.use(express.static(path.join(__dirname, 'client')));
app.set("view engine", "ejs");
app.set("views", "./views");


//Tạo socket 
app.get("/", function (req, res) {
    var posts = [{
            title: "Man must explore, and this is exploration at its greatest",
            subtitle: "Problems look mighty small from 150 miles up",
            author: "Start Bootstrap"
        },
        {
            title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
            subtitle: "Problems look mighty small from 150 miles up",
            author: "Start Bootstrap"
        },
        {
            title: "Science has not yet mastered prophecy",
            subtitle: "We predict too much for the next year and yet far too little for the next ten.",
            author: "Start Bootstrap"
        },
        {
            title: "Failure is not an option",
            subtitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
            author: "Start Bootstrap"
        }
    ]

    res.render("index", { posts: posts });
});

app.get("/post", function (req, res) {
    var post = {
        title: "Man must explore, and this is exploration at its greatest",
        subtitle: "Problems look mighty small from 150 miles up",
        author: "Start Bootstrap",
        content: "<b>Lorem ipsum dolor</b><br> sit amet consectetur adipisicing elit. Aspernatur rerum provident nisi qui officiis fugiat iusto laboriosam fugit veritatis ipsam, voluptate ex, soluta beatae assumenda consequuntur repudiandae animi ullam voluptates accusamus quod earum. Laboriosam ea voluptatem quam rem, iure amet distinctio praesentium in dicta corporis dignissimos nobis adipisci dolorum. Vitae doloribus voluptatibus error ratione maxime voluptatem beatae saepe consequuntur, ab fuga quisquam minima commodi, eveniet pariatur delectus optio, numquam quos illo obcaecati non hic. Tenetur officia, quos impedit ipsam enim excepturi? Accusantium modi iste ut reiciendis repellat doloribus perspiciatis quas inventore, amet, quisquam necessitatibus. Dignissimos minima temporibus laborum labore pariatur."
    };
    res.render("post/post",{post:post});
});
app.get("/admin", function (req, res) {
    res.render("admin/index");
});
app.get("/contact",(req,res)=>{
    res.render("contact/contact");
})
server.listen(process.env.PORT || 8000);