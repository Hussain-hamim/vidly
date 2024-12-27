console.log(__filename);
console.log(__dirname);
const url = "http://mylogger.io/log";

function log(message) {
  // send and http request
  console.log(message);
}

module.exports = log;
