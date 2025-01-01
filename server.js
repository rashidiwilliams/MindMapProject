const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const data = []; // Temporary in-memory storage

app.post("/save", (req, res) => {
  const { input } = req.body;
  if (input) {
    data.push(input);
    res.send({ message: "Data saved successfully!" });
  } else {
    res.status(400).send({ message: "Input is required!" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
