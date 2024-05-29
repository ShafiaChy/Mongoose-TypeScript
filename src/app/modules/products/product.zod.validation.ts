import { z } from 'zod';

export const productSchemaValidation = z.object({
  name: z.string().trim().min(1, 'Name is required').max(255, 'Name is too long'),
  price: z.number().positive('Price must be positive'),
  quantity: z.number().positive('Quantity must be positive').int('Quantity must be an integer'),
  description: z.string().trim().optional(), // Optional description
  category: z.string().trim(), // Optional category
  brand: z.string().trim(), // Optional brand
  // No validation for createdAt and updatedAt as they are automatically generated
});
