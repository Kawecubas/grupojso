import Image from "next/image";
import Link from "next/link";
import { portada, type Proyecto } from "@/lib/data";

export default function ProyectoCard({ p, indice }: { p: Proyecto; indice: number }) {
  return (
    <Link href={`/proyectos/${p.slug}`} className="proyecto-card">
      <Image src={portada(p)} alt={p.titulo} fill sizes="(min-width: 1000px) 33vw, (min-width: 640px) 50vw, 100vw" />
      <span className="proyecto-ver" aria-hidden>→</span>
      <div className="proyecto-info">
        <span className="indice">{String(indice + 1).padStart(2, "0")}</span>
        <h3>{p.titulo}</h3>
        <p>{p.descripcion}</p>
      </div>
    </Link>
  );
}
