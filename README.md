<------------------------------------------------------------------------------------------------------------------------------------------->
API DOCUMENTATION. PLEASE READ
<------------------------------------------------------------------------------------------------------------------------------------------->

SUPPORTED CRUD OPERATIONS:

GET:

'/listings/:listingId/reviews'

--Fetch all reviews with the same listing ID
--Response will be in the form of a JSON object.

POST:

'listings/:listingId/reviews'

--Posts review. Request body must include userId, text, date posted
--Response will be in the form of a JSON object.

'/reviews/:reviewId'

--Posts response to a review on a listing. Request body must include userId, body text, time posted
--Response will be in the form of a JSON object.

PATCH:

'/reviews/:reviewId'

--Updates a review using text provided in request body. Can only modify body of review.
--Response will be in the form of a JSON object.

DELETE:

'/reviews/:reviewId'

--Will delete a review and all of its replies if it has any.
--Response will be in the form of a JSON object.
