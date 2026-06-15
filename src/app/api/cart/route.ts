export const runtime = "nodejs";

import { jsonError, jsonSuccess } from "@/lib/utils/api-response";
import { getAuthenticatedUserId } from "@/lib/utils/auth";
import cartService from "@/lib/services/cart.service";

export async function GET() {
  const userId = await getAuthenticatedUserId();

  if (!userId) {
    return jsonError("Unauthorized", 401);
  }

  const cart = await cartService.getCart(userId);
  return jsonSuccess({ cart });
}
