const cassandra = require('cassandra-driver');
const faker = require('faker');
const moment = require('moment');
const Uuid = require('cassandra-driver').types.Uuid;

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'], //loopback internet protocol (localhost);
  localDataCenter: 'datacenter1',
  keyspace: 'datafy'
});

client.connect(() => {
  console.log('connected!');
});

//fetch all reviews for given listing id
const getAllQuery =
  'SELECT author, avatar, posted, body FROM datafy.reviews_by_listing WHERE listingid = 3';
client
  .execute(getAllQuery)
  .then(reviews => {
    console.log('got the reviews by listing');
  })
  .catch(err => {
    console.log(err);
  });
//post a review to the database given listing id

//update the body of a review given review id

const postQuery =
  'INSERT INTO datafy.reviews_by_listing(listingid, posted, reviewid, author, avatar, body) VALUES (?, ?, ?, ?, ?, ?)';

client
  .execute(
    postQuery,
    [
      faker.random.number({ min: 1, max: 100 }),
      moment(faker.date.recent()).format('X'),
      faker.random.number({ min: 100000, max: 1000000000 }),
      faker.name.firstName(),
      faker.image.imageUrl(),
      faker.lorem.sentence()
    ],
    { hints: ['int', 'int', 'varchar', 'varchar', 'timestamp', 'varchar'] }
  )
  .then(record => {
    console.log(record, 'this was the randomized record inserted');
  })
  .catch(err => {
    console.log(err);
  });

const testPost =
  'INSERT INTO datafy.reviews_by_listing(listingid, posted, reviewid, author, avatar, body) VALUES (30, 1573064878, 1111111, ?, ?, ?)'; //post confirmed to work

client
  .execute(
    testPost,
    [faker.name.firstName(), faker.image.imageUrl(), faker.lorem.sentence()],
    { hints: ['varchar', 'varchar', 'varchar'] }
  )
  .then(record => {
    console.log(record, 'this is log of test record insertion');
  })
  .catch(err => {
    console.log(err);
  });

const getTestRecord =
  'SELECT author, avatar, posted, body FROM datafy.reviews_by_listing WHERE listingid = 30 AND posted = 1573064878 AND reviewid = 1111111'; //post confirmed to work
client
  .execute(getTestRecord)
  .then(review => {
    console.log(review, 'this is the test record that was inserted');
  })
  .catch(err => {
    console.log(err);
  });

// const moment = require('moment');
// const faker = require('faker');
// console.log(moment(faker.date.recent()).format('X'));
