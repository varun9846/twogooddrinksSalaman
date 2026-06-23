export const runtime = "nodejs";

import productService from "@/lib/services/product.service";
import { getErrorMessage, jsonError, jsonSuccess } from "@/lib/utils/api-response";

export async function POST() {
  try {
    const menu = await productService.getProductMenu();

    return jsonSuccess({
      success: true,
      menu,
    });
  } catch (error) {
    console.error("PRODUCTS_MENU_POST_ERROR", error);
    return jsonError(getErrorMessage(error, "Failed to fetch product menu."), 500);
  }
}
