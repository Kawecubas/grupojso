"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Galeria({ imagenes, titulo }: { imagenes: string[]; titulo: string }) {
  const [abierta, setAbierta] = useState<number | null>(null);
  const total = imagenes.length;

  const mover = useCallback(
    (d: number) => setAbierta((i) => (i === null ? i : (i + d + total) % total)),
    [total]
  );

  useEffect(() => {
    if (abierta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierta(null);
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [abierta, mover]);

  return (
    <>
      <div className="galeria">
        {imagenes.map((src, i) => (
          <button key={src} onClick={() => setAbierta(i)} aria-label={`Ampliar imagen ${i + 1} de ${titulo}`}>
            <Image
              src={src}
              alt={`${titulo} — imagen ${i + 1}`}
              width={1200}
              height={900}
              sizes="(min-width: 1000px) 33vw, (min-width: 640px) 50vw, 100vw"
              style={{ height: "auto" }}
            />
          </button>
        ))}
      </div>

      {abierta !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Galería ${titulo}`} onClick={() => setAbierta(null)}>
          <div className="lightbox-img" onClick={(e) => e.stopPropagation()}>
            <Image src={imagenes[abierta]} alt={`${titulo} — imagen ${abierta + 1}`} fill sizes="92vw" quality={90} />
          </div>
          <button className="lightbox-btn lightbox-cerrar" onClick={() => setAbierta(null)} aria-label="Cerrar">✕</button>
          <button className="lightbox-btn lightbox-prev" onClick={(e) => { e.stopPropagation(); mover(-1); }} aria-label="Anterior">←</button>
          <button className="lightbox-btn lightbox-next" onClick={(e) => { e.stopPropagation(); mover(1); }} aria-label="Siguiente">→</button>
          <div className="lightbox-contador">{abierta + 1} / {total}</div>
        </div>
      )}
    </>
  );
}
