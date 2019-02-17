-- Creates databse
CREATE DATABASE burgers_db;
-- Uses database to populate table
USE burgers_db;
-- Creates table and columns
CREATE TABLE burgers
(
   id INT NOT NULL
   AUTO_INCREMENT,
        burger_name VARCHAR
   (255),
        devoured BOOLEAN DEFAULT FALSE,
        PRIMARY KEY
   (id)
);

   