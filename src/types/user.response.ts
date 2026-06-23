import type { ApiResponse } from "@/types/api";

export interface UserResponseDto {
  id: string;
  name: string;
  email: string;
  phoneNumber: string | null;
  address: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export type RegisterUserPayload = {
  user: UserResponseDto;
};

export type RegisterUserResponse = ApiResponse<RegisterUserPayload> &
  RegisterUserPayload;
