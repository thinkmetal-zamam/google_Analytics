"use client";

import { useEffect, useState } from "react";
import { initGA } from "../lib/ga";
import Button from "./ui/Button";
import CookieIcon from "./svg/CookieIcon";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("consent");
      setVisible(consent !== "granted" && consent !== "denied");
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = async () => {
    try {
      localStorage.setItem("consent", "granted");

      // load and init GA (this will inject the script and call config)
      await initGA();

      // now it's safe to update gtag consent state if gtag is available
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }
    } catch {
      // noop
    } finally {
      setVisible(false);
    }
  };

  const reject = () => {
    try {
      localStorage.setItem("consent", "denied");

      // If gtag is already present, tell it to deny analytics
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("consent", "update", {
          analytics_storage: "denied",
        });
      }
      // do NOT load the GA script
    } catch {
      // noop
    } finally {
      setVisible(false);
    }
  };

  return (
    <div
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 z-[9999] max-w-3xl w-[92%] md:max-w-md bg-white dark:bg-black border rounded-xl shadow-xl p-6 flex gap-5 items-start"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">
          We value your privacy
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
          We use analytics to understand how you use our website — like pages
          visited, clicks, device info, and approximate location.
        </p>

        {showDetails && (
          <ul className="text-xs text-zinc-500 dark:text-zinc-400 mb-3 list-disc pl-5 space-y-1">
            <li>Pages you visit</li>
            <li>Clicks and interactions</li>
            <li>Device & browser information</li>
            <li>Approximate location (city-level)</li>
            <li>Time spent on pages</li>
          </ul>
        )}

        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
          We do not collect personal information like your name or email.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            onClick={accept}
            variant="primary"
            ariaLabel="Accept analytics"
          >
            Accept
          </Button>

          <Button
            onClick={reject}
            variant="secondary"
            ariaLabel="Reject analytics"
          >
            Reject
          </Button>

          <button
            onClick={() => setShowDetails((prev) => !prev)}
            className="text-xs underline text-zinc-500 hover:text-zinc-700"
          >
            {showDetails ? "Hide details" : "Learn more"}
          </button>
        </div>
      </div>

      <div className="flex-none mt-1">
        <CookieIcon size={64} />
      </div>
    </div>
  );
}
