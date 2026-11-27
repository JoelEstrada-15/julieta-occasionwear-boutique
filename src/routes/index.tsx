import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CATEGORIES, heroImg } from "@/lib/catalog";
import { SectionTitle } from "@/components/Layout";
import { ProductGrid } from "@/components/ProductGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novias Julieta — Viste tus momentos más especiales" },
      { name: "description", content: "Boutique en La Barca, Jalisco: vestidos de novia, XV años, primera comunión, bautizo y artículos religiosos." },
      { property: "og:title", content: "Novias Julieta — Viste tus momentos más especiales" },
      { property: "og:description", content: "Elegancia, fe y tradición en cada detalle." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative h-[calc(100vh-5rem)] min-h-[560px] overflow-hidden">
        <motion.img src={heroImg} alt="Novia con vestido de encaje en boutique" width={1920} height={1088}
          initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 8, ease: "easeOut" }}
          style={{ objectPosition: "57% 0%" }}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/30 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.3 }} className="max-w-xl text-ivory">
            <p className="text-xs uppercase tracking-[0.4em] text-champagne">Novias Julieta · La Barca</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] md:text-7xl">Viste tus momentos más especiales</h1>
            <p className="mt-6 font-serif text-xl italic text-champagne md:text-2xl">Elegancia, fe y tradición en cada detalle.</p>
            <Link to="/catalogo" search={{ cat: undefined }} className="btn-primary mt-10 bg-ivory text-espresso hover:text-ivory">Descubrir colección</Link>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle eyebrow="Colecciones" title="Nuestras colecciones" sub="Piezas seleccionadas para cada celebración de la vida." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <motion.div key={c.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.1, duration: 0.7 }}>
              <Link to="/catalogo" search={{ cat: c.id }} className="group relative block overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" width={768} height={1024} className="aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-ivory">
                  <h3 className="font-serif text-3xl">{c.name}</h3>
                  <span className="mt-3 inline-block border-b border-champagne pb-1 text-[10px] uppercase tracking-[0.3em] text-champagne">Ver modelos</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Catálogo" title="Descubre nuestros modelos" />
          <ProductGrid />
          <div className="mt-14 text-center"><Link to="/catalogo" search={{ cat: undefined }} className="btn-outline">Ver catálogo completo</Link></div>
        </div>
      </section>
    </>
  );
}
