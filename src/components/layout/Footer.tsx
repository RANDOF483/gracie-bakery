import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const WHATSAPP = "654043313";

// Inline SVG brand icons (safe – no lucide-react dependency for brands)
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.129.553 4.128 1.522 5.863L0 24l6.278-1.496A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.667-.5-5.2-1.376l-.371-.22-3.865.921.979-3.751-.243-.388A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#3D2B1F] text-[#FAF7F2]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <h3 className="font-serif text-3xl font-bold text-[#C5A059]">
              Gracie<span className="text-[#FAF7F2]">.</span>
            </h3>
            <p className="text-[#FAF7F2]/70 text-sm leading-relaxed max-w-xs">
              Crafting unforgettable moments with premium, bespoke cakes and elegant desserts in Buea, Cameroon.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a href={`https://wa.me/237${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                className="text-[#FAF7F2]/70 hover:text-[#C5A059] transition-colors duration-200">
                <WhatsAppIcon />
              </a>
              <a href="#" className="text-[#FAF7F2]/70 hover:text-[#C5A059] transition-colors duration-200">
                <InstagramIcon />
              </a>
              <a href="#" className="text-[#FAF7F2]/70 hover:text-[#C5A059] transition-colors duration-200">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {[
                { href: "/shop", label: "Cake Catalog" },
                { href: "/custom-order", label: "Custom Orders" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#FAF7F2]/70 hover:text-[#C5A059] transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="w-3 h-px bg-[#C5A059] opacity-0 group-hover:opacity-100 transition-all" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest">Contact Us</h4>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start gap-3">
                {/* Location pin inline SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-sm text-[#FAF7F2]/70">Molyko, Buea<br />South West Region, Cameroon</span>
              </div>
              <a href={`tel:+237${WHATSAPP}`} className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span className="text-sm text-[#FAF7F2]/70 group-hover:text-[#C5A059] transition-colors">
                  +237 {WHATSAPP}
                </span>
              </a>
              <a href="mailto:hello@graciebakes.cm" className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span className="text-sm text-[#FAF7F2]/70 group-hover:text-[#C5A059] transition-colors">
                  hello@graciebakes.cm
                </span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest">Stay in Touch</h4>
            <p className="text-sm text-[#FAF7F2]/70">
              Subscribe for exclusive deals, new flavors, and bakery updates.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 text-white placeholder:text-[#FAF7F2]/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition"
              />
              <button
                type="button"
                className="bg-[#C5A059] text-[#3D2B1F] font-semibold rounded-xl px-4 py-3 text-sm hover:bg-[#E8C97A] transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#FAF7F2]/50">
            © {new Date().getFullYear()} Gracie Bakery. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-[#FAF7F2]/50">
            <Link href="/admin" className="hover:text-[#C5A059] transition-colors font-semibold">Admin Portal</Link>
            <Link href="/privacy" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#C5A059] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
