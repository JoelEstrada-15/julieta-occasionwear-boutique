import hero from "@/assets/hero-novia.jpg";
import novia2 from "@/assets/novia-2.jpg";
import xv from "@/assets/xv.jpg";
import cv from "@/assets/comunion-vestido.jpg";
import ct from "@/assets/comunion-traje.jpg";
import bautizo from "@/assets/bautizo.jpg";
import acc from "@/assets/accesorios.jpg";

export const heroImg = hero;
export const CATEGORIES = [
  { id: "novia", name: "Vestidos de novia", img: novia2 },
  { id: "xv", name: "Vestidos de XV años", img: xv },
  { id: "comunion-vestido", name: "Vestidos de primera comunión", img: cv },
  { id: "comunion-traje", name: "Trajes de primera comunión", img: ct },
  { id: "bautizo", name: "Vestidos y trajes de bautizo", img: bautizo },
  { id: "accesorios", name: "Accesorios y artículos religiosos", img: acc },
] as const;
export type CategoryId = (typeof CATEGORIES)[number]["id"];

export const PRODUCTS: { name: string; cat: CategoryId; desc: string; img: string }[] = [
  { name: "Modelo Aurora", cat: "novia", desc: "Corte sirena con encaje bordado y cola catedral.", img: novia2 },
  { name: "Modelo Celeste", cat: "novia", desc: "Encaje floral strapless con caída de tul.", img: hero },
  { name: "Modelo Valentina", cat: "xv", desc: "Corte princesa champagne con aplicaciones florales.", img: xv },
  { name: "Modelo Azucena", cat: "comunion-vestido", desc: "Tul y encaje con lazo de satín en la cintura.", img: cv },
  { name: "Traje Santiago", cat: "comunion-traje", desc: "Saco, chaleco y moño en tono marfil.", img: ct },
  { name: "Ropón Gracia", cat: "bautizo", desc: "Ropón de encaje con gorrito a juego.", img: bautizo },
  { name: "Set Bendición", cat: "accesorios", desc: "Rosario de perla, vela, tiara y velo de encaje.", img: acc },
];
