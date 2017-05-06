//This needs to connect to mySql 
var connection = require('./connection.js');

//ORM object
var orm = {
    //Function Select all
    selectAll: function(tableInput, cb) {
        //make sure to create a decent query string
        var queryString = "SELECT * FROM" + tableInput+ ",";
        //db query
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            //alledged callback
            cb(result);
     });
    },

//InsertOne function
InsertOne: function(table, cols, vals, cb){
    //Another queryString--special note, DO NOT CAPITIALIZE TABLE
    var queryString = "INSERT INTO" + table;

    queryString += " (";
    //columns to string
    queryString += cols.toString();
    queryString +=") ";

    console.log(queryString);
        
        //db query
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            //alledged callback
            cb(result);
    });
    },

//Update
Update: function(table, objColVals, condition, cb){
    //QueryString again, some changes based off of stack overflow
    var queryString = "UPDATE" + table;
        queryString += " SET ";
        queryString += objToSQL(objColVAls);
        queryString += " WHERE ";
        queryString += condition;

        console.log("update" + queryString);
        //db query
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            //alledged callback
            cb(result);
        });
    }
};

//Export orm
module.exports = orm;