//mysql connection dependencies
var mysql = require('mysql');

//actual connection variable
var connection;

//connection on localhost
connection = mysql.createConnection({
    port: 3000,
    host: 'localhost',
    user: 'root',
    password: 'D@zy2012',
    database: 'burgers_db'
})

connection.connect(function(err){
    if (err) {
        //message if there is an error connecting with MySQL
        console.error('Error: Connection issue with --' + err.stack + '\n\n');
    }
    console.log('Connection to db')
});

//Connection for ORM
module.exports = connection;