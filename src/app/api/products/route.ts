export const runtime = "nodejs";

import productService from "@/lib/services/product.service";
import {
  getErrorMessage,
  jsonError,
  jsonSuccess,
  readJsonBody,
} from "@/lib/utils/api-response";
import { ProductsRequestSchema } from "@/lib/validators/product.validator";

export async function POST(request: Request) {
  try {
    const body = ProductsRequestSchema.parse(await readJsonBody(request));
    const { productId, category } = body;

    if (productId) {
      const product = await productService.getProductById(productId);

      return jsonSuccess({
        success: true,
        product,
        products: product ? [product] : [],
      });
    }

    const products = await productService.getAllProducts(category);

    return jsonSuccess({
      success: true,
      product: null,
      products,
    });
  } catch (error) {
    console.error("PRODUCTS_POST_ERROR", error);
    return jsonError(getErrorMessage(error, "Failed to fetch products."), 400);
  }
}
