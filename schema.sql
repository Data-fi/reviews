
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