export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { removeCartItem, updateCartItem } from "@/lib/cart";

interface RouteContext {
  params: Promise<{
    itemId: string;
  }>;
}

export async function PATCH(request: Request, context: RouteContext) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { itemId } = await context.params;
    const body = await request.json();
    const quantity = Number(body.quantity || 0);
    const cart = await updateCartItem(session.user.id, itemId, quantity);

    return NextResponse.json({ message: "Cart updated.", cart });
  } catch (error) {
    return NextResponse.json({
      message: error instanceof Error ? error.message : "Unable to update cart item.",
    }, { status: 400 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { itemId } = await context.params;
    const cart = await removeCartItem(session.user.id, itemId);

    return NextResponse.json({ message: "Item removed from cart.", cart });
  } catch (error) {
    return NextResponse.json({
      message: error instanceof Error ? error.message : "Unable to remove cart item.",
    }, { status: 400 });
  }
}
