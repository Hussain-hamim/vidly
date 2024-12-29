import express from "express";
import Joi from "joi";
import { log } from "./logger.js";
import { authenticating } from "./authenticating.js";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// built in middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // key=value&key=value
app.use(express.static("public"));

// third-party middleware:
app.use(helmet());
app.use(morgan("tiny"));

// custom middleware functions:
app.use(log);
app.use(authenticating);

const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
];

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  // this callback is a route handler fn
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("the course with given id was not found");
  res.send(course);
});

app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.params);
});

app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("the course with given id was not found");

  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("the course with given id was not found");

  const index = courses.indexOf(course);
  courses.splice(index, 1); // delete one course with given index

  res.send(course);
});

// query parameter
app.get("/api/search", (req, res) => {
  res.send(req.query);
});

// process.env.PORT = 6000;

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

function validateCourse(course) {
  const schema = {
    name: Joi.string().required().min(3),
  };

  return Joi.validate(course, schema);
}
