

CREATE KEYSPACE datafy WITH replication = {'class' : 'SimpleStrategy', 'replication_factor' : 5 };


USE datafy;




CREATE TABLE reviews_by_listing
(
listingId int,
responseId int,
reviewId int,
author text,
avatar text,
posted timestamp,
body text,
PRIMARY KEY (listingId, timestamp DESCENDING, reviewId)
);
