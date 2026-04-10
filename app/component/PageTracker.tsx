"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      const consent = localStorage.getItem("consent");
      if (consent !== "granted") return; // respect user choice
    } catch {
      return;
    }
  }, [pathname]);

  return null;
}
