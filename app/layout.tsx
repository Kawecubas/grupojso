import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { empresa } from "@/lib/data";
import "./globals.css";

const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.grupojso.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: "Grupo JSO | Construcción, fabricación y montaje",
    template: "%s | Grupo JSO",
  },
  description:
    "Fabricación, suministro e instalación de carpintería de madera, carpintería metálica y Solid Surface. Montajes comerciales, retail, hoteles, muro cortina y proyectos llave en mano.",
  keywords: ["Grupo JSO", "carpintería metálica", "carpintería de madera", "Solid Surface", "montajes comerciales", "retail", "muro cortina", "Narón", "A Coruña", "Galicia"],
  icons: { icon: empresa.logo, apple: empresa.logo },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Grupo JSO",
    title: "Grupo JSO | Construcción, fabricación y montaje",
    description: "Metal, madera y Solid Surface. Montajes comerciales y retail.",
    images: [{ url: "https://static.wixstatic.com/media/bf0d7d_1632ccd6a882430b930594bd783e211d~mv2_d_3264_2448_s_4_2.jpg" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0e0e0d" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Grupo JSO",
  url,
  email: empresa.email,
  logo: empresa.logo,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${empresa.direccion.calle}, ${empresa.direccion.poligono}`,
    postalCode: "15540",
    addressLocality: "Narón",
    addressRegion: "A Coruña",
    addressCountry: "ES",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Inter:wght@400;500;600&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
