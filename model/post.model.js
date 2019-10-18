// // const mySqlModel = require("mysql-model");
// const config = require("../config/mysql-config");
// // var PostModel = mySqlModel.createConnection(config.sqlConfig);
// // var Post = PostModel.extend({ tableName: "Post" });

// // Post.find('all', function(err, rows, result) {
// //     console.log(rows);
// // });

// var mysqlModel = require('mysql-model');
// var mysql = require('mysql');
// // var dbConfig = {
// //   host     : '127.0.0.1',
// //   user     : 'root',
// //   database : 'mysqlmodeltest',
// // };
// var db = mysql.createConnection(config.sqlConfig);
// db.connect();
// function cleanUpDatabase(db, cb) {
// 	db.query('DROP TABLE IF EXISTS movies;', function() {
// 		db.query('CREATE TABLE `movies` ( `name` VARCHAR(100) NOT NULL , `director` VARCHAR(100) NOT NULL , `language` VARCHAR(100) NOT NULL , `year` INT(11) NOT NULL , `id` INT(11) NOT NULL AUTO_INCREMENT , PRIMARY KEY (`id`)) ENGINE = MyISAM;', function() {
// 			cb();
// 		});
// 	});
// }
// beforeAll(done => {
//   cleanUpDatabase(db, () => {
//   	db.end();
//   	done();
//   });
// });
// var MyAppModel = mysqlModel.createConnection(dbConfig);
// var Post = MyAppModel.extend({
// 	tableName: "Post",
// });
// var post = new Post({
// 	name: 'Serenity',
// 	director: 'Joss Whedon',
// 	language: 'English',
// 	year: 2005
// });

// post.save(function (err, result, connection) {
    
// });