// Contenido e imágenes extraídos de https://www.grupojso.com
// Las imágenes se sirven desde el CDN de Wix (static.wixstatic.com) a través de next/image.
// Ejecuta `npm run descargar-imagenes` para guardarlas en /public y dejar de depender de Wix.

const WIX = "/img/";
const m = (id: string) => `${WIX}bf0d7d_${id}`;

export const empresa = {
  nombre: "Grupo JSO",
  lema: "Construcción, fabricación y montaje",
  subLema: "Metal, madera y Solid Surface · Montajes comerciales · Retail",
  email: "info@grupojso.com",
  // WhatsApp: número con prefijo de país, solo dígitos (ej.: España 34 + número → "34600123456").
  // Se puede definir también con la variable de entorno NEXT_PUBLIC_WHATSAPP.
  // Si queda vacío, el botón de WhatsApp no aparece.
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  whatsappMensaje: "Hola, Grupo JSO. Me gustaría recibir información sobre un proyecto.",
  direccion: {
    region: "Galicia",
    calle: "C/ González Navarro, 134-135",
    poligono: "Polígono Industrial Río do Pozo",
    cp: "15540 Narón (A Coruña)",
  },
  logo: m("ca146d8b2ec54840b324ee66ca0fac43~mv2_d_1328_1325_s_2.png"),
  sello: m("e8932a7f39124817b27a572192737e7c~mv2.png"),
  infografiaNumeros: m("061e403c44cc4f20b127ad586c7c238d~mv2_d_1600_2250_s_2.png"),
  mapaPaises: m("bf6709ab9b574d6e9bf66df29ba8c4ce~mv2.png"),
  bannerNumeros: m("6fa42f0088414f2bb8029857737d7ad1~mv2.png"),
};

export const nosotros = [
  "GRUPO JSO está especializado en el sector de la construcción y la madera. Somos responsables de la fabricación, suministro e instalación de todos los elementos constructivos y decorativos, tanto interiores como exteriores.",
  "Trabajamos para las promotoras, constructoras, arquitectos e interioristas más exigentes e importantes del sector, mediante contratación directa o en régimen de subcontratación por oficios, cumpliendo los requisitos más exigentes de tiempo y calidad.",
  "Tanto la empresa como nuestros trabajadores cuentan con todos los requisitos documentales y burocráticos, cumpliendo estrictamente con la normativa laboral y de prevención que cada país y cliente exige.",
];

export const fabricacion = [
  {
    titulo: "Carpintería de madera",
    imagen: m("b30bb43001394ec1b228453bc6d595b8~mv2_d_3024_4032_s_4_2.jpg"),
    items: [
      "Mobiliario",
      "Cocinas a medida",
      "Revestimientos y panelados",
      "Armarios y vestidores",
      "Escaleras y barandillas",
      "Puertas y ventanas",
      "Expositores PLV",
    ],
  },
  {
    titulo: "Carpintería metálica",
    imagen: m("20180f94ab9243cba7cdeddc720b5e8f~mv2.jpeg"),
    items: [
      "Estructura y cerrajería",
      "Trabajos en inox",
      "Mobiliario",
      "Cerramientos y portales",
      "Vidrios y escaparates",
      "PCI / Climatización",
      "Escaleras y barandillas",
    ],
  },
  {
    titulo: "Solid Surface",
    imagen: m("a428ee7339eb493e8461149e065c9e47~mv2_d_1600_1200_s_2.jpg"),
    items: [
      "Mobiliario de diseño",
      "Panelados y revestimientos",
      "Baños y sanitarios",
      "Encimeras y fregaderos",
      "Expositores",
      "Lámparas y señalética",
      "Elementos decorativos",
    ],
  },
];

export type Proyecto = {
  slug: string;
  titulo: string;
  descripcion: string;
  rutaAntigua: string; // URL del sitio Wix, para redirecciones 301
  portada: number; // índice de la imagen de portada
  imagenes: string[];
};

