export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getCart } from "@/lib/cart";

export async function GET() {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const cart = await getCart(session.user.id);
  return NextResponse.json({ cart });
}
