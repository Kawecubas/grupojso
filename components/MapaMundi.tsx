// Mapa mundial en SVG generado en el servidor (cero JavaScript en el navegador).
// Pinta los países en los que ha trabajado Grupo JSO y marca cada uno con un punto.
import { geoCentroid, geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import mundo from "world-atlas/countries-110m.json";
import { paises } from "@/lib/data";

const ANCHO = 1000;
const ALTO = 500;

type Props = { name: string };

const topo = mundo as unknown as Topology<{ countries: GeometryCollection<Props> }>;
const todos = feature(topo, topo.objects.countries) as FeatureCollection<Geometry, Props>;
// Quitamos la Antártida para aprovechar el espacio
const tierra = todos.features.filter((f) => f.properties.name !== "Antarctica");

const proyeccion = geoNaturalEarth1().fitExtent(
  [[0, 0], [ANCHO, ALTO]],
  { type: "FeatureCollection", features: tierra } as FeatureCollection
);
const trazo = geoPath(proyeccion);

const activos = new Set(paises.map((p) => p.en));
const porNombre = new Map(tierra.map((f) => [f.properties.name, f]));

const puntos = paises
  .map((p) => {
    const f = porNombre.get(p.en) as Feature | undefined;
    const lonlat = p.coord ?? (f ? geoCentroid(f) : null);
    const xy = lonlat ? proyeccion(lonlat as [number, number]) : null;
    return xy ? { nombre: p.nombre, x: xy[0], y: xy[1] } : null;
  })
  .filter((p): p is { nombre: string; x: number; y: number } => p !== null);

export default function MapaMundi() {
  return (
    <svg
      className="mapa-mundi"
      viewBox={`0 0 ${ANCHO} ${ALTO}`}
      role="img"
      aria-label={`Mapa con los ${paises.length} países en los que ha trabajado Grupo JSO`}
    >
      <g>
        {tierra.map((f, i) => {
          const activo = activos.has(f.properties.name);
          return (
            <path
              key={`${f.properties.name}-${i}`}
              d={trazo(f) ?? undefined}
              className={activo ? "pais activo" : "pais"}
            >
              {activo && <title>{paises.find((p) => p.en === f.properties.name)?.nombre}</title>}
            </path>
          );
        })}
      </g>
      <g>
        {puntos.map((p) => (
          <g key={p.nombre} className="punto" transform={`translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`}>
            <circle className="halo" r="7" />
            <circle className="nucleo" r="2.6" />
            <title>{p.nombre}</title>
          </g>
        ))}
      </g>
    </svg>
  );
}
