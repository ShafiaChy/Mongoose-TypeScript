import express from 'express';
import { ProductControllers } from './products.controller';

const router = express.Router();

router.post('/create-product',ProductControllers.createProduct);
router.get('/', ProductControllers.getAllProducts);
router.get('/:studentId', ProductControllers.getSingleProduct);
export const ProductRoutes = router;