export const proyectos: Proyecto[] = [
  {
    slug: "muro-cortina",
    titulo: "Muro cortina",
    descripcion: "Fachadas acristaladas y sistemas de muro cortina para edificios corporativos, comerciales y residenciales.",
    rutaAntigua: "/proyecto-1",
    portada: 0,
    imagenes: [
      "1632ccd6a882430b930594bd783e211d~mv2_d_3264_2448_s_4_2.jpg",
      "985d848d5fc34abe9865e0dd634b54e4~mv2.jpg",
      "e5a734d4386342438896711258f8b9e8~mv2.jpg",
      "afd598f3494a44baa6a8a2a2e867ea6b~mv2_d_1600_1200_s_2.jpg",
      "125e3acb1ab64c43805a754664c4ec4d~mv2_d_1200_1600_s_2.jpg",
      "be198d4d8d714bd0976ac8cd137b5dde~mv2_d_1600_1200_s_2.jpg",
      "8a78e8bd340c4a56926b81695698f12e~mv2.jpg",
      "6c751701ea7c4992aab399981e5f3987~mv2.jpg",
      "cf249e8c3c394e2790678039e81b92c1~mv2.jpg",
    ].map(m),
  },
  {
    slug: "salones-de-juego",
    titulo: "Salones de juego",
    descripcion: "Interiorismo integral y montaje de salones de juego y casinos: mobiliario, revestimientos e iluminación.",
    rutaAntigua: "/proyecto-2",
    portada: 2,
    imagenes: [
      "a9a737fab11047aea6b5c175c02e5619~mv2.jpg",
      "edae1bf56cd54b3e97fc6c58f06173af~mv2.jpg",
      "6d0cfe6093ee4bbbbc8fedbf08c1e677~mv2.jpg",
      "b048f404dc3c4c879f0e4b3c61a2991e~mv2.jpg",
      "0ef23e25bc194f13b25c6e408dd6d481~mv2.jpg",
      "9fe87621246a4a0f8a65565fc1c8eb1f~mv2.jpg",
      "70bd7e68cb214b9cb224ed0f6637cd25~mv2.jpg",
      "fd79f46fd7e44416b06954cdd7d8d25f~mv2.jpg",
      "b3b4f7fa756d424fa462d9028b32d5c4~mv2.jpg",
    ].map(m),
  },
  {
    slug: "cerramientos",
    titulo: "Cerramientos",
    descripcion: "Cerramientos metálicos, portales y envolventes a medida para naves, locales y viviendas.",
    rutaAntigua: "/proyecto-3",
    portada: 0,
    imagenes: [
      "39575b718e5e493389a486e67bce154e~mv2_d_2592_1936_s_2.jpg",
      "eea19bbb0d7d4437b019e2b2ed591a53~mv2.jpg",
      "dd52d447f0eb4603a5411f4d2653013f~mv2.jpg",
      "3ba90d68c3044597b9d58bfd408458f7~mv2_d_1200_1600_s_2.jpg",
      "29585e3a9ee84891872aeddcd3289d78~mv2.jpg",
      "fc5377d97e344a50ae4afe5326cb46ec~mv2.jpg",
      "04b3f065771d4cfea0bc3864baa63410~mv2.jpg",
      "55fe26569f764af18463dfa8244ff073~mv2.jpg",
      "f5a26aaf9498430bb26a13d57155aa8f~mv2.jpg",
    ].map(m),
  },
  {
    slug: "hoteles-y-navios",
    titulo: "Hoteles y navíos",
    descripcion: "Carpintería, mobiliario y acabados de alta gama para hoteles y buques, con plazos ajustados y calidad naval.",
    rutaAntigua: "/proyecto-4",
    portada: 1,
    imagenes: [
      "d4051e0b9cc440e7bcfdc2d9a95d97db~mv2_d_1200_1600_s_2.jpg",
      "acf119242a1249679d530f6e5f4a73fd~mv2_d_1600_1200_s_2.jpg",
      "8568352434ac49ce96235c9fd93d420e~mv2_d_1600_1200_s_2.jpg",
      "15110be3320e4385a839fb24b83922a5~mv2_d_4032_3024_s_4_2.jpg",
      "f70532e66e934849b261f264105b5961~mv2_d_4032_3024_s_4_2.jpg",
      "166098b22cbf449486ee4cc945668df1~mv2_d_1200_1600_s_2.jpg",
      "f44daeb586d148eab00bcd34e0b1851a~mv2_d_4032_3024_s_4_2.jpg",
      "381fbe9349f04ede88de1c9a7016de45~mv2_d_1600_1200_s_2.jpg",
      "47148035f74249a48d9f777da627751e~mv2_d_1600_1200_s_2.jpg",
    ].map(m),
  },
  {
    slug: "retail",
    titulo: "Retail",
    descripcion: "Montajes comerciales llave en mano para tiendas y cadenas: mobiliario, expositores y escaparatismo.",
    rutaAntigua: "/montajes-comerciales",
    portada: 0,
    imagenes: [
      "5c80b5e45b4a4501b24cca21fb8e9d11~mv2.jpg",
      "23f8305a097b4eddba2df9015b62e103~mv2.jpg",
      "33c18c0f8c9748a5a0c988f163efbe70~mv2.jpg",
      "ea9ac3c5182147ec8dafe6fe6053b398~mv2.jpg",
      "838c308c67f842d7bd5015bbe7b730aa~mv2.jpeg",
      "cfcd87af49b34cf8984904c5ca30c255~mv2_d_1600_1200_s_2.jpg",
      "72a01310c81147949a3107a89ede3baa~mv2.jpg",
      "98685cb3f6b64c0483d3edecc9481984~mv2.jpg",
      "458c152526054da29d00a1f9a7f9518a~mv2_d_1600_1200_s_2.jpg",
    ].map(m),
  },
  {
    slug: "acristalamientos",
    titulo: "Acristalamientos",
    descripcion: "Vidrios, escaparates, mamparas y barandillas de vidrio con perfilería metálica a medida.",
    rutaAntigua: "/acristalamientos",
    portada: 1,
    imagenes: [
      "59ce4864456c4911a1c7efb05e95e1cb~mv2.jpg",
      "9b71e870fca24325a2c7b959e4ff54ea~mv2_d_4032_3024_s_4_2.jpg",
      "b707a2fa74e44a2c8ced1c7b727dc025~mv2_d_1600_1200_s_2.jpg",
      "4c2f0cfd90da44a5bfaba3e1cce159a6~mv2.jpg",
      "4f9a7148c43e4911a7eec660463f2731~mv2_d_4032_3024_s_4_2.jpg",
      "82cb95455dbe48d299a2d89a55cd9f1e~mv2_d_3024_4032_s_4_2.jpg",
      "31eb2b551abc41189ad2b06dbfaeccb3~mv2_d_4032_3024_s_4_2.jpg",
      "251680da8314456ea723b8094ce6d161~mv2_d_4032_3024_s_4_2.jpg",
      "619db6787c9b4ce1bda943b031f1343a~mv2_d_3024_4032_s_4_2.jpg",
    ].map(m),
  },
  {
    slug: "estructuras",
    titulo: "Estructuras",
    descripcion: "Estructuras metálicas, cerrajería pesada, escaleras y plataformas fabricadas e instaladas por nuestro equipo.",
    rutaAntigua: "/estructuras",
    portada: 3,
    imagenes: [
      "7094e3f3e2aa4db98c066ac5bfff9325~mv2_d_1200_1600_s_2.jpg",
      "f1f1b8f5931947fea5772d73c4f55d27~mv2.jpg",
      "1648553445fd4a73995e41dae43020a5~mv2_d_1200_1600_s_2.jpg",
      "e888a61684064fc3885ecb4c1a6a6e08~mv2.jpg",
      "50c758f0b9144db2bf0c4f6adaeef68e~mv2.jpg",
      "26480dc5c6324ddf9f48e6680a3aff73~mv2.jpg",
      "f4b73d0600434e59b66506a4600fa343~mv2.jpg",
      "915c502ed78241a5b96b33c23e41385a~mv2_d_1600_1200_s_2.jpg",
      "5a532ba87f5640f5ad663c9f3b35c26b~mv2_d_1600_1200_s_2.jpg",
    ].map(m),
  },
  {
    slug: "solid-surface",
    titulo: "Solid Surface",
    descripcion: "Mobiliario de diseño, encimeras, baños y revestimientos en Solid Surface, con juntas invisibles y formas continuas.",
    rutaAntigua: "/obra-civil",
    portada: 0,
    imagenes: [
      "4852a6ed74ab4a27a52fcbc8e3ca88e7~mv2.jpg",
      "858d73ded6574835875bcd44ea3da820~mv2.jpg",
      "c45c2a90f9a64d90b71c376a1a92a34e~mv2.jpg",
      "5640c3d26d7a4a75b1522425b43286f8~mv2_d_4032_3024_s_4_2.jpg",
      "d48dbeb8e9db4980bfcf2a9cf5e7e132~mv2_d_3840_2160_s_2.jpg",
      "bd5542963dd241b488d89d57616b6810~mv2_d_4032_3024_s_4_2.jpg",
      "0398cf3648fa4182bbeb008c07eb0d9a~mv2_d_1600_1200_s_2.jpg",
      "7a5d4fd6ef87488491f801cedbfacb48~mv2.jpg",
      "87758beb1f7e4682931bad2e2d1f2eba~mv2.jpg",
    ].map(m),
  },
  {
    slug: "cocinas",
    titulo: "Cocinas",
    descripcion: "Cocinas a medida en madera y Solid Surface, diseñadas, fabricadas y montadas en nuestro taller.",
    rutaAntigua: "/cocinas",
    portada: 0,
    imagenes: [
      "72df4c7890e541f8a2d9420411ca0af3~mv2.jpg",
      "e1aea83e63c84057bca403c6cb25fb50~mv2.jpg",
      "26b0f1ffa02141cca259ea1c380e46ca~mv2.jpg",
      "6ca3356903ec45eb9deb62b9a9c0098a~mv2.jpg",
      "e30a11d2451b4cd5912a41cf7f57d04d~mv2.jpg",
      "11f2c9438d7f46968b99d73249c0afea~mv2.jpg",
      "6e0049cd9de040cf815615aa2fbb1c27~mv2.jpg",
      "3cec37244a4443bfb3e33a65ce980f25~mv2.jpg",
      "fa1d515801be486da17dbfb21ddeacca~mv2.jpg",
    ].map(m),
  },
  {
    slug: "clima-pci",
    titulo: "Clima / PCI",
    descripcion: "Instalaciones de climatización y protección contra incendios integradas en la obra.",
    rutaAntigua: "/pintura",
    portada: 1,
    imagenes: [
      "7995edcf1928471eb264f6a9b806ecad~mv2.png",
      "77bac35dfadc4f38ae2aea2a9af36340~mv2.jpg",
      "6fd145230878412d8cf9c954396fafde~mv2.jpg",
      "e9ca144ee4af42efaad459d222e4fd63~mv2.jpg",
      "b63e4a2dc1c84353a60802eda0bb564e~mv2.png",
      "a62a4fd22cd44a9891629a6d50530241~mv2.jpg",
      "e35384cec02b4cdb98ced242f20501bb~mv2.png",
      "3b8a2c3bfaa14168817b3151e0daa41c~mv2.jpg",
      "4830c81e4bed4a2ebbe99f691fbe1a80~mv2.jpg",
    ].map(m),
  },
  {
    slug: "fotovoltaica",
    titulo: "Fotovoltaica",
    descripcion: "Instalaciones fotovoltaicas sobre cubierta y estructura, desde el soporte metálico hasta la puesta en marcha.",
    rutaAntigua: "/almacenes",
    portada: 1,
    imagenes: [
      "48b4023e010143a894cc67c3f05c81d4~mv2_d_3024_4032_s_4_2.jpg",
      "5eee50d4521b42de8a8e15ae37d6ab29~mv2_d_4032_3024_s_4_2.jpg",
      "ba124a6754ed4f9b93b2e40e13f8fe95~mv2.jpg",
      "3abc5b9b703a44208cb0aaa69b5bd80d~mv2.jpg",
      "fff545fd2f1d4b34a4f603d297a21a73~mv2_d_3024_4032_s_4_2.jpg",
      "51c98a3b2c2f420db3d05f9490fb7fee~mv2.jpg",
      "824802defee94210bd8208cf8395ef65~mv2.jpg",
      "6ad5af262db24a4b82bc6ec469f0c9fe~mv2_d_4032_3024_s_4_2.jpg",
      "d73f849500d349d5903331117ae57da5~mv2_d_3024_4032_s_4_2.jpg",
    ].map(m),
  },
  {
    slug: "llave-en-mano",
    titulo: "Llave en mano",
    descripcion: "Gestionamos el proyecto completo: diseño, fabricación, coordinación de oficios e instalación final.",
    rutaAntigua: "/solid-surface",
    portada: 1,
    imagenes: [
      "b4d4ab4db2734c58b7d1d1d72e1fcdaf~mv2.jpg",
      "93271f4a953a48e8be413baa38e945ae~mv2.jpg",
      "f72f78f1026e4823a6510129e1641ead~mv2_d_1600_1200_s_2.jpg",
      "17ef8ac57c7a45df8e124da0ad6aeb98~mv2_d_3024_4032_s_4_2.jpg",
      "c15804c8c65847009401e96f7f227238~mv2.jpg",
      "7588396381aa45f496e408f3d48e9a39~mv2.jpg",
      "e3e25c0fa4054ccdb9571e00deed504f~mv2.png",
      "757a42d41ffb4f17a46f3adf5e5062e4~mv2.png",
      "5f5e709570424a6eb10fd4f31a894583~mv2.png",
    ].map(m),
  },
];

