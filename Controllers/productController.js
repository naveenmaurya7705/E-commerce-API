const productModel = require("../Models/products");

// Create and save a new Product
exports.create = async (req, res) => {
  
  if (!req.body.name && !req.body.quantity) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  const product = new productModel({
    id:req.body.id,
    name: req.body.name,
    quantity: req.body.quantity,
  });
  await product
    .save()
    .then((data) => {
      res.send({
        message: "Product created successfully!!",
        product: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating product",
      });
    });
};

// retrieve all Product from DB

exports.findAll = async (req, res) => {
  try {
    const product = await productModel.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Delete a product with the specified id in the request

exports.destroy = async (req, res) => {
  await productModel
    .findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Product not found.",
        });
      } else {
        res.send({
          message: "Product deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

//Update a product by the id in the request

exports.update = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: `Data to update can not be empty!`,
    });
  }

  const id = req.params.id;

  await productModel
    .findByIdAndUpdate(id, req.body, {
      productFindAndModify: false,
    })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Product not found .`,
        });
      } else {
        res.send({ message: "Product Update Successfully." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
