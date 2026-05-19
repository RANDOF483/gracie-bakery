"use client";
import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/custom-order", label: "Custom Order" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-[#C5A059]/15 shadow-[0_2px_20px_rgba(61,43,31,0.06)]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-bold text-[#3D2B1F] tracking-tight transition-colors group-hover:text-[#C5A059]">
            Gracie<span className="text-[#C5A059]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#3D2B1F]/80 hover:text-[#C5A059] transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/shop"
            className="p-2.5 text-[#3D2B1F] hover:text-[#C5A059] transition-colors relative"
            aria-label="Shop"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C5A059] rounded-full ring-2 ring-white" />
          </Link>
          <Link
            href="/custom-order"
            className="hidden md:inline-flex items-center gap-2 bg-[#3D2B1F] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#C5A059] transition-all duration-300 shadow-sm"
          >
            Order Now
          </Link>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-[#3D2B1F]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#C5A059]/10 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-base font-medium text-[#3D2B1F] hover:text-[#C5A059] transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/custom-order"
            className="inline-flex w-full justify-center bg-[#C5A059] text-white font-semibold px-5 py-3 rounded-full hover:bg-[#3D2B1F] transition-all duration-300 mt-2"
            onClick={() => setOpen(false)}
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
