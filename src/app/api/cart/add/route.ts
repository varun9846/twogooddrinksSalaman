export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { addToCart } from "@/lib/cart";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Please login first." }, { status: 401 });
    }

    const body = await request.json();
    const productId = String(body.productId || "");
    const quantity = Number(body.quantity || 1);

    if (!productId) {
      return NextResponse.json({ message: "Product id is required." }, { status: 400 });
    }

    const cart = await addToCart(session.user.id, productId, quantity);
    return NextResponse.json({ message: "Product added to cart.", cart });
  } catch (error) {
    return NextResponse.json({
      message: error instanceof Error ? error.message : "Unable to add product to cart.",
    }, { status: 400 });
  }
}
