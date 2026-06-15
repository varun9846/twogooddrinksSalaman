export const runtime = "nodejs";

import { getErrorMessage, jsonError, jsonSuccess } from "@/lib/utils/api-response";
import { parseRequestString } from "@/lib/utils/numbers";
import userService from "@/lib/services/user.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const user = await userService.createUser({
      name: parseRequestString(body.name),
      email: parseRequestString(body.email),
      password: parseRequestString(body.password),
      phone_number: body.phone_number ? parseRequestString(body.phone_number) : undefined,
      address: body.address ? parseRequestString(body.address) : undefined,
    });

    return jsonSuccess(
      {
        message: "Account created successfully.",
        user,
      },
      201,
    );
  } catch (error) {
    return jsonError(getErrorMessage(error, "Unable to create account."));
  }
}
