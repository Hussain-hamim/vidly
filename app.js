import { fileURLToPath } from "url";
import { log } from "./logger.js";
import path from "path";
import os from "os";
import fs from "fs";
import EventEmitter from "events";

console.log(log("hello"));
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

const emitter = new EventEmitter();

// register a listener
emitter.on("messageLogged", ({ id, url }) => {
  console.log("listener logged", url);
});

// raise an event
emitter.emit("messageLogged", { id: 1, url: "http://" }); // emit: making a noise, produce - signalling

emitter.on("logging", ({ data }) => {
  console.log(data);
});

emitter.emit("logging", { data: "message" });
