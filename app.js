import { log } from "./logger.js";
import path from "path";

console.log(log("hello"));
console.log(log(path.parse("./logger.js")));
