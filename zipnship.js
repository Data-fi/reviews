var fs = require("fs");
var zlib = require("zlib");
var gzip = zlib.createGzip();
var Readable = require("stream").Readable;
// compressing song csv
fs.createReadStream("CassData.csv")
  .pipe(gzip)
  .pipe(fs.createWriteStream("CassData.csv.gz"));
