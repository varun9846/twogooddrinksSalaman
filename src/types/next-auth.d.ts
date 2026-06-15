import type { DefaultSession } from "next-auth";

export {};

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      phone_number?: string | null;
      address?: string | null;
    } & DefaultSession["user"];
  }

  interface User {
    phone_number?: string | null;
    address?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    phone_number?: string | null;
    address?: string | null;
  }
}
