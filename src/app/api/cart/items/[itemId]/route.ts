export const runtime = "nodejs";

import { getErrorMessage, jsonError, jsonSuccess } from "@/lib/utils/api-response";
import { getAuthenticatedUserId } from "@/lib/utils/auth";
import { parseRequestNumber } from "@/lib/utils/numbers";
import cartService from "@/lib/services/cart.service";

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

    const { itemId } = await context.params;
    const body = await request.json();
    const cart = await cartService.updateCartItem(
      userId,
      itemId,
      parseRequestNumber(body.quantity, 0),
    );

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

    const { itemId } = await context.params;
    const cart = await cartService.removeCartItem(userId, itemId);

    return jsonSuccess({ message: "Item removed from cart.", cart });
  } catch (error) {
    return jsonError(getErrorMessage(error, "Unable to remove cart item."));
  }
}
