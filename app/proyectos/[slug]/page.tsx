import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Galeria from "@/components/Galeria";
import { portada, proyectos } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = proyectos.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.titulo,
    description: p.descripcion,
    openGraph: { images: [{ url: portada(p) }] },
  };
}

export default async function ProyectoPagina({ params }: Props) {
  const { slug } = await params;
  const i = proyectos.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = proyectos[i];
  const anterior = proyectos[(i - 1 + proyectos.length) % proyectos.length];
  const siguiente = proyectos[(i + 1) % proyectos.length];

  return (
    <>
      <section className="cabecera-pagina">
        <div className="fondo"><Image src={portada(p)} alt="" fill sizes="100vw" priority /></div>
        <div className="contenedor">
          <div className="migas">
            <Link href="/">Inicio</Link> / <Link href="/proyectos">Proyectos</Link> / {p.titulo}
          </div>
          <span className="etiqueta">Proyecto {String(i + 1).padStart(2, "0")}</span>
          <h1 className="display">{p.titulo}</h1>
          <p>{p.descripcion}</p>
        </div>
      </section>

      <section style={{ background: "var(--papel)" }}>
        <div className="contenedor">
          <Galeria imagenes={p.imagenes} titulo={p.titulo} />
        </div>
      </section>

      <nav className="navegacion-proyectos" aria-label="Más proyectos">
        <Link href={`/proyectos/${anterior.slug}`}>
          <small>← Anterior</small>
          <strong>{anterior.titulo}</strong>
        </Link>
        <Link href={`/proyectos/${siguiente.slug}`}>
          <small>Siguiente →</small>
          <strong>{siguiente.titulo}</strong>
        </Link>
      </nav>

      <section className="cta">
        <div className="contenedor cta-inner">
          <h2 className="display">¿Un proyecto similar?</h2>
          <Link href="/#contacto" className="btn">Hablemos <span className="flecha">→</span></Link>
        </div>
      </section>
    </>
  );
}
