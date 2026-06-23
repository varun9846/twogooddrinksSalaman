import { ZodError } from "zod";
import type { ApiResponse } from "@/types/api";

function resolveStatusCode(error: unknown, fallbackStatus = 500): number {
  const maybeStatus = (error as { status?: unknown; statusCode?: unknown })?.status ??
    (error as { statusCode?: unknown })?.statusCode;

  if (typeof maybeStatus === "number" && maybeStatus >= 400 && maybeStatus <= 599) {
    return maybeStatus;
  }

  if (error instanceof ZodError) return 400;
  return fallbackStatus;
}

function resolveErrorMessage(error: unknown, fallbackMessage = "Something went wrong."): string {
  if (error instanceof ZodError) {
    return error.issues.map((issue) => issue.message).join(" ") || fallbackMessage;
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  if (typeof error === "string" && error.trim()) {
    return error;
  }

  return fallbackMessage;
}

export default class ApiResponseDto<TData = unknown> implements ApiResponse<TData> {
  success = true;
  statusCode = 200;
  message = "Successful";
  error = false;
  data: TData | null = null;

  constructor(statusCode = 200, message = "Successful") {
    this.statusCode = statusCode;
    this.message = message;
  }

  setData(data: TData, message = this.message, statusCode = this.statusCode) {
    this.success = true;
    this.error = false;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  handleError(error: unknown, fallbackMessage = "Something went wrong.", fallbackStatus = 500) {
    this.success = false;
    this.error = true;
    this.statusCode = resolveStatusCode(error, fallbackStatus);
    this.message = resolveErrorMessage(error, fallbackMessage);
    this.data = null;
  }

  toJSON(): ApiResponse<TData> {
    return {
      success: this.success,
      statusCode: this.statusCode,
      message: this.message,
      error: this.error,
      data: this.data,
    };
  }
}

export { resolveErrorMessage, resolveStatusCode };
