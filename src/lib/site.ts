// Datos de contacto centralizados: edita aquí número, dirección y horarios.
export const SITE = {
  name: "Novias Julieta",
  whatsapp: "523931001337", // formato internacional sin "+"
  phoneDisplay: "393 100 1337",
  email: "contacto@noviasjulieta.mx",
  address: "Juárez #19, Col. Centro",
  city: "La Barca, Jalisco, México",
  hours: ["Lunes a sábado: 10:00 – 20:00", "Domingo: 11:00 – 15:00"],
  mapQuery: "Juárez 19, Centro, La Barca, Jalisco",
};
export const waLink = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
