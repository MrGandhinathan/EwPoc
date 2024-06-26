require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`server is running on: ${port}`);
});
