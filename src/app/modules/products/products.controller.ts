import { Request, Response } from "express";
import { ProductServices } from "./products.service";


const createProduct = async (req: Request, res: Response) => {
    try {
      const { product: productData } = req.body;
      const result = await ProductServices.createProductIntoDB(productData);
  
      res.status(200).json({
        success: true,
        message: 'A product is created succesfully',
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  const getAllProducts = async (req: Request, res: Response) => {
    try {
      const result = await ProductServices.getAllProductsFromDB();
  
      res.status(200).json({
        success: true,
        message: 'Products are retrieved succesfully',
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  const getSingleProduct = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
  
      const result = await ProductServices.getSingleProductFromDB(productId);
  
      res.status(200).json({
        success: true,
        message: 'A product is retrieved succesfully',
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct ,
  };