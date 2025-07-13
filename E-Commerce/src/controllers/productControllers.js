import { deleteModel } from "mongoose";
import product from "../models/product.js";
import { json } from "express";

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
      brand: brand
    });

    res.send(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
};
const getAllProduct = async (req, res) => {
  try {
    const query = req.query
    const sort = JSON.parse(req.query.sort || '{}')
    console.log(sort)
    
    let filter ={}
    console.log(query.ram)
    if (query.productName){
      filter.productName={
        $regex: query.productName,
        $options:"i"
      }
    }
    if (query.description){
      filter.description={
        $regex: query.description,
        $options:"i"
      }
    }
    if (query.price){
      const nums = query.price.split(",");
      const from = nums[0];
      const to = nums[nums.length -1];
      filter.price={
        $gte: from,
        $lte: to
      }   
    }
    if (query.gen){
      filter.gen={
        $lte: query.gen.split(","),
        
      }
    }
    if (query.ram){
      filter.ram={
        $in: query.ram.split(","),
      }
    }
    if (query.rom){
      filter.rom={
        $in: query.rom.split(","),
      }
    }
    if (query.brand){
      filter.brand={
        $in: query.brand.split(",")
        
      }
    }


    // return sort
    
    // if(req.query.brand){filter.brand={$in: req.query.brand.split(',')}}
    // console.log(filter)
    
    // return res.send(filter)
    // brand: 'Acer'
    // brand: {$in: ['Acer','Dell']}
    const data = await product.find(filter).sort(sort)
    // console.log(data);
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
