import type { SVGProps } from "react";

// Ícones de traço desenhados para o Lab3D (24×24, stroke 1.5).
// Inline para evitar dependência de uma biblioteca inteira por ~10 ícones.
const PATHS = {
  tooth: (
    <path d="M7.5 3C5 3 3.5 4.9 3.5 7.3c0 2.3 1 3.9 1.6 6 .5 1.9.8 4.1 1.6 6 .4.9 1.5.9 1.8 0l1.2-4.1c.3-1 1.2-1.6 2.3-1.6s2 .6 2.3 1.6l1.2 4.1c.3.9 1.4.9 1.8 0 .8-1.9 1.1-4.1 1.6-6 .6-2.1 1.6-3.7 1.6-6C20.5 4.9 19 3 16.5 3c-1.9 0-2.7 1-4.5 1S9.4 3 7.5 3Z" />
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
      <circle cx="12" cy="10" r="2.5" />
      <path d="M12 6v1.5M12 12.5V14M8 10h1.5M14.5 10H16" />
    </>
  ),
  mesh: (
    <>
      <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M12 12 20 7.5M12 12v9M12 12 4 7.5" />
    </>
  ),
  scanner: (
    <>
      <path d="M14 3.5 20.5 10 17 13.5 10.5 7 14 3.5Z" />
      <path d="M12.5 9 4 17.5 6.5 20 15 11.5" />
      <path d="M19.5 15.5c.8.8.8 2.2 0 3M21.5 14c1.6 1.6 1.6 4.4 0 6" />
    </>
  ),
  tool: (
    <>
      <path d="m14.5 4.5 5 5" />
      <path d="M17 2 22 7l-9.5 9.5-5-5L17 2Z" />
      <path d="m7.5 11.5-4 8.5 8.5-4" />
    </>
  ),
  chat: (
    <>
      <path d="M20.5 12a8.5 8.5 0 0 1-12.3 7.6L3.5 20.5l1-4.4A8.5 8.5 0 1 1 20.5 12Z" />
      <path d="M8.5 10.5h7M8.5 13.5h4.5" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5 4.8 16.4A8.5 8.5 0 1 1 8 19.4l-4.5 1.1Z" />
      <path d="M9 8.6c0 3.4 3 6.4 6.4 6.4l1-1.6-2-1-.9.7a5.2 5.2 0 0 1-2.6-2.6l.7-.9-1-2L9 8.6Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
} as const;

export type IconName = keyof typeof PATHS;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: 12 | 14 | 16 | 18 | 20 | 24;
}

export function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}
