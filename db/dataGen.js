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
