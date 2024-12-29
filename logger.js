// import EventEmitter from "events";

// // console.log(__filename);
// // console.log(__dirname);

// const url = "http://mylogger.io/log";

// export class Logger extends EventEmitter {
//   log(message) {
//     // send and http request
//     console.log(message);

//     // raise an event
//     this.emit("messageLogged", { id: 1, url: "http://" }); // emit: making a noise, produce - signalling
//   }
// }

export function log(req, res, next) {
  console.log("Logging...");
  next();
}
