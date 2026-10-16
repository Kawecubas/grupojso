"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/data";

const DURACION = 6000;

export default function Hero() {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setActual((i) => (i + 1) % heroSlides.length), DURACION);
    return () => clearTimeout(t);
  }, [actual]);

  return (
    <section className="hero" id="inicio">
      {heroSlides.map((s, i) => (
        <div key={s.img} className={`hero-slide ${i === actual ? "activo" : ""}`} aria-hidden={i !== actual}>
          <Image src={s.img} alt={s.etiqueta} fill sizes="100vw" priority={i === 0} quality={80} />
        </div>
      ))}

      <div className="contenedor hero-contenido">
        <span className="etiqueta">Metal · Madera · Solid Surface</span>
        <h1 className="display" style={{ marginTop: 22 }}>
          Construimos <em>a medida</em>
        </h1>
        <p className="hero-sub">
          Fabricación, suministro e instalación de elementos constructivos y decorativos para
          promotoras, constructoras, arquitectos e interioristas.
        </p>
        <div className="hero-acciones">
          <Link href="/proyectos" className="btn btn-primario">
            Ver proyectos <span className="flecha">→</span>
          </Link>
          <Link href="/#contacto" className="btn btn-linea">Contactar</Link>
        </div>

        <div className="hero-pie">
          <span>
            {String(actual + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")} — {heroSlides[actual].etiqueta}
          </span>
          <div className="hero-indicadores">
            {heroSlides.map((s, i) => (
              <button
                key={s.img}
                className={i === actual ? "activo" : ""}
                aria-label={`Ver ${s.etiqueta}`}
                onClick={() => setActual(i)}
              >
                <span />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
