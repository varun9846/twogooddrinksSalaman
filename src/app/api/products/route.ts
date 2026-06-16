import { getErrorMessage, jsonError, jsonSuccess } from "@/lib/utils/api-response";
import productService from "@/lib/services/product.service";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url); // POST even for get queries only API's  which requires to keep statefull be in search params
    const productId = searchParams.get("productId"); // Validate with a parser zod

    if (productId) {
      const product = await productService.getProductById(productId);


      ///  Request fromate has to be same in any situation.
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

    ///Manage all the erros in place to be able to make global level changes.
    console.error("PRODUCTS_GET_ERROR", error);

    return jsonError("Failed to fetch products", 500);
  }
}
