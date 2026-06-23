export const runtime = "nodejs";

import cartService from "@/lib/services/cart.service";
import { jsonError, jsonSuccess } from "@/lib/utils/api-response";
import { getAuthenticatedUserId } from "@/lib/utils/auth";

export async function GET() {
  try {
    const userId = await getAuthenticatedUserId();

    if (!userId) {
      return jsonError("Unauthorized", 401);
    }

    const cart = await cartService.getCart(userId);
    return jsonSuccess({ cart });
  } catch (error) {
    console.error("CART_GET_ERROR", error);
    return jsonError(error, 500, "Unable to load cart.");
  }
}
