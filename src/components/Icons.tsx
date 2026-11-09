type P = { className?: string };

export const PhoneIcon = ({ className = "h-5 w-5" }: P) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" />
  </svg>
);

export const TextIcon = ({ className = "h-5 w-5" }: P) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5h16v11H9l-5 4V5z" />
    <circle cx="9" cy="10.5" r="0.6" fill="currentColor" />
    <circle cx="12" cy="10.5" r="0.6" fill="currentColor" />
    <circle cx="15" cy="10.5" r="0.6" fill="currentColor" />
  </svg>
);

export const CameraIcon = ({ className = "h-5 w-5" }: P) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

export const StarIcon = ({ className = "h-4 w-4" }: P) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="currentColor">
    <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6L1.3 7.8l6.1-.7z" />
  </svg>
);

export const ArrowIcon = ({ className = "h-4 w-4" }: P) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);
