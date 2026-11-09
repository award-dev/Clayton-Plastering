/** "Owner to confirm" note: styled like a carpenter-pencil mark on fresh plaster. */
export function Confirm({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`confirm ${className}`}>
      <svg aria-hidden="true" width="13" height="13" viewBox="0 0 16 16" className="shrink-0 translate-y-[1px]">
        <path d="M2 14l1.2-4.2L11.5 1.5l3 3-8.3 8.3L2 14z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9.5 3.5l3 3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span>
        <strong>Owner to confirm:</strong> {children}
      </span>
    </span>
  );
}
