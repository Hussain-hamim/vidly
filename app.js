import { fileURLToPath } from "url";
import path from "path";
import os from "os";
import fs from "fs";
import EventEmitter from "events";

// log("hello");
// console.log(log(path.parse("./logger.js")));

// console.log(fileURLToPath(import.meta.url));

// console.log(os.totalmem());
// console.log(os.freemem());

// const files = fs.readdirSync("./");
// console.log(files);

// fs.readdir("./", function (err, files) {
//   if (err) console.log(err);
//   else console.log(files);
// });

// import { Logger } from "./logger.js";
// const logger = new Logger();

// // register a listener
// logger.on("messageLogged", ({ id, url }) => {
//   console.log("listener logged", url);
// });

// logger.log("message");

// this is the old way:
// import http from "http";

// const server = http.createServer((req, res) => {
//   // this the root route
//   if (req.url === "/") {
//     res.write("hello world");
//     res.end();
//   }

//   // we can have more routes
//   if (req.url === "/api/courses") {
//     res.write(JSON.stringify([1, 2, 3]));
//     res.end();
//   }
// });

// this is old way of doing it
// // register to event
// server.on("connection", (socket) => {
//   console.log("new connection...");
// });

// raise event
// server.listen(3000);

// console.log("listing on port 3000...");

//this is the expressjs way:
