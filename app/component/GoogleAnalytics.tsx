"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-36691JYF88"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // 1. Default consent to 'denied' (DPDP Rule)
          gtag('consent', 'default', {
            'analytics_storage': 'denied'
          });

          gtag('js', new Date());
          gtag('config', 'G-36691JYF88');
        `}
      </Script>
    </>
  );
}

// Helper function to track custom events (Forms/Buttons)
export const trackEvent = (action: string, category: string, label: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
};
