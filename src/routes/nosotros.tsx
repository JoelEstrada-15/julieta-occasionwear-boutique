import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { heroImg } from "@/lib/catalog";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Novias Julieta" },
      { name: "description", content: "Tradición y elegancia para cada ocasión en el centro de La Barca, Jalisco." },
      { property: "og:title", content: "Nosotros — Novias Julieta" },
      { property: "og:description", content: "Tradición y elegancia para cada ocasión." },
    ],
  }),
  component: Nosotros,
});

function Nosotros() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="relative">
        <div className="absolute -left-4 -top-4 h-full w-full border border-champagne" />
        <img src={heroImg} alt="Interior de la boutique Novias Julieta" width={1920} height={1088} className="relative aspect-[4/5] w-full object-cover" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
        <p className="text-xs uppercase tracking-[0.35em] text-gold">Nuestra historia</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-foreground">Tradición y elegancia para cada ocasión</h1>
        <div className="mt-6 h-px w-16 bg-champagne" />
        <p className="mt-6 leading-relaxed text-muted-foreground">En Novias Julieta acompañamos a las familias de La Barca en los momentos que marcan su vida: el día de la boda, los XV años, la primera comunión y el bautizo de sus pequeños.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">Seleccionamos cada vestido, traje y accesorio con cuidado, combinando la belleza de la tradición con diseños actuales. Te recibimos con atención personalizada para que encuentres la pieza perfecta.</p>
        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8 text-center">
          {[["Novia", "Elegancia"], ["XV años", "Ilusión"], ["Sacramentos", "Fe"]].map(([a, b]) => (
            <div key={a}><p className="font-serif text-2xl text-gold">{b}</p><p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{a}</p></div>
          ))}
        </div>
        <Link to="/contacto" className="btn-primary mt-10">Agenda tu visita</Link>
      </motion.div>
    </section>
  );
}
