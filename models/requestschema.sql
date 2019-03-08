
use exampledb;
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
 eventDate varchar(100) DEFAULT NULL,
 eventTime varchar(100) DEFAULT NULL,
 PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
