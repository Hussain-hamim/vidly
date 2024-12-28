import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.get("/api/courses", (req, res) => {
  res.send(["Hussain", "Hamim", "Afghan", "hello"]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
