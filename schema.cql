DROP KEYSPACE datafy;

CREATE KEYSPACE datafy WITH replication = {'class' : 'SimpleStrategy', 'replication_factor' : 1 }; 


USE datafy;




CREATE TABLE reviews_by_listing
(
listingId int,
posted int,
reviewId int,
author text,
avatar text,
body text,
responseId int,
PRIMARY KEY (listingId, posted, reviewId)
) WITH CLUSTERING ORDER BY (posted DESC, reviewId ASC);
