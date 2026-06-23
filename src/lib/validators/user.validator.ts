import { z } from "zod";

const optionalNullableString = (maxLength: number, fieldName: string) =>
  z.preprocess(
    (value) => {
      if (typeof value !== "string") return value;
      const cleanValue = value.trim();
      return cleanValue.length ? cleanValue : undefined;
    },
    z.string().trim().max(maxLength, `${fieldName} is too long.`).optional(),
  );

export const RegisterUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required.")
    .max(150, "Name is too long."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address.")
    .max(255, "Email is too long."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(100, "Password is too long."),
  phone_number: optionalNullableString(50, "Phone number"),
  address: optionalNullableString(500, "Address"),
});

export type RegisterUserInput = z.input<typeof RegisterUserSchema>;

export interface SafeRegisterUserInput {
  name: string;
  email: string;
  password: string;
  phoneNumber: string | null;
  address: string | null;
}

export function validateRegisterInput(input: RegisterUserInput): SafeRegisterUserInput {
  const data = RegisterUserSchema.parse(input);

  return {
    name: data.name,
    email: data.email,
    password: data.password,
    phoneNumber: data.phone_number ?? null,
    address: data.address ?? null,
  };
}
