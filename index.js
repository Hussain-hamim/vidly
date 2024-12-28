import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.get("/api/courses", (req, res) => {
  res.send(["js", "react", "node", "hello!"]);
});

app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.params);
});

// query parameter
app.get("/api/search", (req, res) => {
  res.send(req.query);
});

// process.env.PORT = 6000;

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
