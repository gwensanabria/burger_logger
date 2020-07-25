CREATE database burger_db;

use burger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) not NULL,
    eat BOOLEAN DEFAULT false,
)