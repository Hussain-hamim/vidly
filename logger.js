const url = "http://mylogger.io/log";

function log(message) {
  // send and http request
  console.log(message);
}

module.export.log = log;
module.export.endpoint = url;
