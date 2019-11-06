//get all reviews for a given listing

const getAllFromListing =
  'select * from reviews where review_id in(select review_id from reviews_by_listing where listing_id=682);';

//post a review to the database

const postReview = 'insert into listings(title) values('test')';
