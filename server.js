const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.static(__dirname));

const server = app.listen(3000, () => {
  console.log(`server is running on port ${server.address().port}`);
});
