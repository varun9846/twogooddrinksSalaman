import bcrypt from "bcryptjs";
import { query } from "@/lib/db";

export interface DbUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phone_number: string | null;
  address: string | null;
  created_at: string;
  updated_at: string;
}

export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
  phone_number?: string;
  address?: string;
}

export async function getUserByEmail(email: string) {
  const result = await query<DbUser>(
    `SELECT id, name, email, password, phone_number, address, created_at, updated_at
     FROM users
     WHERE LOWER(email) = LOWER($1)
     LIMIT 1`,
    [email],
  );

  return result.rows[0] || null;
}

export async function createUser(input: RegisterUserInput) {
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

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    throw new Error("An account with this email already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await query<Omit<DbUser, "password">>(
    `INSERT INTO users (name, email, password, phone_number, address)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, name, email, phone_number, address, created_at, updated_at`,
    [name, email, hashedPassword, phoneNumber, address],
  );

  return result.rows[0];
}
