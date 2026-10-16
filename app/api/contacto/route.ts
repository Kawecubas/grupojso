import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const limpiar = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud no válida." }, { status: 400 });
  }

  // Campo trampa: si viene relleno, es un bot. Respondemos OK sin hacer nada.
  if (limpiar(body.web)) return NextResponse.json({ ok: true });

  const datos = {
    nombre: limpiar(body.nombre, 120),
    empresa: limpiar(body.empresa, 120),
    email: limpiar(body.email, 200),
    telefono: limpiar(body.telefono, 40),
    servicio: limpiar(body.servicio, 80),
    mensaje: limpiar(body.mensaje, 5000),
  };

  if (!datos.nombre || !datos.mensaje) {
    return NextResponse.json({ error: "Nombre y mensaje son obligatorios." }, { status: 422 });
  }
  if (!esEmail(datos.email)) {
    return NextResponse.json({ error: "Introduce un email válido." }, { status: 422 });
  }
  if (!body.privacidad) {
    return NextResponse.json({ error: "Debes aceptar el tratamiento de datos." }, { status: 422 });
  }

  const texto = [
    `Nombre: ${datos.nombre}`,
    `Empresa: ${datos.empresa || "-"}`,
    `Email: ${datos.email}`,
    `Teléfono: ${datos.telefono || "-"}`,
    `Tipo de proyecto: ${datos.servicio || "-"}`,
    "",
    datos.mensaje,
  ].join("\n");

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACTO_DESTINO } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.info("[contacto] SMTP no configurado. Mensaje recibido:\n" + texto);
    return NextResponse.json({ ok: true });
  }

  try {
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 587),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transport.sendMail({
      from: `"Web Grupo JSO" <${SMTP_USER}>`,
      to: CONTACTO_DESTINO || "info@grupojso.com",
      replyTo: datos.email,
      subject: `Nueva consulta web — ${datos.nombre}${datos.servicio ? ` (${datos.servicio})` : ""}`,
      text: texto,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contacto] Error SMTP", err);
    return NextResponse.json({ error: "No se pudo enviar el mensaje. Escríbenos a info@grupojso.com." }, { status: 500 });
  }
}
