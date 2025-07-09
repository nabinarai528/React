import product from "../models/product.js";

const createProduct = async (req, res) => {
  const { productName, ram, rom, price, description, gen, brand } = req.body;
  //console.log(productName,ram,rom,price,description)
  try {
    if (!ram) {
      throw new Error("ram is required");
    }
    if (!rom) {
      throw new Error("rom is required");
    }
    if (!productName || !description || !price || !gen || !brand) {
      throw new Error("credential missing");
    }
    const data = await product.create({
      productName: productName,
      ram: ram,
      rom: rom,
      price: price,
      description: description,
    });

    res.send(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
};
const getAllProduct = async (req, res) => {
  try {
    const data = await product.find();
    console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
};

const getAllProductById = async (req, res) => {
  const id = req.params.id;
  const data = await product.findById(id);
  res.status(200).json({ message: "get my singleproduct", data });
};
const deleteProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await product.findByIdAndDelete(id);
    res.status(200).json({ message: "product deletes successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Error occured while trying to delete");
  }
};
const updateProduct = async (req, res) => {
  const { id } = req.params;
  //const { productName, ram, rom, price, description, gen, brand } = req.body;
  try {
    const data = await product.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json({ data, message: "product updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
};

export {
  createProduct,
  getAllProduct,
  getAllProductById,
  deleteProductById,
  updateProduct,
};
