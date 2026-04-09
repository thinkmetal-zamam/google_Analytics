"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { pageView } from "../lib/ga";

export default function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const consent = localStorage.getItem("consent");

    if (consent === "granted") {
      pageView(pathname);
    }
  }, [pathname]);

  return null;
}
