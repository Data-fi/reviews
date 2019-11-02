//data generation script for creating CSV data of custom amount
//csv rows: listingId (number), responseId (number), reviewId (number), author (name), avatar (url), posted (timestamp), body (paragraph);
const faker = require('faker');
const fs = require('fs');

const writeListings = fs.createWriteStream('data.csv');
writeListings.write(
  'listingId,responseId,reviewId,author,avatar,posted,body\n',
  'utf8'
);

function writeOneThousandListings(writer, encoding, callback) {
  let i = 1000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const listingId = faker.random.number({
        min: 0,
        max: 100
      });
      const responseId = null;
      const reviewId = id;
      const author = faker.name.firstName();
      const avatar = faker.image.imageUrl();
      const posted = `${faker.date.month()} ${faker.random.number({
        min: 2017,
        max: 2020
      })}`;
      const body = faker.lorem.paragraph();

      const data = `${listingId},${responseId},${reviewId},${author},${avatar},${posted},${body}`;
      console.log(data);
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeOneThousandListings(writeListings, 'utf-8', () => {
  writeListings.end();
});

//unique commentId can be attributed to i;

const writeUsers = fs.createWriteStream('users.csv');
writeUsers.write('id,username,avatar\n', 'utf8');

function writeTenThousandUsers(writer, encoding, callback) {
  let i = 10000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const username = faker.internet.userName();
      const avatar = faker.image.avatar();
      const data = `${id},${username},${avatar}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeTenThousandUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
