import logoDorado from "@/assets/logo-novias-julieta-dorado.png.asset.json";
import logoChampagne from "@/assets/logo-novias-julieta-champagne.png.asset.json";

export function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <img
      src={dark ? logoChampagne.url : logoDorado.url}
      alt="Novias Julieta"
      width={794}
      height={290}
      decoding="async"
      className={className}
    />
  );
}
