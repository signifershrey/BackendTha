const express = require("express");
const app = express();
const path = require("path");

app.set('views',path.json(__dirname,"views"))
app.set("view engine", "jade");


//! Sending a Static File from backend to frontend

//For giving relative path by Global variable
console.log(__dirname);

app.get("/", (req, res) => {
  // res.send("Hi");
  // res.sendFile("./public/Hello.txt", "textfile.txt");
  // res.sendFile(path.join(__dirname, "public/test.json"), "testfile.txt");
  // res.download(path.join(__dirname, "public/Hello.txt"), "testfile.txt");
  //  res.download(path.join(__dirname, "public/download.jpeg"), "image.jpeg");
  // res.sendFile(path.join(__dirname, "public/download.jpeg"));
});

app.listen(5000, console.log("Server is Running"));
