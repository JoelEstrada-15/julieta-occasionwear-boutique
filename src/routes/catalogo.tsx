import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES, type CategoryId } from "@/lib/catalog";
import { SectionTitle } from "@/components/Layout";
import { ProductGrid } from "@/components/ProductGrid";

const ids = CATEGORIES.map((c) => c.id) as string[];

export const Route = createFileRoute("/catalogo")({
  validateSearch: (s: Record<string, unknown>): { cat: CategoryId | undefined } => ({
    cat: typeof s["cat"] === "string" && ids.includes(s["cat"]) ? (s["cat"] as CategoryId) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Catálogo — Novias Julieta" },
      { name: "description", content: "Descubre nuestros modelos de vestidos de novia, XV años, comunión, bautizo y accesorios." },
      { property: "og:title", content: "Catálogo — Novias Julieta" },
      { property: "og:description", content: "Descubre nuestros modelos y consulta disponibilidad por WhatsApp." },
    ],
  }),
  component: Catalogo,
});

function Catalogo() {
  const { cat } = Route.useSearch();
  const chip = (active: boolean) =>
    `border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors ${active ? "border-espresso bg-espresso text-ivory" : "border-border text-foreground hover:border-gold hover:text-gold"}`;
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle eyebrow="Catálogo" title="Descubre nuestros modelos" sub="Filtra por colección y consulta la disponibilidad de cada modelo." />
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link to="/catalogo" search={{ cat: undefined }} className={chip(!cat)}>Todos</Link>
        {CATEGORIES.map((c) => (
          <Link key={c.id} to="/catalogo" search={{ cat: c.id }} className={chip(cat === c.id)}>{c.name}</Link>
        ))}
      </div>
      <ProductGrid key={cat ?? "all"} cat={cat} />
    </section>
  );
}
