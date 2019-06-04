### Schema

CREATE DATABASE taco_truck_db;
USE taco_truck_db;

CREATE TABLE tacos
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    shell_type varchar(50) NOT NULL,
	main_ingredient varchar(50) NOT NULL,
	cheese varchar(50) NOT NULL,
    toppings varchar(255) NOT NULL
);
