import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import type { RegisterUserInput } from "@/lib/validators/user.validator";
import { validateRegisterInput } from "@/lib/validators/user.validator";

const userPublicSelect = {
  id: true,
  name: true,
  email: true,
  phoneNumber: true,
  address: true,
  createdAt: true,
  updatedAt: true,
} as const;

export async function getUserByEmail(email: string) {
  return prisma.user.findFirst({
    where: {
      email: {
        equals: email.trim().toLowerCase(),
        mode: "insensitive",
      },
    },
  });
}

export async function createUser(input: RegisterUserInput) {
  const safeInput = validateRegisterInput(input);
  const existingUser = await getUserByEmail(safeInput.email);

  if (existingUser) {
    throw new Error("An account with this email already exists.");
  }

  const hashedPassword = await bcrypt.hash(safeInput.password, 10);

  return prisma.user.create({
    data: {
      name: safeInput.name,
      email: safeInput.email,
      password: hashedPassword,
      phoneNumber: safeInput.phoneNumber,
      address: safeInput.address,
    },
    select: userPublicSelect,
  });
}

export const userService = {
  getUserByEmail,
  createUser,
};

export default userService;
