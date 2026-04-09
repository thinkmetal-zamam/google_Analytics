"use client";

import { useEffect, useState } from "react";
import { initGA } from "../lib/ga";
import Button from "./ui/Button";
import CookieIcon from "./svg/CookieIcon";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("consent");
      setVisible(consent !== "granted" && consent !== "denied");
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("consent", "granted");

      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }

      initGA(); // start GA
    } catch {
      // noop
    } finally {
      setVisible(false);
    }
  };

  const reject = () => {
    try {
      localStorage.setItem("consent", "denied");

      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("consent", "update", {
          analytics_storage: "denied",
        });
      }
    } catch {
      // noop
    } finally {
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 z-[9999] max-w-3xl w-[92%] md:max-w-md bg-white dark:bg-black border rounded-xl shadow-lg p-6 flex gap-6 items-center"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">
          Cookies
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          We use analytics to improve experience. Click Accept to enable
          analytics — you can also reject to opt out.
        </p>

        <div className="flex gap-3">
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
        </div>
      </div>

      <div className="flex-none">
        <CookieIcon size={76} />
      </div>
    </div>
  );
}
