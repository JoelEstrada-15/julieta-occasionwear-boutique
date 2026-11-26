export function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <img
      src={dark ? "/images/novias-julieta-logo-champagne.svg" : "/images/novias-julieta-logo.svg"}
      alt="Novias Julieta"
      width={794}
      height={290}
      decoding="async"
      className={className}
    />
  );
}
