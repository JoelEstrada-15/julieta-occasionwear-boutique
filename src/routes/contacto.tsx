import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { CATEGORIES } from "@/lib/catalog";
import { SectionTitle } from "@/components/Layout";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Novias Julieta" },
      { name: "description", content: "Visítanos en Juárez #19, Col. Centro, La Barca, Jalisco, o escríbenos por WhatsApp." },
      { property: "og:title", content: "Contacto — Novias Julieta" },
      { property: "og:description", content: "Juárez #19, Col. Centro, La Barca, Jalisco." },
    ],
  }),
  component: Contacto,
});

const schema = z.object({
  nombre: z.string().trim().min(2, "Escribe tu nombre").max(100),
  telefono: z.string().trim().regex(/^[0-9 +()-]{10,20}$/, "Teléfono inválido (10 dígitos)"),
  email: z.string().trim().email("Correo inválido").max(255).or(z.literal("")),
  interes: z.string().min(1, "Selecciona una colección"),
  fecha: z.string().max(20),
  mensaje: z.string().trim().min(5, "Cuéntanos un poco más").max(1000),
});
type Form = z.infer<typeof schema>;
const empty: Form = { nombre: "", telefono: "", email: "", interes: "", fecha: "", mensaje: "" };

function Contacto() {
  const [f, setF] = useState<Form>(empty);
  const [err, setErr] = useState<Partial<Record<keyof Form, string>>>({});
  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(f);
    if (!r.success) {
      const out: Partial<Record<keyof Form, string>> = {};
      for (const i of r.error.issues) out[i.path[0] as keyof Form] ??= i.message;
      setErr(out);
      return;
    }
    setErr({});
    const d = r.data;
    const msg = `Hola, soy ${d.nombre}.\nTeléfono: ${d.telefono}${d.email ? `\nCorreo: ${d.email}` : ""}\nMe interesa: ${d.interes}${d.fecha ? `\nFecha del evento: ${d.fecha}` : ""}\n\n${d.mensaje}`;
    window.open(waLink(msg), "_blank", "noopener");
    setF(empty);
  };

  const input = "mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-2 text-foreground outline-none focus:border-gold";
  const label = "text-[10px] uppercase tracking-[0.25em] text-muted-foreground";
  const E = ({ k }: { k: keyof Form }) => (err[k] ? <p className="mt-1 text-xs text-destructive">{err[k]}</p> : null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle eyebrow="Contacto" title="Visítanos en la boutique" sub="Con gusto te atendemos en persona o por WhatsApp." />
      <div className="mt-14 grid gap-14 md:grid-cols-2">
        <div className="space-y-6">
          {[
            [MapPin, `${SITE.address}, ${SITE.city}`],
            [Phone, SITE.phoneDisplay],
            [Mail, SITE.email],
            [Clock, SITE.hours.join(" · ")],
          ].map(([Icon, t], i) => {
            const I = Icon as typeof MapPin;
            return <p key={i} className="flex gap-4 text-foreground"><I className="h-5 w-5 shrink-0 text-gold" />{t as string}</p>;
          })}
          <iframe title="Mapa de Novias Julieta" loading="lazy" className="mt-4 h-80 w-full border border-border"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&z=16&output=embed`} />
        </div>
        <form onSubmit={submit} noValidate className="space-y-6 bg-warm-white p-8 md:p-10">
          <div><label className={label}>Nombre completo<input className={input} value={f.nombre} onChange={set("nombre")} maxLength={100} /></label><E k="nombre" /></div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div><label className={label}>Teléfono<input className={input} value={f.telefono} onChange={set("telefono")} inputMode="tel" maxLength={20} /></label><E k="telefono" /></div>
            <div><label className={label}>Correo (opcional)<input className={input} type="email" value={f.email} onChange={set("email")} maxLength={255} /></label><E k="email" /></div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div><label className={label}>Me interesa<select className={input} value={f.interes} onChange={set("interes")}>
              <option value="">Selecciona…</option>
              {CATEGORIES.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
            </select></label><E k="interes" /></div>
            <div><label className={label}>Fecha del evento<input className={input} type="date" value={f.fecha} onChange={set("fecha")} /></label></div>
          </div>
          <div><label className={label}>Mensaje<textarea className={`${input} min-h-28 resize-none`} value={f.mensaje} onChange={set("mensaje")} maxLength={1000} /></label><E k="mensaje" /></div>
          <button type="submit" className="btn-primary w-full">Enviar por WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
