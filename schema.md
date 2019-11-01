<------------------------------------------------------------------------------>
Cassandra Schema:
<------------------------------------------------------------------------------>

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

///////////////////////////////////////
Justification: I am choosing to use the Cassandra distributed database management system because of the customization it affords me toward data consistency and the benefits that provides concerning write and read speed. My database ideally will focus less on consistency within data centers, and more with writing as quickly as possible. In order to boost my read speed, I plan on using denormalized custom indexes to map the comments that have been made on a given listing.

My schema has been designed with the 'read all comments for a given listing' query at the forefront of my mind. The comments_by_listing table has been partitioned by listingId and sorted via timestamp in descending order so that my query delivers the most recent reviews first.
///////////////////////////////////////

<------------------------------------------------------------------------------>
PostgreSQL Schema:
<------------------------------------------------------------------------------>

CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
name VARCHAR (255) NOT NULL,
avatar VARCHAR (255) NOT NULL
)

CREATE TABLE reviews (
review_id SERIAL PRIMARY KEY,
response_id INTEGER,
user_id INT references users(user_id),
posted TIMESTAMP,
body VARCHAR (2000)
)
//I will need to update the response via patch when a response is posted

CREATE TABLE listings (
listing_id SERIAL PRIMARY KEY,
title VARCHAR (255)
)

CREATE TABLE reviews_by_listing (
id SERIAL PRIMARY KEY,
user_id INT references users(user_id),
review_id INT references reviews(review_id),
listing_id INT references listings(listing_id)
)
