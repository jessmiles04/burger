--Used to create burgers_db--
CREATE DATABASE burgers_db;
USE burgers_db;

--Table for burger info --
CREATE TABLE burgers_db(
        id int NOT NULL AUTO_INCREMENT,
        burger_name varchar(255) NOT NULL,
        devoured BOOLEAN DEFAULT false,
        ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY(id)
);