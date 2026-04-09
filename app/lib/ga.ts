export const GA_ID = "G-36691JYF88";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Injects gtag script and ensures window.gtag is available.
 * Resolves when gtag is ready.
 */
export const loadGAScript = (): Promise<void> => {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve();
    if (window.gtag) return resolve();

    // ensure dataLayer and stub exist before external script executes
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        // @ts-ignore
        window.dataLayer.push(arguments);
      };

    // add external script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
};

/**
 * Initialize GA after consent. Loads script if needed then configures.
 */
export const initGA = async () => {
  if (typeof window === "undefined") return;
  await loadGAScript();
  if (!window.gtag) return;
  window.gtag("config", GA_ID, { anonymize_ip: true });
};

/**
 * Only send events when gtag exists AND consent is granted.
 */
const hasConsent = () => {
  try {
    return localStorage.getItem("consent") === "granted";
  } catch {
    return false;
  }
};

export const pageView = (url: string) => {
  if (!hasConsent() || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", { page_path: url });
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
) => {
  if (!hasConsent() || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
  });
};
