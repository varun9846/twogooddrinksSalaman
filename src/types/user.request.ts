import type { z } from "zod";
import type { RegisterUserSchema } from "@/lib/validators/user.validator";

export type RegisterUserRequestDto = z.input<typeof RegisterUserSchema>;
