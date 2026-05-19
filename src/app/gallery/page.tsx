"use client";
import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

const WHATSAPP = "654043313";
const WA_LINK = (name: string) =>
  `https://wa.me/237${WHATSAPP}?text=${encodeURIComponent(`Hello Gracie! I love the "${name}" cake I saw in your gallery. Can I order something similar? 🎂`)}`;

const CATEGORIES = [
  "All",
  "White Wedding",
  "Traditional Marriage",
  "Birthday",
  "Graduation",
  "Anniversary",
  "Baby Shower",
  "Corporate",
];

const GALLERY_ITEMS = [
  // White Wedding
  {
    id: 1,
    name: "Pure Elegance Tier",
    category: "White Wedding",
    emoji: "🤍",
    bg: "from-white to-[#F8F0E8]",
    accent: "#C5A059",
    description: "Three-tier pristine white fondant cake with ivory roses and gold leaf accents.",
    price: "From 75,000 FCFA",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Royal Lace Cascade",
    category: "White Wedding",
    emoji: "👰",
    bg: "from-[#FAF7F2] to-[#F2EAE0]",
    accent: "#C5A059",
    description: "Delicate lace pattern fondant cake with cascading sugar flowers and pearl details.",
    price: "From 90,000 FCFA",
    badge: null,
  },
  {
    id: 3,
    name: "Minimalist Garden",
    category: "White Wedding",
    emoji: "🌿",
    bg: "from-white to-[#E8F0E8]",
    accent: "#6B8E6B",
    description: "Clean white cake with fresh greenery, white orchids and gold geometric accents.",
    price: "From 65,000 FCFA",
    badge: "Popular",
  },

  // Traditional Marriage
  {
    id: 4,
    name: "Cameroon Heritage Tier",
    category: "Traditional Marriage",
    emoji: "🇨🇲",
    bg: "from-[#8B4513]/15 to-[#C5A059]/20",
    accent: "#8B4513",
    description: "Rich Cameroonian-inspired design with kente patterns in gold and green fondant.",
    price: "From 55,000 FCFA",
    badge: "Our Signature",
  },
  {
    id: 5,
    name: "Golden Raffia Elegance",
    category: "Traditional Marriage",
    emoji: "✨",
    bg: "from-[#C5A059]/25 to-[#8B4513]/10",
    accent: "#C5A059",
    description: "Two-tier cake with hand-painted African motifs, edible gold and raffia detailing.",
    price: "From 50,000 FCFA",
    badge: null,
  },
  {
    id: 6,
    name: "Bamileke Celebration",
    category: "Traditional Marriage",
    emoji: "🎊",
    bg: "from-[#FFD700]/20 to-[#8B4513]/15",
    accent: "#DAA520",
    description: "Vibrant tiered cake with traditional Bamileke geometric patterns and bold colors.",
    price: "From 60,000 FCFA",
    badge: "New",
  },

  // Birthday
  {
    id: 7,
    name: "Birthday Confetti Burst",
    category: "Birthday",
    emoji: "🎉",
    bg: "from-[#FF9AA2]/25 to-[#FAD2E1]/30",
    accent: "#FF6B8A",
    description: "Funfetti cake with rainbow layers, confetti buttercream and gold number toppers.",
    price: "From 15,000 FCFA",
    badge: "Kids Favorite",
  },
  {
    id: 8,
    name: "Luxury Gold Birthday",
    category: "Birthday",
    emoji: "🎂",
    bg: "from-[#C5A059]/20 to-[#FAF7F2]",
    accent: "#C5A059",
    description: "Sophisticated dark chocolate drip cake with gold leaf and macarons on top.",
    price: "From 25,000 FCFA",
    badge: "Popular",
  },
  {
    id: 9,
    name: "Princess Dream Cake",
    category: "Birthday",
    emoji: "👸",
    bg: "from-[#FFB6C1]/25 to-[#FAD2E1]/20",
    accent: "#FF69B4",
    description: "Pastel pink tower cake with edible butterflies, stars and a sculpted crown topper.",
    price: "From 20,000 FCFA",
    badge: null,
  },
  {
    id: 10,
    name: "Football Club Special",
    category: "Birthday",
    emoji: "⚽",
    bg: "from-[#228B22]/15 to-[#FAF7F2]",
    accent: "#228B22",
    description: "Custom themed birthday cake with your favorite club's colors and edible jersey.",
    price: "From 18,000 FCFA",
    badge: null,
  },

  // Graduation
  {
    id: 11,
    name: "Cap & Scroll Celebration",
    category: "Graduation",
    emoji: "🎓",
    bg: "from-[#1B2A4A]/12 to-[#C5A059]/15",
    accent: "#1B2A4A",
    description: "Navy and gold graduation cake with 3D fondant diploma, cap and academic motifs.",
    price: "From 22,000 FCFA",
    badge: "Best Seller",
  },
  {
    id: 12,
    name: "Scholar's Triumph",
    category: "Graduation",
    emoji: "📜",
    bg: "from-[#C5A059]/20 to-[#FAF7F2]",
    accent: "#C5A059",
    description: "Elegant two-tier cake with edible certificate, graduation year and school colors.",
    price: "From 28,000 FCFA",
    badge: null,
  },
  {
    id: 13,
    name: "PhD Achievement Tier",
    category: "Graduation",
    emoji: "👨‍🎓",
    bg: "from-[#4B0082]/10 to-[#FAF7F2]",
    accent: "#4B0082",
    description: "Premium three-tier cake with purple and gold university colors, books and stars.",
    price: "From 45,000 FCFA",
    badge: "Luxury",
  },

  // Anniversary
  {
    id: 14,
    name: "Golden Years Tier",
    category: "Anniversary",
    emoji: "💛",
    bg: "from-[#FFD700]/20 to-[#FAF7F2]",
    accent: "#DAA520",
    description: "Gold anniversary cake with mirror glaze, number topper and edible gold roses.",
    price: "From 35,000 FCFA",
    badge: "Popular",
  },
  {
    id: 15,
    name: "Silver Love Story",
    category: "Anniversary",
    emoji: "💍",
    bg: "from-[#C0C0C0]/20 to-[#FAF7F2]",
    accent: "#A8A9AD",
    description: "Silver and white anniversary cake with fondant photo frame and love script.",
    price: "From 30,000 FCFA",
    badge: null,
  },

  // Baby Shower
  {
    id: 16,
    name: "Baby Blue Dreams",
    category: "Baby Shower",
    emoji: "👶",
    bg: "from-[#87CEEB]/25 to-[#FAF7F2]",
    accent: "#4682B4",
    description: "Soft blue and white baby shower cake with teddy bear topper and booties.",
    price: "From 18,000 FCFA",
    badge: "Sweet",
  },
  {
    id: 17,
    name: "Little Princess",
    category: "Baby Shower",
    emoji: "🎀",
    bg: "from-[#FFB6C1]/30 to-[#FAF7F2]",
    accent: "#FF69B4",
    description: "Pink and white cake with edible baby shoes, bows and 'It's a Girl!' script.",
    price: "From 18,000 FCFA",
    badge: "Adorable",
  },

  // Corporate
  {
    id: 18,
    name: "Brand Identity Cake",
    category: "Corporate",
    emoji: "🏢",
    bg: "from-[#1B2A4A]/10 to-[#FAF7F2]",
    accent: "#1B2A4A",
    description: "Professional corporate cake with company logo, brand colors and edible business cards.",
    price: "From 40,000 FCFA",
    badge: "Professional",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-[#FAF7F2] min-h-screen">

        {/* Hero */}
        <section className="bg-[#3D2B1F] py-20 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='0.06'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <p className="text-[#C5A059] text-sm font-semibold uppercase tracking-widest mb-4">Every Slice Tells a Story</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">Our Gallery</h1>
            <p className="text-white/60 max-w-xl mx-auto text-lg">
              Browse our portfolio of handcrafted masterpieces — from intimate birthdays to grand traditional celebrations.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-[#C5A059]/10 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 shrink-0 ${
                    activeCategory === cat
                      ? "bg-[#3D2B1F] text-white shadow-md"
                      : "bg-[#FAF7F2] text-[#3D2B1F] hover:bg-[#C5A059]/10 hover:text-[#C5A059]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="container mx-auto px-4 py-12">
          <p className="text-sm text-[#3D2B1F]/50 mb-8">
            {filtered.length} cake{filtered.length !== 1 ? "s" : ""} in{" "}
            <span className="font-semibold text-[#C5A059]">{activeCategory}</span>
          </p>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item)}
                className="break-inside-avoid group bg-white rounded-[1.75rem] border border-[#3D2B1F]/6 shadow-[0_4px_24px_rgba(61,43,31,0.06)] hover:shadow-[0_12px_40px_rgba(197,160,89,0.2)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Image/Emoji display */}
                <div
                  className={`relative bg-gradient-to-br ${item.bg} flex items-center justify-center`}
                  style={{ aspectRatio: item.id % 3 === 0 ? "1/1" : item.id % 2 === 0 ? "4/5" : "4/3" }}
                >
                  <span className="text-8xl group-hover:scale-110 transition-transform duration-500 select-none">
                    {item.emoji}
                  </span>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-[#3D2B1F]/90 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    {item.badge && (
                      <span className="bg-[#C5A059] text-white text-xs font-bold px-3 py-1 rounded-full">
                        ✦ {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#3D2B1F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-[1.75rem]">
                    <span className="text-white font-semibold text-sm bg-white/20 backdrop-blur px-5 py-2.5 rounded-full border border-white/30">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-[#3D2B1F] leading-tight">{item.name}</h3>
                  <p className="text-xs text-[#3D2B1F]/60 mt-1.5 leading-relaxed line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-bold text-[#C5A059] text-sm">{item.price}</span>
                    <span className="text-xs text-[#3D2B1F]/40 group-hover:text-[#C5A059] transition-colors">
                      Tap to order →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="container mx-auto px-4 pb-16">
          <div className="bg-gradient-to-br from-[#3D2B1F] to-[#6B4C3B] rounded-[2rem] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 text-[12rem] leading-none opacity-5 select-none font-serif">🎂</div>
            <p className="text-[#C5A059] text-sm font-semibold uppercase tracking-widest mb-4">Ready to Order?</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Seen Something You Love?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Every cake in our gallery can be custom-made for your occasion. Reach out and let's create your perfect cake.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/custom-order"
                className="inline-flex items-center gap-2 bg-[#C5A059] text-[#3D2B1F] font-bold px-8 py-4 rounded-full hover:bg-[#E8C97A] transition-all duration-300 shadow-md"
              >
                Request Custom Cake
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/237${WHATSAPP}?text=${encodeURIComponent("Hello Gracie! I saw your gallery and I'd love to order a cake 🎂")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.129.553 4.128 1.522 5.863L0 24l6.278-1.496A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.667-.5-5.2-1.376l-.371-.22-3.865.921.979-3.751-.243-.388A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-[2rem] max-w-md w-full shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal image */}
            <div className={`bg-gradient-to-br ${selected.bg} aspect-square flex items-center justify-center relative`}>
              <span className="text-[8rem] select-none">{selected.emoji}</span>
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-[#3D2B1F]/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {selected.category}
                </span>
                {selected.badge && (
                  <span className="bg-[#C5A059] text-white text-xs font-bold px-3 py-1 rounded-full">
                    ✦ {selected.badge}
                  </span>
                )}
              </div>
            </div>

            <div className="p-7 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#3D2B1F]">{selected.name}</h3>
              <p className="text-[#3D2B1F]/70 text-sm leading-relaxed">{selected.description}</p>
              <div className="flex items-center justify-between py-4 border-y border-[#3D2B1F]/8">
                <div>
                  <p className="text-xs text-[#3D2B1F]/40 uppercase tracking-wide">Starting price</p>
                  <p className="font-bold text-[#C5A059] text-xl">{selected.price}</p>
                </div>
                <span className="text-sm text-[#3D2B1F]/50 bg-[#FAF7F2] px-3 py-1.5 rounded-full">
                  {selected.category}
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href={WA_LINK(selected.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#3D2B1F] text-white font-semibold py-3.5 rounded-2xl hover:bg-[#C5A059] transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="#25D366" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.129.553 4.128 1.522 5.863L0 24l6.278-1.496A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.667-.5-5.2-1.376l-.371-.22-3.865.921.979-3.751-.243-.388A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Order This Cake
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="px-5 py-3.5 rounded-2xl border border-[#3D2B1F]/15 text-[#3D2B1F] font-medium hover:bg-[#FAF7F2] transition-colors text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
