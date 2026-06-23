import { NextResponse } from "next/server";
import ApiResponseDto, {
  resolveErrorMessage,
  resolveStatusCode,
} from "@/lib/dto/api-response.dto";

export async function readJsonBody<T = unknown>(request: Request): Promise<T> {
  try {
    return (await request.json()) as T;
  } catch {
    return {} as T;
  }
}

export function jsonSuccess<T extends Record<string, unknown>>(
  payload: T,
  status = 200,
  message?: string,
) {
  const response = new ApiResponseDto<T>(
    status,
    message ?? (typeof payload.message === "string" ? payload.message : "Successful"),
  );

  response.setData(payload, response.message, status);

  return NextResponse.json(
    {
      ...response.toJSON(),
      ...payload,
      success: true,
      error: false,
      statusCode: status,
      message: response.message,
      data: payload,
    },
    { status },
  );
}

export function jsonError(error: unknown, status = 400, fallback = "Request failed.") {
  const statusCode = resolveStatusCode(error, status);
  const message = resolveErrorMessage(error, fallback);
  const response = new ApiResponseDto<null>();
  response.handleError(message, message, statusCode);

  return NextResponse.json(response.toJSON(), { status: response.statusCode });
}

export function getErrorMessage(error: unknown, fallback: string): string {
  return resolveErrorMessage(error, fallback);
}
