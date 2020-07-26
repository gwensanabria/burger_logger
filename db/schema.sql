DROP database if EXISTS  burger_db;
CREATE database burger_db;

use burger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) not NULL,
    eaten BOOLEAN DEFAULT false
);

--  CREATE TABLE burger_type
--   (
-- 	id int AUTO_INCREMENT PRIMARY KEY ,
-- 	burger_name varchar(255) NOT NULL,
-- 	devoured BOOLEAN DEFAULT false,
-- );