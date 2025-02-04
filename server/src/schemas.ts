import { z } from 'zod';

// Schema for creating a book
export const createBookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  description: z.string().optional(),
  coverImage: z.string().url("Cover image must be a valid URL").optional(),
  publishedDate: z.string().datetime({ message: "Invalid date format" }).optional(),
  price: z.number().min(0, "Price must be a positive number"),
  strikethroughPrice: z.number().min(0, "Strikethrough price must be a positive number").optional(),
  discount: z.number().min(0).max(100, "Discount must be between 0 and 100").optional(),
  categoryId: z.string().min(1, "Category ID is required"),
  categoryName: z.string().min(1, "Category Name is required"),
  isNewArrival: z.boolean().optional(),
});

// Schema for editing a book
export const editBookSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  author: z.string().min(1, "Author is required").optional(),
  description: z.string().optional(),
  coverImage: z.string().url("Cover image must be a valid URL").optional(),
  publishedDate: z.string().datetime({ message: "Invalid date format" }).optional(),
  price: z.number().min(0, "Price must be a positive number").optional(),
  strikethroughPrice: z.number().min(0, "Strikethrough price must be a positive number").optional(),
  discount: z.number().min(0).max(100, "Discount must be between 0 and 100").optional(),
  isNewArrival: z.boolean().optional(),
});

//Schema for creating category
export const createBookCategorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  description: z.string().optional(),
});
//Schema for creating category
export const createReviewSchema = z.object({
  bookId: z.string().min(1, "Book ID is required"),
  score: z.number().min(1, "Score must be at least 1").max(5, "Score must not exceed 5"),
  content: z.string().optional(),
  userId: z.string().optional(),
});
