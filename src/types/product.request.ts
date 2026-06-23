import type { z } from "zod";
import type {
  ProductDetailRequestSchema,
  ProductsRequestSchema,
} from "@/lib/validators/product.validator";

export type ProductsRequestDto = z.infer<typeof ProductsRequestSchema>;
export type ProductDetailRequestDto = z.infer<typeof ProductDetailRequestSchema>;
