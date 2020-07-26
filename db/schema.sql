DROP database if EXISTS  burger_db;
CREATE database burger_db;

use burger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) not NULL,
    eaten BOOLEAN DEFAULT false
);