"use client";

import { useState, type FormEvent } from "react";
import { proyectos } from "@/lib/data";

type Estado = { tipo: "inicial" } | { tipo: "enviando" } | { tipo: "ok" } | { tipo: "error"; mensaje: string };

export default function FormularioContacto() {
  const [estado, setEstado] = useState<Estado>({ tipo: "inicial" });

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = Object.fromEntries(new FormData(form));
    setEstado({ tipo: "enviando" });
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "No se pudo enviar el mensaje.");
      setEstado({ tipo: "ok" });
      form.reset();
    } catch (err) {
      setEstado({ tipo: "error", mensaje: err instanceof Error ? err.message : "Error inesperado." });
    }
  }

  return (
    <form className="form" onSubmit={enviar} noValidate={false}>
      <div className="doble">
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" required autoComplete="name" />
        </div>
        <div className="campo">
          <label htmlFor="empresa">Empresa</label>
          <input id="empresa" name="empresa" autoComplete="organization" />
        </div>
      </div>
      <div className="doble">
        <div className="campo">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="campo">
          <label htmlFor="telefono">Teléfono</label>
          <input id="telefono" name="telefono" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="campo">
        <label htmlFor="servicio">Tipo de proyecto</label>
        <select id="servicio" name="servicio" defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          {proyectos.map((p) => (
            <option key={p.slug} value={p.titulo}>{p.titulo}</option>
          ))}
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div className="campo">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" required placeholder="Cuéntanos tu proyecto…" />
      </div>
      {/* Campo trampa anti-spam: oculto para personas */}
      <input type="text" name="web" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden />

      {estado.tipo === "ok" && <div className="form-estado ok">¡Gracias por tu mensaje! Te responderemos lo antes posible.</div>}
      {estado.tipo === "error" && <div className="form-estado error">{estado.mensaje}</div>}

      <div className="form-pie">
        <label className="form-legal">
          <input type="checkbox" name="privacidad" required />
          Acepto el tratamiento de mis datos para responder a esta consulta.
        </label>
        <button className="btn btn-primario" type="submit" disabled={estado.tipo === "enviando"}>
          {estado.tipo === "enviando" ? "Enviando…" : <>Enviar <span className="flecha">→</span></>}
        </button>
      </div>
    </form>
  );
}
