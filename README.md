<------------------------------------------------------------------------------------------------------------------------------------------->
API DOCUMENTATION. PLEASE READ
<------------------------------------------------------------------------------------------------------------------------------------------->

SUPPORTED CRUD OPERATIONS:

GET:

'/listings/:listingId/reviews'

--Fetch all reviews with the same listing ID
--Response will be in the form of a review object with author, post time, body text, and avatar link properties.
(Write out object literal describing response object contents)

Response structure:
[
{
"listingId": xxxx,
"responseId" : xxxx,
"reviewId" : xxxx,
"author" : "xxxx",
"avatar" : "url",
"posted" : "month year",
"body" : "xxx"
},
...
]

POST:

'listings/:listingId/reviews'

--Posts review. Request body must include userId, text, date posted
--Response will confirm that a review was posted.

'/reviews/:reviewId'

--Posts response to a review on a listing. Request body must include userId, body text, time posted
--Response will confirm that response to review was posted.
PATCH:

'/reviews/:reviewId'

--Updates a review using text provided in request body. Can only modify body of review.
--Response will contain updated record.

Response structure:
[
{
"listingId": xxxx,
"responseId" : xxxx,
"reviewId" : xxxx,
"author" : "xxxx",
"avatar" : "url",
"posted" : "month year",
"body" : "xxx" --will contain new value
},
...
]

DELETE:

'/reviews/:reviewId'

--Will delete a review and all of its replies if it has any.
--Response will include record which was deleted

Response structure:
[
{
"listingId": xxxx,
"responseId" : xxxx,
"reviewId" : xxxx,
"author" : "xxxx",
"avatar" : "url",
"posted" : "month year",
"body" : "xxx"
},
...
]

[For patch indicate which keys you are allowed to edit]
