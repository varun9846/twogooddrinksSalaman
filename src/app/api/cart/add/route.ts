export const runtime = "nodejs";

import cartService from "@/lib/services/cart.service";
import {
  getErrorMessage,
  jsonError,
  jsonSuccess,
  readJsonBody,
} from "@/lib/utils/api-response";
import { getAuthenticatedUserId } from "@/lib/utils/auth";
import { AddToCartRequestSchema } from "@/lib/validators/cart.validator";

export async function POST(request: Request) {
  try {
    const userId = await getAuthenticatedUserId();

    if (!userId) {
      return jsonError("Please login first.", 401);
    }

    const body = AddToCartRequestSchema.parse(await readJsonBody(request));
    const cart = await cartService.addToCart(userId, body.productId, body.quantity);

    return jsonSuccess({ message: "Product added to cart.", cart });
  } catch (error) {
    return jsonError(getErrorMessage(error, "Unable to add product to cart."));
  }
}
