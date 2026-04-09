import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
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

      <main className="max-w-3xl mx-auto p-6 py-12">
        <h1 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
          About Analytics
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          We build lightweight analytics tools focused on privacy and clarity.
          Our goal is to help teams make better product decisions with less
          noise.
        </p>

        <section className="grid gap-6 sm:grid-cols-2">
          <div className="bg-white dark:bg-[#0b0b0b] p-6 rounded-lg">
            <h3 className="font-medium text-black dark:text-zinc-50">
              Our mission
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Provide meaningful metrics without compromising privacy.
            </p>
          </div>
          <div className="bg-white dark:bg-[#0b0b0b] p-6 rounded-lg">
            <h3 className="font-medium text-black dark:text-zinc-50">Team</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              A small, distributed team building focused analytics experiences.
            </p>
          </div>
        </section>

        <div className="mt-8">
          <Link href="/" className="text-foreground underline">
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
