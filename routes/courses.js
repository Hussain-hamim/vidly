import express from "express";
const router = express.Router();
import Joi from "joi";

const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
];

router.get("/", (req, res) => {
  res.send(courses);
});

router.post("/", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("the course with given id was not found");

  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("the course with given id was not found");

  const index = courses.indexOf(course);
  courses.splice(index, 1); // delete one course with given index

  res.send(course);
});

router.get("/:id", (req, res) => {
  // this callback is a route handler fn
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("the course with given id was not found");
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().required().min(3),
  };

  return Joi.validate(course, schema);
}

export default router;
