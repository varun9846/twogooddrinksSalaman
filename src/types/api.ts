export interface ApiResponse<TData = unknown> {
  success: boolean;
  statusCode: number;
  message: string;
  error: boolean;
  data: TData | null;
}

export type ApiSuccessResponse<TData> = ApiResponse<TData> & {
  success: true;
  error: false;
  data: TData;
};

export type ApiErrorResponse = ApiResponse<null> & {
  success: false;
  error: true;
  data: null;
};
