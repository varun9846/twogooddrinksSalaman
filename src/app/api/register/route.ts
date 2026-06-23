export const runtime = "nodejs";

import userService from "@/lib/services/user.service";
import {
  getErrorMessage,
  jsonError,
  jsonSuccess,
  readJsonBody,
} from "@/lib/utils/api-response";
import { RegisterUserSchema } from "@/lib/validators/user.validator";

export async function POST(request: Request) {
  try {
    const body = RegisterUserSchema.parse(await readJsonBody(request));
    const user = await userService.createUser(body);

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
