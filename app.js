import { fileURLToPath } from "url";
import { log } from "./logger.js";
import path from "path";
import os from "os";

console.log(log("hello"));
// console.log(log(path.parse("./logger.js")));

// console.log(fileURLToPath(import.meta.url));

console.log(os.totalmem());
console.log(os.freemem());
