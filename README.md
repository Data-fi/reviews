<------------------------------------------------------------------------------------------------------------------------------------------->
API DOCUMENTATION. PLEASE READ
<------------------------------------------------------------------------------------------------------------------------------------------->

SUPPORTED CRUD OPERATIONS:

GET:

'/listings/:listingId/reviews'

--Fetch all reviews with the same listing ID
--Response will be in the form of a review object with author, post time, body text, and avatar link properties.
(Write out object literal describing response object contents)

POST:

'listings/:listingId/reviews'

--Posts review. Request body must include userId, text, date posted
--Response will confirm that a review was posted.

'/reviews/:reviewId'

--Posts response to a review on a listing. Request body must include userId, body text, time posted
--Response will be in the form of a JSON object.

PATCH:

'/reviews/:reviewId'

--Updates a review using text provided in request body. Can only modify body of review.
--Response will be in the form of a JSON object describing the newly updated record.
DELETE:

'/reviews/:reviewId'

--Will delete a review and all of its replies if it has any.
--Response will be in the form of a JSON object describing the deleted record.

[For patch indicate which keys you are allowed to edit]
