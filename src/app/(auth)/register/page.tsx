"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/shop";
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    address: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((old) => ({ ...old, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      setError(data.message || "Unable to create account.");
      setIsSubmitting(false);
      return;
    }

    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    setIsSubmitting(false);

    if (result?.error) {
      router.push("/login");
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
        <label className="mb-[8px] block font-Poppins text-[14px] font-medium text-[#3d4750]">Name</label>
        <input
          required
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#6c7fd8]"
          placeholder="Full name"
        />
      </div>

      <div>
        <label className="mb-[8px] block font-Poppins text-[14px] font-medium text-[#3d4750]">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#6c7fd8]"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="mb-[8px] block font-Poppins text-[14px] font-medium text-[#3d4750]">Password</label>
        <input
          type="password"
          required
          minLength={6}
          value={form.password}
          onChange={(event) => updateField("password", event.target.value)}
          className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#6c7fd8]"
          placeholder="Minimum 6 characters"
        />
      </div>

      <div className="grid gap-[16px] sm:grid-cols-2">
        <div>
          <label className="mb-[8px] block font-Poppins text-[14px] font-medium text-[#3d4750]">Phone</label>
          <input
            value={form.phone_number}
            onChange={(event) => updateField("phone_number", event.target.value)}
            className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#6c7fd8]"
            placeholder="Phone number"
          />
        </div>

        <div>
          <label className="mb-[8px] block font-Poppins text-[14px] font-medium text-[#3d4750]">Address</label>
          <input
            value={form.address}
            onChange={(event) => updateField("address", event.target.value)}
            className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#6c7fd8]"
            placeholder="Address"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-[12px] bg-[#6c7fd8] px-[20px] py-[13px] font-Poppins text-[14px] font-semibold text-white transition hover:bg-[#5a6cb8] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Creating account..." : "Create Account"}
      </button>

      <p className="text-center font-Poppins text-[14px] text-[#686e7d]">
        Already have an account?{" "}
        <Link href={`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="font-semibold text-[#6c7fd8]">
          Login
        </Link>
      </p>
    </form>
  );
}

export default function RegisterPage() {
  return (
    <main>
      <section className="py-[60px]">
        <div className="mx-auto max-w-[760px] rounded-[24px] bg-white p-[32px] shadow-sm md:p-[44px]">
          <p className="mb-[8px] font-Poppins text-[14px] font-medium text-[#6c7fd8]">Join 2gooD</p>
          <h1 className="mb-[24px] font-quicksand text-[32px] font-bold text-[#3d4750]">Create your account</h1>
          <Suspense>
            <RegisterForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
