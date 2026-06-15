"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/shop";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setIsSubmitting(false);

    if (result?.error) {
      setError("Invalid email or password.");
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-[16px]">
      {error ? (
        <div className="rounded-[12px] bg-red-50 px-[14px] py-[10px] font-Poppins text-[13px] text-red-600">
          {error}
        </div>
      ) : null}

      <div>
        <label className="mb-[8px] block font-Poppins text-[14px] font-medium text-[#3d4750]">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#6c7fd8]"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="mb-[8px] block font-Poppins text-[14px] font-medium text-[#3d4750]">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#6c7fd8]"
          placeholder="Enter password"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-[12px] bg-[#6c7fd8] px-[20px] py-[13px] font-Poppins text-[14px] font-semibold text-white transition hover:bg-[#5a6cb8] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Signing in..." : "Login"}
      </button>

      <p className="text-center font-Poppins text-[14px] text-[#686e7d]">
        New customer?{" "}
        <Link href={`/register?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="font-semibold text-[#6c7fd8]">
          Create account
        </Link>
      </p>
    </form>
  );
}

export default function LoginPage() {
  return (
    <main>
      <section className="py-[60px]">
        <div className="mx-auto grid max-w-[980px] overflow-hidden rounded-[24px] bg-white shadow-sm md:grid-cols-2">
          <div className="hidden bg-[#f8f8fb] md:block">
            <img src="/assets/img/login/login.png" alt="Login" className="h-full w-full object-cover" />
          </div>

          <div className="p-[32px] md:p-[44px]">
            <p className="mb-[8px] font-Poppins text-[14px] font-medium text-[#6c7fd8]">Welcome back</p>
            <h1 className="mb-[24px] font-quicksand text-[32px] font-bold text-[#3d4750]">Login to continue</h1>
            <Suspense>
              <LoginForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
