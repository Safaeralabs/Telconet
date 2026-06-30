type IconProps = { className?: string };

const base = "h-6 w-6";

export const Icons: Record<string, (p: IconProps) => React.ReactElement> = {
  fiber: ({ className }) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  ),
  support: ({ className }) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 13a8 8 0 0116 0" />
      <rect x="2" y="13" width="4" height="6" rx="1" />
      <rect x="18" y="13" width="4" height="6" rx="1" />
      <path d="M20 19a3 3 0 01-3 3h-3" />
    </svg>
  ),
  wifi: ({ className }) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5a10 10 0 0114 0" />
      <path d="M8.5 16a5 5 0 017 0" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
    </svg>
  ),
  bolt: ({ className }) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  ),
  map: ({ className }) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  ),
  building: ({ className }) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M8 7h2M8 11h2M8 15h2M14 7h2M14 11h2M14 15h2" />
    </svg>
  ),
  check: ({ className }) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  whatsapp: ({ className }) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.79 14.06c-.24.68-1.4 1.3-1.93 1.38-.49.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.8-4.17-4.94-4.36-.15-.2-1.19-1.58-1.19-3.02s.76-2.14 1.03-2.43c.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.59.82 2.03.89 2.18.07.15.12.32.02.51-.09.2-.14.32-.27.49-.14.17-.29.38-.41.51-.14.15-.28.3-.12.59.15.29.69 1.14 1.48 1.84 1.02.91 1.88 1.19 2.17 1.34.29.15.46.12.63-.07.17-.2.73-.85.92-1.14.2-.29.39-.24.66-.14.27.1 1.7.8 1.99.95.29.15.49.22.56.34.07.13.07.73-.17 1.41z" />
    </svg>
  ),
  arrow: ({ className }) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  gauge: ({ className }) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18a8 8 0 1116 0" />
      <path d="M12 14l4-3" />
      <circle cx="12" cy="14" r="1.3" fill="currentColor" />
    </svg>
  ),
  card: ({ className }) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 9.5h19M6 14.5h4" />
    </svg>
  ),
  user: ({ className }) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0114 0" />
    </svg>
  ),
  external: ({ className }) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h4" />
    </svg>
  ),
  shield: ({ className }) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};