export const portada = (p: Proyecto) => p.imagenes[p.portada] ?? p.imagenes[0];

// Países donde Grupo JSO ha trabajado (lista del sitio original).
// "en" = nombre del país en el mapa (world-atlas). "coord" solo para países que el mapa no dibuja.
export type Pais = { nombre: string; en: string; region: Region; coord?: [number, number] };
export type Region = "Europa" | "América" | "Oriente Medio y Asia" | "África";

export const paises: Pais[] = [
  { nombre: "España", en: "Spain", region: "Europa" },
  { nombre: "Portugal", en: "Portugal", region: "Europa" },
  { nombre: "Francia", en: "France", region: "Europa" },
  { nombre: "Reino Unido", en: "United Kingdom", region: "Europa" },
  { nombre: "Islandia", en: "Iceland", region: "Europa" },
  { nombre: "Bélgica", en: "Belgium", region: "Europa" },
  { nombre: "Países Bajos", en: "Netherlands", region: "Europa" },
  { nombre: "Alemania", en: "Germany", region: "Europa" },
  { nombre: "Austria", en: "Austria", region: "Europa" },
  { nombre: "Italia", en: "Italy", region: "Europa" },
  { nombre: "Suecia", en: "Sweden", region: "Europa" },
  { nombre: "Finlandia", en: "Finland", region: "Europa" },
  { nombre: "Estonia", en: "Estonia", region: "Europa" },
  { nombre: "Lituania", en: "Lithuania", region: "Europa" },
  { nombre: "Polonia", en: "Poland", region: "Europa" },
  { nombre: "República Checa", en: "Czechia", region: "Europa" },
  { nombre: "Eslovaquia", en: "Slovakia", region: "Europa" },
  { nombre: "Croacia", en: "Croatia", region: "Europa" },
  { nombre: "Serbia", en: "Serbia", region: "Europa" },
  { nombre: "Rumanía", en: "Romania", region: "Europa" },
  { nombre: "Ucrania", en: "Ukraine", region: "Europa" },
  { nombre: "Grecia", en: "Greece", region: "Europa" },
  { nombre: "México", en: "Mexico", region: "América" },
  { nombre: "Colombia", en: "Colombia", region: "América" },
  { nombre: "Brasil", en: "Brazil", region: "América" },
  { nombre: "Paraguay", en: "Paraguay", region: "América" },
  { nombre: "Uruguay", en: "Uruguay", region: "América" },
  { nombre: "Argentina", en: "Argentina", region: "América" },
  { nombre: "Chile", en: "Chile", region: "América" },
  { nombre: "Turquía", en: "Turkey", region: "Oriente Medio y Asia" },
  { nombre: "Georgia", en: "Georgia", region: "Oriente Medio y Asia" },
  { nombre: "Líbano", en: "Lebanon", region: "Oriente Medio y Asia" },
  { nombre: "Israel", en: "Israel", region: "Oriente Medio y Asia" },
  { nombre: "Jordania", en: "Jordan", region: "Oriente Medio y Asia" },
  { nombre: "Arabia Saudí", en: "Saudi Arabia", region: "Oriente Medio y Asia" },
  { nombre: "Kuwait", en: "Kuwait", region: "Oriente Medio y Asia" },
  { nombre: "Baréin", en: "Bahrain", region: "Oriente Medio y Asia", coord: [50.55, 26.07] },
  { nombre: "Catar", en: "Qatar", region: "Oriente Medio y Asia" },
  { nombre: "Dubái (EAU)", en: "United Arab Emirates", region: "Oriente Medio y Asia" },
  { nombre: "India", en: "India", region: "Oriente Medio y Asia" },
  { nombre: "Vietnam", en: "Vietnam", region: "Oriente Medio y Asia" },
  { nombre: "Marruecos", en: "Morocco", region: "África" },
];

