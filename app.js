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

console.log("before");

// this is an example fn of a async op
// async do not mean that the it is multi threaded

//// this the callback approach:
// getUser(1, (user) => {
//   getRepos(user.username, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     });
//   });

// CALLBACK HELL
// });

// this the promise approach:
getUser(1)
  .then((user) => {
    console.log(user);
    return getRepos(user.username);
  })
  .then((repo) => {
    console.log(repo);
    return getCommits(repo[0]);
  })
  .then((commits) => {
    console.log(commits);
  })
  .catch((error) => console.log(error.message));

console.log("after");

////// there are three pattern to deal with async code:
//1. callback
function getUser(id) {
  return new Promise((resolve, reject) => {
    // kick of some async work
    setTimeout(() => {
      console.log("reading user from db...");
      resolve({ id: id, username: "hussain" });
    }, 2000);
  });
}

function getRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("calling github api...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("calling github api...");
      resolve(["commit"]);
    }, 2000);
  });
}

//2. promises:
///// hold the eventual result of an asynchronous operation
// promise to give the result of an async op
//// promise state: pending, fulfilled, rejected

//3. async/await approach:
//// built on top of promises, its a syntactical sugar of promise
// which let us write async code in sync format 😊
// to catch error use try/catch

const user = await getUser(1);
const repos = await getRepos(user.username);
const commits = await getCommits(repos[0]);
console.log(commits);

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepos(user.username);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (error) {
    console.log("error", error);
  }
}
displayCommits(); //// async/await 👏
