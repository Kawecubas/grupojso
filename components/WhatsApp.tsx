import { whatsappUrl } from "@/lib/data";

export function IconoWhatsApp({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" fill="currentColor">
      <path d="M16.04 3C9.4 3 4 8.36 4 14.96c0 2.1.56 4.16 1.62 5.97L4 29l8.3-2.17a12.1 12.1 0 0 0 3.74.6h.01C22.68 27.43 28 22.07 28 15.47 28 8.87 22.68 3 16.04 3zm0 22.4h-.01a10 10 0 0 1-5.1-1.4l-.37-.22-4.93 1.29 1.32-4.8-.24-.4a9.86 9.86 0 0 1-1.52-5.3c0-5.48 4.48-9.94 9.99-9.94 5.5 0 9.81 4.46 9.81 10.03 0 5.48-4.44 10.74-8.95 10.74zm5.48-7.43c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49a9.06 9.06 0 0 1-1.67-2.08c-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.78-.73 2.03-1.43.25-.7.25-1.31.18-1.43-.08-.13-.28-.2-.58-.35z" />
    </svg>
  );
}

export default function BotonWhatsApp() {
  const url = whatsappUrl();
  if (!url) return null;
  return (
    <a className="whatsapp-flotante" href={url} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp">
      <IconoWhatsApp />
      <span className="whatsapp-texto">¿Hablamos?</span>
    </a>
  );
}
