import { z } from "zod";

const optionalTrimmedString = z.preprocess(
  (value) => {
    if (typeof value !== "string") return value;
    const cleanValue = value.trim();
    return cleanValue.length ? cleanValue : undefined;
  },
  z.string().optional(),
);

export const ProductsRequestSchema = z
  .object({
    category: optionalTrimmedString,
    productId: optionalTrimmedString,
  })
  .default({});

export const ProductDetailRequestSchema = z.object({
  productId: z.string().trim().min(1, "Product id is required."),
});

export const ProductMenuRequestSchema = z.object({}).default({});
