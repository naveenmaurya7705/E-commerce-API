const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/mongooseDB");
const productRouter = require("./routes/Product");
const app = express();
const Port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.json(200, {
    message: "Welcome In the Ecommerce API! !",
  });
});

app.listen(Port, () => {
  console.log("server is running on port :: ", Port);
});
