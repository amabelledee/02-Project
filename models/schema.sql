DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;
CREATE TABLE IF NOT EXISTS examples (
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




INSERT INTO examples (title, technologies, budget, description,vendor, vendoremail, contact_email, createdAt, updatedAt, venue, venueaddress, eventdate)
VALUES ('Jons Birthday Party', 'DJ with adapter', '400.00', '100 person party 4 hours','Dave Cox', 'dave@test.com', 'jon@bday.com', '2019-02-27:08:00:00', '2019-02-27:08:00:00', 'Wild Goose', '123 W. Coast Hwy', '2019-03-16:16:00:00');

INSERT INTO examples (title, technologies, budget, description, vendor, vendoremail, contact_email, createdAt, updatedAt, venue, venueaddress, eventdate)
VALUES ('Wilco Company Party', 'Live Band', '1200.00', '80 person party 4 hours', 'Kelly Gurman', 'Kelly@dj.com', 'Willy@wilco.com', '2019-02-28:08:00:00', '2019-02-28:08:00:00', 'Endless Dreams', '333 N. Coast Hwy', '2019-03-23:15:00:00');


INSERT INTO examples (title, technologies, budget, description, vendor, vendoremail, contact_email, createdAt, updatedAt, venue, venueaddress, eventdate)
VALUES ('Public Cruise', 'DJ Laptop only', '300.00', '120 person party 4 hours', 'Rick Jons', 'Rick@dj.com', 'none@none.com', '2019-02-28:08:00:00', '2019-02-28:08:00:00', 'Endless Dreams', '333 N. Coast Hwy', '2019-03-04:16:00:00');

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
