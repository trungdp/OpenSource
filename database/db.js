var mysql = require('mysql');
const config = require("../config/mysql-config");

var con = mysql.createConnection(config.sqlConfig);

module.exports = {
    connect: function(callback){
        con.connect(function (err) {
            if (err)  throw err;
            console.log("Connected!");
            callback();
        })
    },
    single: function(id,callback){
        con.query("Call Post_Single("+id+")", function (err, result, fields) {
            if (err) throw err;
            return callback(result[0]);
          });
    }  
}