DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;
USE exampledb;
CREATE TABLE IF NOT EXISTS request (
 id int(11) NOT NULL AUTO_INCREMENT,
 title varchar(250) DEFAULT NULL,
 technologies varchar(250) DEFAULT NULL,
 budget varchar(150) DEFAULT NULL,
 description text,
 vendor varchar(250) DEFAULT NULL,
 vendoremail text,
 contact_email varchar(150) DEFAULT NULL,
 createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 venue text,
 venueaddress varchar(250) DEFAULT NULL,
<<<<<<< HEAD
 eventdate datetime DEFAULT NULL,
 eventtime text,
=======
 eventDate varchar(100) DEFAULT NULL,
eventTime varchar(100) DEFAULT NULL,
>>>>>>> 31715d9c5f39257e78b34e38286c804eb3f5609e
 PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
