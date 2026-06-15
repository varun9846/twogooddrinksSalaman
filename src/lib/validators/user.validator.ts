export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
  phone_number?: string;
  address?: string;
}

export interface SafeRegisterUserInput {
  name: string;
  email: string;
  password: string;
  phoneNumber: string | null;
  address: string | null;
}

export function validateRegisterInput(input: RegisterUserInput): SafeRegisterUserInput {
  const name = input.name.trim();
  const email = input.email.trim().toLowerCase();
  const password = input.password;
  const phoneNumber = input.phone_number?.trim() || null;
  const address = input.address?.trim() || null;

  if (!name || !email || !password) {
    throw new Error("Name, email and password are required.");
  }

  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }

  return { name, email, password, phoneNumber, address };
}
