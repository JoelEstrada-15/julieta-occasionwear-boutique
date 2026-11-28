import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { CATEGORIES } from "@/lib/catalog";
import { SITE, waLink } from "@/lib/site";

const WA_MSG = "Hola, me gustaría recibir información sobre sus vestidos.";

export function Header() {
  const [open, setOpen] = useState(false);
  const nav = "text-xs uppercase tracking-[0.2em] text-foreground/80 hover:text-gold transition-colors";
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" aria-label="Inicio"><Logo className="h-11 w-auto" /></Link>
        <nav className="hidden items-center gap-9 lg:flex">
          <Link to="/" className={nav}>Inicio</Link>
          <div className="group relative">
            <Link to="/catalogo" search={{ cat: undefined }} className={`${nav} inline-flex items-center gap-1`}>
              Colecciones <ChevronDown className="h-3 w-3" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="border border-border bg-card p-3 shadow-xl">
                {CATEGORIES.map((c) => (
                  <Link key={c.id} to="/catalogo" search={{ cat: c.id }} className="block px-3 py-2 font-serif text-lg text-foreground hover:bg-muted hover:text-gold">{c.name}</Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/nosotros" className={nav}>Nosotros</Link>
          <Link to="/contacto" className={nav}>Contacto</Link>
          <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" className="btn-primary">Contáctanos</a>
        </nav>
        <button className="lg:hidden text-foreground" aria-label="Abrir menú" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4" onClick={() => setOpen(false)}>
            <Link to="/" className={nav}>Inicio</Link>
            <Link to="/catalogo" search={{ cat: undefined }} className={nav}>Colecciones</Link>
            {CATEGORIES.map((c) => (
              <Link key={c.id} to="/catalogo" search={{ cat: c.id }} className="pl-4 font-serif text-lg text-foreground/80">{c.name}</Link>
            ))}
            <Link to="/nosotros" className={nav}>Nosotros</Link>
            <Link to="/contacto" className={nav}>Contacto</Link>
            <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" className="btn-primary self-start">Contáctanos</a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <Logo dark className="h-12 w-auto" />
          <p className="mt-6 font-serif text-2xl italic text-champagne">Tus sueños, nuestra inspiración</p>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-champagne">Colecciones</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.id}><Link to="/catalogo" search={{ cat: c.id }} className="opacity-80 hover:text-champagne hover:opacity-100">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <h3 className="text-xs uppercase tracking-[0.25em] text-champagne">Visítanos</h3>
          <p className="flex gap-2 opacity-80"><MapPin className="h-4 w-4 shrink-0 text-champagne" />{SITE.address}, {SITE.city}</p>
          <p className="flex gap-2 opacity-80"><Phone className="h-4 w-4 text-champagne" />{SITE.phoneDisplay}</p>
          <p className="flex gap-2 opacity-80"><Mail className="h-4 w-4 text-champagne" />{SITE.email}</p>
          <div className="flex gap-4 pt-2 text-xs uppercase tracking-[0.2em]">
            <Link to="/nosotros" className="hover:text-champagne">Nosotros</Link>
            <Link to="/contacto" className="hover:text-champagne">Contacto</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-12 md:flex-row md:items-center md:justify-center md:gap-16">
          <div className="shrink-0 rounded-2xl bg-ivory p-6 shadow-xl">
            <img src="/images/escudo-cucei.svg" alt="Escudo del CUCEI" className="h-40 w-auto" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xs uppercase tracking-[0.25em] text-champagne">Proyecto académico</h3>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="inline uppercase tracking-[0.15em] text-champagne text-xs">Nombre del alumno: </dt>
                <dd className="inline opacity-90">Joel Emmanuel Estrada Mendoza</dd>
              </div>
              <div>
                <dt className="inline uppercase tracking-[0.15em] text-champagne text-xs">Materia: </dt>
                <dd className="inline opacity-90">Diseño de aplicaciones web, en la nube y móviles</dd>
              </div>
              <div>
                <dt className="inline uppercase tracking-[0.15em] text-champagne text-xs">Profesor: </dt>
                <dd className="inline opacity-90">Zeus Emanuel Gutiérrez Cobián</dd>
              </div>
              <div>
                <dt className="inline uppercase tracking-[0.15em] text-champagne text-xs">Calendario: </dt>
                <dd className="inline opacity-90">2026B</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-6 text-center text-xs opacity-60">© {new Date().getFullYear()} Novias Julieta · La Barca, Jalisco</div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ivory shadow-xl transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">{title}</h2>
      <div className="mx-auto mt-5 h-px w-16 bg-champagne" />
      {sub && <p className="mt-5 text-muted-foreground">{sub}</p>}
    </div>
  );
}
