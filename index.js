import express from "express";
import { log } from "./middleware/logger.js";
import helmet from "helmet";
import morgan from "morgan";
import config from "config";
import courses from "./routes/courses.js";
import home from "./routes/home.js";

import debug from "debug";

const appDebugger = debug("app:startup");
const dbDebugger = debug("app:db");

const app = express();

// set the view engine for our app:
// so we can send html to our client
app.set("view engine", "pug");
app.set("views", "./views");

// database
dbDebugger("database debugger...");

// console.log("node_env: ", process.env.NODE_ENV);
console.log("env: ", app.get("env"));

//// configuration:
console.log("app name: ", config.get("name"));
console.log("mail server: ", config.get("mail.host"));
// console.log("mail password: ", config.get("mail.password"));

// built in middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // key=value&key=value
app.use(express.static("public"));
//for any route route started with this, use this router 'courses'
app.use("/api/courses", courses);
app.use("/", home);

// third-party middleware:
app.use(helmet());
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  appDebugger("morgan enabled...");
}

// custom middleware functions:
app.use(log);

// process.env.PORT = 6000; // export PORT=5000 ===> in terminal
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
