"use client";

const WHATSAPP = "654043313";
const MESSAGE = encodeURIComponent("Hello Gracie! I'd like to place a cake order 🎂");

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/237${WHATSAPP}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white font-semibold px-4 py-3.5 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.7)] hover:scale-105 transition-all duration-300 group"
    >
      {/* WhatsApp SVG */}
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.129.553 4.128 1.522 5.863L0 24l6.278-1.496A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.667-.5-5.2-1.376l-.371-.22-3.865.921.979-3.751-.243-.388A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
      <span className="text-sm hidden sm:block">Order via WhatsApp</span>
    </a>
  );
}
