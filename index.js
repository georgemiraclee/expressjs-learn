const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.json())
//routes GET method
app.get("/hello", (req, res) => { // Ubah req menjadi req, karena parameter yang diterima adalah req (request)
  console.log({urlParam: req.query})
  res.send("Hello World!300");
});

app.get("/", (req, res) => {
  res.send("utama!");
});

app.post("/login", (req, res) => {
  console.log({ requestFromOutside: req.body })
  const username = req.body.username
  if(username === usernameFromDbExist){
    res.status(400).send('ussername tidak dapat digunakan')
  };
  res.send("login berhasil");
});
app.put("/username", (req, res) => {
  console.log({ updateData: req.body });
  res.send("update berhasil");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
