import React from "react";

export default function CookieIcon({
  size = 72,
  className = "",
}: Readonly<{ size?: number; className?: string }>) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="cookie icon"
    >
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="#F3C27B"
        stroke="#000"
        strokeWidth="1.5"
      />
      <circle cx="22" cy="24" r="3.2" fill="#8B4F2F" />
      <circle cx="30" cy="18" r="2.8" fill="#8B4F2F" />
      <circle cx="40" cy="26" r="2.6" fill="#8B4F2F" />
      <circle cx="36" cy="36" r="3" fill="#8B4F2F" />
      <circle cx="26" cy="36" r="2.4" fill="#8B4F2F" />
    </svg>
  );
}
