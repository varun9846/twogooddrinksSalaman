import { getErrorMessage, jsonError, jsonSuccess } from "@/lib/utils/api-response";
import productService from "@/lib/services/product.service";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");

    if (productId) {
      const product = await productService.getProductById(productId);

      return jsonSuccess({
        success: true,
        product,
        products: product ? [product] : [],
      });
    }

    const products = await productService.getAllProducts();

    return jsonSuccess({
      success: true,
      product: null,
      products,
    });
  } catch (error) {
    console.error("PRODUCTS_GET_ERROR", error);

    return jsonError("Failed to fetch products", 500);
  }
}
