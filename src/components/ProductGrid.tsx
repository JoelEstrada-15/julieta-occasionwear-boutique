import { motion } from "motion/react";
import { CATEGORIES, PRODUCTS, type CategoryId } from "@/lib/catalog";
import { waLink } from "@/lib/site";

export function ProductGrid({ cat }: { cat?: CategoryId | undefined }) {
  const items = cat ? PRODUCTS.filter((p) => p.cat === cat) : PRODUCTS;
  return (
    <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <motion.article key={p.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.6 }} className="group">
          <div className="overflow-hidden bg-muted">
            <img src={p.img} alt={p.name} loading="lazy" width={768} height={1024} className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-gold">{CATEGORIES.find((c) => c.id === p.cat)?.name}</p>
          <h3 className="mt-2 font-serif text-2xl text-foreground">{p.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
          <a href={waLink(`Hola, quisiera consultar la disponibilidad del ${p.name}.`)} target="_blank" rel="noreferrer" className="btn-outline mt-5">Consultar disponibilidad</a>
        </motion.article>
      ))}
    </div>
  );
}
