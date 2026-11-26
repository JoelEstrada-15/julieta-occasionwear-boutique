export function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  const text = dark ? "var(--ivory)" : "var(--espresso)";
  return (
    <svg viewBox="0 0 260 64" className={className} role="img" aria-label="Novias Julieta">
      <defs>
        <linearGradient id="lg-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#D8C0A3" />
          <stop offset="1" stopColor="#9A7556" />
        </linearGradient>
      </defs>
      {/* Silueta de vestido con N y J */}
      <g fill="none" stroke="url(#lg-gold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="30" strokeWidth="1" />
        <path d="M27 12 C28 16 36 16 37 12 M27 12 L25 24 M37 12 L39 24 M25 24 C30 26 34 26 39 24 M25 24 C18 36 13 46 11 54 C22 58 42 58 53 54 C51 46 46 36 39 24" />
        <path d="M22 50 V36 L30 50 V36" />
        <path d="M40 36 V47 C40 51 35 51 34 48" />
      </g>
      <text x="74" y="34" fontFamily="'Cormorant Garamond', serif" fontSize="26" fill={text} letterSpacing="1">Novias Julieta</text>
      <text x="76" y="52" fontFamily="Montserrat, sans-serif" fontSize="8" fill="#9A7556" letterSpacing="4.5">BOUTIQUE · LA BARCA</text>
    </svg>
  );
}
