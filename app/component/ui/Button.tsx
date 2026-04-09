import React from "react";

type Variant = "primary" | "secondary" | "ghost";

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  ariaLabel,
}: Readonly<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
}>) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants: Record<Variant, string> = {
    primary: "bg-foreground text-background hover:opacity-95",
    secondary:
      "bg-white dark:bg-[#0b0b0b] border border-black/[.08] dark:border-white/[.12] text-zinc-800 dark:text-zinc-200",
    ghost: "bg-transparent text-zinc-200",
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
