"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setShowBanner(true);
  }, []);

  const handleConsent = (status: "granted" | "denied") => {
    localStorage.setItem("cookie_consent", status);
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: status,
      });
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:w-96 bg-white border border-gray-200 p-6 shadow-2xl rounded-lg z-50">
      <p className="text-sm text-gray-600 mb-4">
        We use cookies to improve your experience. Under DPDP laws, we ask for
        your consent to track site usage.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => handleConsent("granted")}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-bold hover:bg-blue-700 transition"
        >
          Accept All
        </button>
        <button
          onClick={() => handleConsent("denied")}
          className="text-gray-500 text-sm hover:underline"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
