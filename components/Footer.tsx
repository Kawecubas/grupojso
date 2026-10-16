import Image from "next/image";
import Link from "next/link";
import { empresa, navegacion, proyectos } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor">
        <div className="footer-marca">
          <div className="footer-logo">
            <Image src={empresa.logo} alt="Logo Grupo JSO" fill sizes="160px" style={{ objectFit: "contain" }} />
          </div>
          <div className="footer-marca-texto">
            <span className="nombre">Grupo JSO</span>
            <span className="lema">{empresa.lema}</span>
          </div>
        </div>
        <div className="footer-cols">
          <div>
            <h4>Sede</h4>
            <p style={{ margin: 0, fontSize: 15 }}>
              {empresa.direccion.calle}<br />
              {empresa.direccion.poligono}<br />
              {empresa.direccion.cp}
            </p>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li><a href={`mailto:${empresa.email}`}>{empresa.email}</a></li>
              <li><Link href="/#contacto">Formulario de contacto</Link></li>
              <li><Link href="/#trabaja">Trabaja con nosotros</Link></li>
            </ul>
          </div>
          <div>
            <h4>Navegación</h4>
            <ul>
              {navegacion.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4>Proyectos</h4>
            <ul>
              {proyectos.slice(0, 6).map((p) => <li key={p.slug}><Link href={`/proyectos/${p.slug}`}>{p.titulo}</Link></li>)}
            </ul>
          </div>
        </div>
        <div className="footer-legal">
          <span>© {new Date().getFullYear()} Grupo JSO. Todos los derechos reservados.</span>
          <span>{empresa.lema}</span>
        </div>
      </div>
    </footer>
  );
}
