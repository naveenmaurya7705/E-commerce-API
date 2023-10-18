const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1/Ecommerce_DB";
mongoose.connect(mongoDB);
const db = mongoose.connection;

db.on("error", function (err) {
  console.log("default connection getting error ", err);
});

db.on("connected", function () {
  console.log("DB :: successfully connected.!");
});

module.exports = db;