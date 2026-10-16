import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Revelar from "@/components/Revelar";
import ProyectoCard from "@/components/ProyectoCard";
import FormularioContacto from "@/components/FormularioContacto";
import { empresa, fabricacion, nosotros, proyectos } from "@/lib/data";

const pilares = [
  { t: "Fabricación propia", d: "Taller de madera, metal y Solid Surface: controlamos calidad y plazos." },
  { t: "Instalación", d: "Equipos de montaje propios en obra, en España y en el extranjero." },
  { t: "Normativa", d: "Documentación laboral y de prevención exigida por cada país y cliente." },
  { t: "Llave en mano", d: "Contratación directa o subcontratación por oficios." },
];

export default function Inicio() {
  return (
    <>
      <Hero />

      {/* NOSOTROS */}
      <section className="seccion" id="nosotros">
        <div className="contenedor">
          <Revelar>
            <span className="etiqueta">Nosotros</span>
            <h2 className="display titulo-seccion">Del taller<br />a la obra</h2>
          </Revelar>
          <div className="nosotros-grid">
            <Revelar>
              <p className="nosotros-destacado">
                Responsables de la <strong>fabricación, suministro e instalación</strong> de todos los elementos
                constructivos y decorativos, interiores y exteriores.
              </p>
            </Revelar>
            <Revelar retraso={120} className="nosotros-texto">
              {nosotros.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </Revelar>
          </div>
          <div className="pilares">
            {pilares.map((p, i) => (
              <Revelar key={p.t} retraso={i * 80} className="pilar">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* FABRICACIÓN */}
      <section className="seccion seccion-oscura" id="fabricacion">
        <div className="contenedor">
          <Revelar className="cabecera-seccion">
            <div>
              <span className="etiqueta">Fabricación</span>
              <h2 className="display titulo-seccion">Tres materiales,<br />un solo equipo</h2>
            </div>
            <p>Diseñamos y fabricamos en nuestras instalaciones de Narón para entregar cada pieza lista para instalar.</p>
          </Revelar>
          <div className="fab-grid">
            {fabricacion.map((f, i) => (
              <Revelar key={f.titulo} retraso={i * 120} className="fab-card">
                <div className="fab-img">
                  <Image src={f.imagen} alt={f.titulo} fill sizes="(min-width: 900px) 33vw, 100vw" />
                </div>
                <div className="fab-cuerpo">
                  <span className="indice">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{f.titulo}</h3>
                  <ul>{f.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </div>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="seccion" id="numeros">
        <div className="contenedor">
          <Revelar>
            <span className="etiqueta">Números JSO</span>
            <h2 className="display titulo-seccion">Presencia<br />internacional</h2>
          </Revelar>
          <div className="numeros-grid">
            <Revelar className="mapa">
              <div className="mapa-img">
                <Image src={empresa.mapaPaises} alt="Países en los que ha trabajado Grupo JSO" fill sizes="(min-width: 1000px) 55vw, 100vw" />
              </div>
            </Revelar>
            <Revelar retraso={120} className="datos-grid">
              <div className="dato"><div className="valor">3<span>+</span></div><div className="desc">Especialidades de fabricación</div></div>
              <div className="dato"><div className="valor">{proyectos.length}</div><div className="desc">Líneas de proyecto</div></div>
              <div className="dato"><div className="valor">360<span>°</span></div><div className="desc">Fabricación, suministro e instalación</div></div>
              <div className="dato"><div className="valor">∞</div><div className="desc">Proyectos a medida</div></div>
            </Revelar>
          </div>
          <Revelar className="banner-numeros">
            <Image src={empresa.bannerNumeros} alt="Grupo JSO en cifras" fill sizes="(min-width: 1280px) 1200px, 100vw" />
          </Revelar>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="seccion seccion-oscura" id="proyectos" style={{ paddingBottom: 0 }}>
        <div className="contenedor">
          <Revelar className="cabecera-seccion">
            <div>
              <span className="etiqueta">Proyectos</span>
              <h2 className="display titulo-seccion">Obra<br />realizada</h2>
            </div>
            <Link href="/proyectos" className="btn btn-linea">Todos los proyectos <span className="flecha">→</span></Link>
          </Revelar>
        </div>
        <div className="proyectos-grid destacado" style={{ marginTop: 64 }}>
          {proyectos.slice(0, 9).map((p, i) => <ProyectoCard key={p.slug} p={p} indice={i} />)}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="seccion seccion-oscura" id="contacto">
        <div className="contenedor">
          <Revelar>
            <span className="etiqueta">Contacto</span>
            <h2 className="display titulo-seccion">Hablemos de<br />tu proyecto</h2>
          </Revelar>
          <div className="contacto-grid">
            <Revelar>
              <div className="contacto-bloque">
                <h3>{empresa.direccion.region}</h3>
                <p>{empresa.direccion.calle}<br />{empresa.direccion.poligono}<br />{empresa.direccion.cp}</p>
              </div>
              <div className="contacto-bloque">
                <h3>Email</h3>
                <p><a href={`mailto:${empresa.email}`}>{empresa.email}</a></p>
              </div>
              <div className="contacto-bloque" id="trabaja">
                <h3>Trabaja con nosotros</h3>
                <p>Envía tu CV a <a href={`mailto:${empresa.email}?subject=CV`}>{empresa.email}</a></p>
              </div>
              <div className="sello">
                <Image src={empresa.sello} alt="Certificación Grupo JSO" fill sizes="200px" />
              </div>
            </Revelar>
            <Revelar retraso={120}>
              <FormularioContacto />
            </Revelar>
          </div>
        </div>
      </section>
    </>
  );
}
