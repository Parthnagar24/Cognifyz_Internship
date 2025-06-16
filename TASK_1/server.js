const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("form"); // renders views/form.ejs
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body; // get form data
  res.render("result", { name, email }); // render views/result.ejs with data
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
