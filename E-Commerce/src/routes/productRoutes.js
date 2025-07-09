import express from 'express';
import {createProduct, deleteProductById, getAllProduct, getAllProductById, updateProduct} from '../controllers/productControllers.js';

const router = express.Router()

router.get('/products', getAllProduct)
router.post('/', createProduct)
router.get('/product/:id', getAllProductById)
router.delete('/:id', deleteProductById)
router.put('/:id', updateProduct)


export default router;
