"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { empresa, navegacion } from "@/lib/data";

export default function Header() {
  const [solido, setSolido] = useState(false);
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolido(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
  }, [abierto]);

  return (
    <>
      <header className={`header ${solido || abierto ? "solido" : ""}`}>
        <div className="contenedor header-inner">
          <Link href="/" className="marca" aria-label="Grupo JSO — Inicio" onClick={() => setAbierto(false)}>
            <span className="marca-logo">
              <Image src={empresa.logo} alt="Logo Grupo JSO" fill sizes="46px" style={{ objectFit: "contain" }} priority />
            </span>
            <span className="marca-texto">
              Grupo JSO
              <small>Construcción · Fabricación</small>
            </span>
          </Link>

          <nav className="nav" aria-label="Principal">
            {navegacion.slice(0, -1).map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <Link href="/#contacto" className="btn btn-primario">Pide presupuesto</Link>
          </nav>

          <button
            className="menu-boton"
            aria-label="Abrir menú"
            aria-expanded={abierto}
            onClick={() => setAbierto((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`menu-movil ${abierto ? "abierto" : ""}`} aria-hidden={!abierto}>
        {[{ href: "/", label: "Inicio" }, ...navegacion].map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setAbierto(false)} tabIndex={abierto ? 0 : -1}>
            {item.label}
          </Link>
        ))}
        <div className="datos">
          {empresa.email}<br />
          {empresa.direccion.cp}
        </div>
      </div>
    </>
  );
}
