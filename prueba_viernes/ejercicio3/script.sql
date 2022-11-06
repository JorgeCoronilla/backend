#3. Crea una BD en MySQL con una tabla usuarios, como la de los 
#ejercicios anteriores y permite insertar por medio de un procedimiento usuarios en la tabla.
#Ej de llamada al procedimiento:
#CALL registro('davinia@thebridgeschool.es', 'root')
CREATE DATABASE validacion;
USE validacion;
 CREATE TABLE users (
    id INT AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    pass VARCHAR(10) NOT NULL,
    PRIMARY KEY (id)
); 
    
DELIMITER //
CREATE PROCEDURE registro (IN email VARCHAR(50), IN pass VARCHAR(10))
BEGIN
   INSERT INTO users VALUES(NULL, email, pass); 
END;
//
DELIMITER ; 