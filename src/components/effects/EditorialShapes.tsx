export function FloatingCircle({ className = "" }: { className?: string }) {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className={className}>
      <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

export function Dots({ className = "" }: { className?: string }) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className={className}>
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={10 + col * 20}
            cy={10 + row * 20}
            r="2"
            fill="currentColor"
            opacity="0.3"
          />
        )),
      )}
    </svg>
  );
}

export function WavyLine({ className = "" }: { className?: string }) {
  return (
    <svg width="160" height="20" viewBox="0 0 160 20" fill="none" className={className}>
      <path
        d="M0 10 Q20 0, 40 10 T80 10 T120 10 T160 10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SectionNumber({ num, className = "" }: { num: string; className?: string }) {
  return (
    <span className={`font-heading text-[120px] font-bold leading-none tracking-tighter text-forest/5 md:text-[200px] ${className}`}>
      {num}
    </span>
  );
}
