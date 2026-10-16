import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProyectoCard from "@/components/ProyectoCard";
import { portada, proyectos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Muro cortina, retail, hoteles y navíos, estructuras, Solid Surface, cocinas, fotovoltaica y proyectos llave en mano de Grupo JSO.",
};

export default function Proyectos() {
  return (
    <>
      <section className="cabecera-pagina">
        <div className="fondo"><Image src={portada(proyectos[4])} alt="" fill sizes="100vw" priority /></div>
        <div className="contenedor">
          <div className="migas"><Link href="/">Inicio</Link> / Proyectos</div>
          <span className="etiqueta">{proyectos.length} líneas de trabajo</span>
          <h1 className="display">Proyectos</h1>
          <p>Una selección de obras fabricadas e instaladas por nuestro equipo. Pulsa cada categoría para ver la galería completa.</p>
        </div>
      </section>
      <section style={{ background: "var(--negro)", paddingBottom: 4 }}>
        <div className="proyectos-grid" style={{ marginTop: 0 }}>
          {proyectos.map((p, i) => <ProyectoCard key={p.slug} p={p} indice={i} />)}
        </div>
      </section>
      <section className="cta">
        <div className="contenedor cta-inner">
          <h2 className="display">¿Tienes un proyecto en mente?</h2>
          <Link href="/#contacto" className="btn">Pide presupuesto <span className="flecha">→</span></Link>
        </div>
      </section>
    </>
  );
}
