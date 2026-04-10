"use client";
import Image from "next/image";
import Link from "next/link";
import { trackEvent } from "./component/GoogleAnalytics";

export default function Home() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Track Form Submission
    trackEvent("submit_form", "Contact", "Lead Generation Form");

    alert("Form Submitted!");
  };
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black font-sans">
      <header className="w-full border-b border-black/[.06] dark:border-white/[.06]">
        <nav className="max-w-3xl mx-auto flex items-center justify-between p-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/next.svg"
              alt="logo"
              width={36}
              height={36}
              className="dark:invert"
            />
            <span className="font-semibold text-lg text-black dark:text-zinc-50">
              Analytics
            </span>
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="text-zinc-800 dark:text-zinc-200">
              Home
            </Link>
            <Link href="/about" className="text-zinc-800 dark:text-zinc-200">
              About
            </Link>
            <Link href="/contact" className="text-zinc-800 dark:text-zinc-200">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
        {/* Hero */}
        <section className="bg-white dark:bg-black rounded-xl p-10 shadow-sm">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50 mb-4">
            Simple analytics, smarter decisions
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Track key metrics, visualise traffic, and get actionable insights —
            all in one place.
          </p>

          <div className="flex gap-3">
            <Link
              href="/about"
              className="inline-flex items-center px-5 py-3 rounded-full bg-foreground text-background font-medium"
            >
              Learn more
            </Link>
            <a
              href="#features"
              className="inline-flex items-center px-5 py-3 rounded-full border border-black/[.08] dark:border-white/[.12]"
            >
              Features
            </a>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="bg-white dark:bg-[#0b0b0b] p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-black dark:text-zinc-50">
              Real-time metrics
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Monitor traffic and conversions as they happen.
            </p>
          </div>
          <div className="bg-white dark:bg-[#0b0b0b] p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-black dark:text-zinc-50">
              Easy integrations
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Connect with your stack quickly and securely.
            </p>
          </div>
        </section>

        {/* Quick links / CTA */}
        <section className="mt-8">
          <div className="bg-white dark:bg-black p-6 rounded-lg flex items-center justify-between">
            <div>
              <h4 className="font-medium text-black dark:text-zinc-50">
                Ready to get started?
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                Sign up and see your first dashboard in minutes.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="px-4 py-2 rounded-md bg-foreground text-background"
              >
                Contact sales
              </Link>
              <a href="#" className="px-4 py-2 rounded-md border">
                Try demo
              </a>
            </div>
          </div>
          <div className="p-10">
            <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
              <input
                className="border p-2 w-full"
                placeholder="Name"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded"
                onClick={() =>
                  trackEvent("click_button", "UX", "Submit Button Click")
                }
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-black/[.06] dark:border-white/[.06]">
        <div className="max-w-3xl mx-auto p-6 text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Analytics —{" "}
          <Link href="/about" className="underline">
            About
          </Link>
        </div>
      </footer>
    </div>
  );
}
