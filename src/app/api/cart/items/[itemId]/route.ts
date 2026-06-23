export const runtime = "nodejs";

import cartService from "@/lib/services/cart.service";
import {
  getErrorMessage,
  jsonError,
  jsonSuccess,
  readJsonBody,
} from "@/lib/utils/api-response";
import { getAuthenticatedUserId } from "@/lib/utils/auth";
import {
  CartItemParamsSchema,
  UpdateCartItemRequestSchema,
} from "@/lib/validators/cart.validator";

interface RouteContext {
  params: Promise<{
    itemId: string;
  }>;
}

export async function PATCH(request: Request, context: RouteContext) {
  try {
    const userId = await getAuthenticatedUserId();

    if (!userId) {
      return jsonError("Unauthorized", 401);
    }

    const params = CartItemParamsSchema.parse(await context.params);
    const body = UpdateCartItemRequestSchema.parse(await readJsonBody(request));
    const cart = await cartService.updateCartItem(userId, params.itemId, body.quantity);

    return jsonSuccess({ message: "Cart updated.", cart });
  } catch (error) {
    return jsonError(getErrorMessage(error, "Unable to update cart item."));
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  try {
    const userId = await getAuthenticatedUserId();

    if (!userId) {
      return jsonError("Unauthorized", 401);
    }

    const params = CartItemParamsSchema.parse(await context.params);
    const cart = await cartService.removeCartItem(userId, params.itemId);

    return jsonSuccess({ message: "Item removed from cart.", cart });
  } catch (error) {
    return jsonError(getErrorMessage(error, "Unable to remove cart item."));
  }
}
