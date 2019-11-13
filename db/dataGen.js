//data generation script for creating CSV data of custom amount
//csv rows: listingId (number), responseId (number), reviewId (number), author (name), avatar (url), posted (timestamp), body (paragraph);
const faker = require("faker");
const fs = require("fs");
const moment = require("moment");
const momentRandom = require("moment-random");

// const writeCassListings = fs.createWriteStream('CassData.csv');
// writeCassListings.write(
//   'listingId,responseId,reviewId,author,avatar,posted,body\n',
//   'utf8'
// );

// function writeOneThousandCassListings(writer, encoding, callback) {
//   let i = 20000000;
//   let id = 1;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const listingId = id;
//       const reviewId = i;
//       const author = faker.name.firstName();
//       const avatar = faker.image.imageUrl();
//       const posted = moment(faker.date.recent()).format('X');
//       const body = 'This is a great place to stay';

//       const data = `${listingId},${posted},${reviewId},${author},${avatar},${body},\n`;
//       if (i % 100000 === 0) {
//         console.log('creating cass record', i);
//       }
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//       if (id === 10000000) {
//         id = 1;
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeOneThousandCassListings(writeCassListings, 'utf-8', () => {
//   writeCassListings.end();
// });

// const writePostgresListings = fs.createWriteStream('PostgresListings.csv');
// writePostgresListings.write('title\n', 'utf8');

// function writeXPostgresListings(writer, encoding, callback) {
//   let i = 10000000;
//   let id = 1;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       // const listingId = i;
//       const title = faker.lorem.sentence();

//       const data = `${title}\n`;
//       console.log(i, data);
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeXPostgresListings(writePostgresListings, 'utf-8', () => {
//   writePostgresListings.end();
// });

// const writePostgresUsers = fs.createWriteStream('PostgresUsers.csv');
// writePostgresUsers.write('name, avatar\n', 'utf8');

// function writeXPostgresUsers(writer, encoding, callback) {
//   let i = 1000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       // const user_id = i;
//       const name = faker.name.firstName();
//       const avatar = faker.image.imageUrl();

//       const data = `${name},${avatar}\n`;
//       console.log(i, data);
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeXPostgresUsers(writePostgresUsers, 'utf-8', () => {
//   writePostgresUsers.end();
// });

// const writePostgresReviews = fs.createWriteStream('PostgresReviews.csv');
// writePostgresReviews.write('user_id, listing_id, posted, body\n', 'utf8');

// function writeXPostgresReviews(writer, encoding, callback) {
//   let i = 20000000;
//   let id = 0;
//   let listing = 1;
//   let user = 1;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       listing += 1;
//       user += 1;
//       // const review_id = i;
//       const user_id = user;
//       const listing_id = listing;
//       const posted = moment(faker.date.recent()).format('X');
//       const body = faker.lorem.paragraph();

//       const data = `${user_id},${listing_id},${posted},${body}\n`;
//       if (i % 100000 === 0) console.log('create review', i);
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//       if (listing === 10000000) listing = 1;
//       if (user === 1000000) user = 1;
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeXPostgresReviews(writePostgresReviews, 'utf-8', () => {
//   writePostgresReviews.end();
// });

// const writePostgresReviews_by_Listing = fs.createWriteStream(
//   'PostgresReviewsByListing.csv'
// );
// writePostgresReviews_by_Listing.write(
//   'user_id, review_id, listing_id\n',
//   'utf8'
// );

// function writeXPostgresReviews_by_Listing(writer, encoding, callback) {
//   let i = 20000000;
//   let id = 0;
//   listing = 1;
//   user = 1;
//   review = 1;
//   function write() {
//     let ok = true;
//     do {
//       // const rel_id = i;
//       const user_id = user;
//       const review_id = review;
//       const listing_id = listing;

//       const data = `${user_id},${review_id},${listing_id}\n`;
//       console.log(i, data);
//       i -= 1;
//       id += 1;
//       review += 1;
//       user += 1;
//       listing += 1;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//       if (listing === 10000000) listing = 1;
//       if (user === 1000000) user = 1;
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeXPostgresReviews_by_Listing(
//   writePostgresReviews_by_Listing,
//   'utf-8',
//   () => {
//     writePostgresReviews_by_Listing.end();
//   }
// );
