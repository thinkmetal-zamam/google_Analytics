export const GA_ID = "G-36691JYF88";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Init config (after consent)
export const initGA = () => {
  if (!window.gtag) return;

  window.gtag("config", GA_ID, {
    anonymize_ip: true,
  });
};

// Page view
export const pageView = (url: string) => {
  if (!window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: url,
  });
};

// Custom event
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
) => {
  if (!window.gtag) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
  });
};
