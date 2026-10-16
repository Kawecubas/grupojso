import Link from "next/link";

export default function NoEncontrado() {
  return (
    <section className="cabecera-pagina" style={{ minHeight: "80vh" }}>
      <div className="contenedor">
        <span className="etiqueta">Error 404</span>
        <h1 className="display">Página no encontrada</h1>
        <p>La página que buscas no existe o ha cambiado de dirección.</p>
        <div style={{ marginTop: 32 }}>
          <Link href="/" className="btn btn-primario">Volver al inicio <span className="flecha">→</span></Link>
        </div>
      </div>
    </section>
  );
}
