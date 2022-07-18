const express = require('express');

const app = express();
const ejs = require("ejs");
const path = require("path");

const fileUpload = require("express-fileupload");
app.use(express.json());
app.use(fileUpload());

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.set(express.static("public"));

// app.use("views", path.join(__dirname, "views"));
app.use(express.static("public"));



app.set('view engine','ejs');

app.get("/", (req, res) => 
{
  //const data = await model_person.find()
  res.render("home")
  //res.render("home",{data: data});
  //console.log(data)
});

app.get("/insert", (req, res) => {
    res.render("insert");
  });



app.listen(4000, () => {
    console.log("server started");
});
  