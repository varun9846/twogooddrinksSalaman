export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { createUser } from "@/lib/users";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const user = await createUser({
      name: String(body.name || ""),
      email: String(body.email || ""),
      password: String(body.password || ""),
      phone_number: body.phone_number ? String(body.phone_number) : undefined,
      address: body.address ? String(body.address) : undefined,
    });

    return NextResponse.json({
      message: "Account created successfully.",
      user,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      message: error instanceof Error ? error.message : "Unable to create account.",
    }, { status: 400 });
  }
}
