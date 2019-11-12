

DROP TABLE IF EXISTS reviews_by_listing;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS listings;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
name VARCHAR (255) NOT NULL,
avatar VARCHAR (255) NOT NULL
);

CREATE TABLE listings (
listing_id SERIAL PRIMARY KEY,
title VARCHAR (255)
);

CREATE TABLE reviews (
review_id SERIAL PRIMARY KEY,
user_id INT,
listing_id INT,
posted INT,
body VARCHAR (2000),
response_id INTEGER DEFAULT NULL
);



CREATE TABLE reviews_by_listing (
id SERIAL PRIMARY KEY,
user_id INT,
review_id INT,
listing_id INT
);



COPY users(name, avatar) FROM '/Users/Nick/Repos/HackReactor/SDC/reviews/PostgresUsers.csv' DELIMITER ',' CSV HEADER;
COPY listings(title) FROM '/Users/Nick/Repos/HackReactor/SDC/reviews/PostgresListings.csv' DELIMITER ',' CSV HEADER; 
COPY reviews(user_id, listing_id, posted, body) FROM '/Users/Nick/Repos/HackReactor/SDC/reviews/PostgresReviews.csv' DELIMITER ',' CSV HEADER; 
COPY reviews_by_listing(user_id, review_id, listing_id) FROM '/Users/Nick/Repos/HackReactor/SDC/reviews/PostgresReviewsByListing.csv' DELIMITER ',' CSV HEADER; 