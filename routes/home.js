import express from "express";
const router = express.Router();

// this below show a h1 tag in the body with pug view template engine lib
router.get("/", (req, res) => {
  res.render("index", { title: "my express app", message: "Hello World" });
});

export default router;
