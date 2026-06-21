export const runtime = "nodejs";

import productService from "@/lib/services/product.service";
import { getErrorMessage, jsonError, jsonSuccess } from "@/lib/utils/api-response";

interface ProductsRequestBody {
  category?: string;
  productId?: string;
}

async function safeReadBody(request: Request): Promise<ProductsRequestBody> {
  try {
    return (await request.json()) as ProductsRequestBody;
  } catch {
    return {};
  }
}

export async function POST(request: Request) {
  try {
    const body = await safeReadBody(request);
    const productId = body.productId?.trim();
    const category = body.category?.trim();

    if (productId) {
      const product = await productService.getProductById(productId);

      return jsonSuccess({
        success: true,
        product,
        products: product ? [product] : [],
      });
    }

    const products = await productService.getAllProducts(category || undefined);

    return jsonSuccess({
      success: true,
      product: null,
      products,
    });
  } catch (error) {
    console.error("PRODUCTS_POST_ERROR", error);
    return jsonError(getErrorMessage(error, "Failed to fetch products"), 500);
  }
}
