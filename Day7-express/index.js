const express = require("express");
const app = express();
const port = 5000;

//400 client side error
//500 server side error

app.use("/", (req, res) => {
  //   res.send("HELLO");
  //   res.send([11,22,33])
  // res.sendStatus(500);
  // res.send()
  //pipeling
  res.status(200).send("YOO");
});

//to send data as json
app.get("/json", (req, res) => {
  res.json({ name: "John", age: "69" });
});

// acd aur abcd pe same chale i.e keep b as optional
app.get("/ab?cd", (req, res) => {
  res.send("abcd");
});

//bkitni baarr bhi a skta then ab+++
///ab*cd -> cd last m aaye
//ab(cd)?e
//  /a/ -> regex

//receiving query paramater
app.get("/query", (req, res) => {
  console.log(req.query);
  res.status(200).send(req.query);
});

//params
app.get("/team/:code", (req, res) => {
  const { code } = req.params;
  if (code == 1) {
    res.send("Welcome to Async Team");
    return;
  }

  res.send("Incorrect PARAM CODE!");
});

app.get("/query", (req, res) => {
  console.log(req.query);
  res.status(200).send(req.query);
});

app.listen(port, console.log(`Server is runing on port ${port}`));
