import { Schema, model, connect } from 'mongoose';
import { TProduct } from './products.interface';

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String },
  category: { type: String },
  brand: { type: String },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
 
})


export const ProductModel = model<TProduct>('Products', productSchema);