export const runtime = "nodejs";

import { getErrorMessage, jsonError, jsonSuccess } from "@/lib/utils/api-response";
import { getAuthenticatedUserId } from "@/lib/utils/auth";
import { parseRequestNumber, parseRequestString } from "@/lib/utils/numbers";
import cartService from "@/lib/services/cart.service";

export async function POST(request: Request) {
  try {
    const userId = await getAuthenticatedUserId();

    if (!userId) {
      return jsonError("Please login first.", 401);
    }

    const body = await request.json();
    const productId = parseRequestString(body.productId);

    if (!productId) {
      return jsonError("Product id is required.");
    }

    const cart = await cartService.addToCart(
      userId,
      productId,
      parseRequestNumber(body.quantity, 1),
    );

    return jsonSuccess({ message: "Product added to cart.", cart });
  } catch (error) {
    return jsonError(getErrorMessage(error, "Unable to add product to cart."));
  }
}