export const regiones: Region[] = ["Europa", "América", "Oriente Medio y Asia", "África"];

// Foto de fondo de la sección "Números JSO" (cámbiala por cualquier otra imagen)
export const fondoNumeros = m("e5a734d4386342438896711258f8b9e8~mv2.jpg");

export const heroSlides = [
  { img: proyectos[0].imagenes[0], etiqueta: "Muro cortina" },
  { img: proyectos[8].imagenes[0], etiqueta: "Cocinas" },
  { img: proyectos[4].imagenes[0], etiqueta: "Retail" },
  { img: proyectos[3].imagenes[1], etiqueta: "Hoteles y navíos" },
];

export const navegacion = [
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#fabricacion", label: "Fabricación" },
  { href: "/#numeros", label: "Números JSO" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/#contacto", label: "Contacto" },
];

export const whatsappUrl = () =>
  empresa.whatsapp
    ? `https://wa.me/${empresa.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(empresa.whatsappMensaje)}`
    : null;

// Formato legible del número: +34 600 123 456
export const whatsappLegible = () => {
  const d = empresa.whatsapp.replace(/\D/g, "");
  if (!d) return "";
  return `+${d.slice(0, 2)} ${d.slice(2).replace(/(\d{3})(?=\d)/g, "$1 ")}`;
};
