"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

   
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoading(false);
    router.push("/admin/dashboard");
  };

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-5 py-16 sm:px-8">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FAE7BC]">
        Staff Access
      </span>
      <h1
        className="mt-2 text-3xl font-semibold text-"
        style={{ fontFamily: "'Fraunces', 'Georgia', serif" }}
      >
        Admin Login
      </h1>
      <p className="mt-2 text-sm text-[#22201B]/70">
        Sign in to manage events and admissions listings.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wide text-[#FAE7BC]"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border  bg-white/70 px-4 py-3 text-sm text-[#22201B] outline-none transition-colors focus:border-[#1B4332]"
            placeholder="admin@cheptulusunrise.ac.ke"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-xs font-semibold uppercase tracking-wide text-[#FAE7BC]"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={form.password}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-[#1B4332]/15 bg-white/70 px-4 py-3 text-sm text-[#22201B] outline-none transition-colors focus:border-[#1B4332]"
            placeholder="••••••••"
          />
        </div>

        {error && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-[#1B4332] px-6 py-3 text-sm font-semibold text-[#FAF6EC] transition-colors hover:bg-[#163728] disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </section>
  );
}