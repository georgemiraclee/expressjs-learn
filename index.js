const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.json())
//routes GET method
app.get("/hello", (request, response) => {
  console.log({urlParam: req.query/alamat})
  response.send("Hello World!300");
});

app.get("/", (req, res) => {
  res.send("utama!");
});

app.post("/login", (req, res) => {
  console.log({ requestFromOutside: req.body });
  res.send("login berhasil");
});
app.put("/username", (req, res) => {
  console.log({ updateData: req.body });
  res.send("update berhasil");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
