import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Star, Truck, Award, Clock } from "lucide-react";

const WHATSAPP = "654043313";
const WA_LINK = `https://wa.me/237${WHATSAPP}?text=${encodeURIComponent("Hello Gracie! I'd like to order a cake 🎂")}`;

const FEATURED_CAKES = [
  {
    name: "Red & Gold Birthday Splendor",
    category: "Birthday",
    price: "15,000 FCFA",
    description: "Vibrant red watercolor buttercream base with gold splatters, golden balls, and topper.",
    image: "/images/birthday_red_gold.png",
    bg: "from-[#FFD1DC] to-[#FAF7F2]",
  },
  {
    name: "Luxury Gold Foil Marble",
    category: "Fondant",
    price: "20,000 FCFA",
    description: "Exquisite beige-gold marble buttercream with raw golden leaf foil division and navy spheres.",
    image: "/images/gold_marble.png",
    bg: "from-[#C5A059]/20 to-[#FAF7F2]",
  },
  {
    name: "Ribbed Navy Rosette Classic",
    category: "Birthday",
    price: "18,000 FCFA",
    description: "Horizontal off-white ribbed borders decorated with navy rosettes and shiny silver rods.",
    image: "/images/ribbed_navy.png",
    bg: "from-[#FAF7F2] to-[#E0E7FF]/40",
  },
  {
    name: "Royal Navy Rosette Cupcakes",
    category: "Cupcakes",
    price: "12,000 FCFA",
    description: "Box of 6 gourmet cupcakes piped with dark navy rosettes, silver sprinkles, and glitter.",
    image: "/images/navy_cupcakes.png",
    bg: "from-[#F0F4FF] to-[#FAF7F2]",
  },
  {
    name: "Traditional Scotch Eggs Pastry",
    category: "Pastries",
    price: "5,000 FCFA",
    description: "Crispy breaded deep-fried seasoned meat wrap with soft-boiled egg center. Perfect Cameroonian savory snack.",
    image: "/images/scotch_eggs.png",
    bg: "from-[#E6F4EA] to-[#FAF7F2]",
  },
  {
    name: "Red Velvet Romance",
    category: "Anniversary",
    price: "22,000 FCFA",
    description: "Classic red velvet layers with cream cheese frosting, caramel shards, and fresh berries.",
    image: "/images/hero_cake.png",
    bg: "from-[#FF6B6B]/15 to-[#FAF7F2]",
  },
];

const TESTIMONIALS = [
  {
    name: "Marie-Claire N.",
    location: "Molyko, Buea",
    text: "Gracie made our wedding cake absolutely breathtaking. Everyone at the reception was asking about it. The quality and presentation were five-star!",
    rating: 5,
  },
  {
    name: "Emmanuel T.",
    location: "Limbe",
    text: "Ordered a birthday cake for my daughter and she cried happy tears! The design was exactly what we wanted, delivered on time. Will order again!",
    rating: 5,
  },
  {
    name: "Patricia A.",
    location: "Douala",
    text: "The chocolate fudge cake was rich, moist, and incredibly beautiful. Gracie is the best bakery I've ever used in Cameroon.",
    rating: 5,
  },
];

const STATS = [
  { value: "500+", label: "Cakes Delivered" },
  { value: "98%", label: "Happy Customers" },
  { value: "3+", label: "Years of Excellence" },
  { value: "24h", label: "Custom Quote Time" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">

        {/* ── HERO SECTION ── */}
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-[#F8F0E8] to-[#FAD2E1]/30 min-h-[92vh] flex items-center">
          {/* Decorative blobs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FAD2E1]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 py-20 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Text */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur rounded-full border border-[#C5A059]/20 px-4 py-2 text-sm text-[#3D2B1F]">
                <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                <span className="font-medium">Buea's Premier Cakes & Pastries Artisan</span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#3D2B1F] leading-[1.1] tracking-tight">
                Taste the{" "}
                <span className="text-[#C5A059] italic relative">
                  Elegance
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10 Q50 2 100 8 Q150 14 198 6" stroke="#C5A059" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5"/>
                  </svg>
                </span>{" "}
                in Every Bite.
              </h1>

              <p className="text-lg md:text-xl text-[#3D2B1F]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Bespoke birthday cakes, stunning wedding centerpieces, and premium desserts crafted with love in Buea — delivered to your doorstep.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/shop"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3D2B1F] text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-[#C5A059] transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(197,160,89,0.4)]"
                >
                  Browse Cakes
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#3D2B1F] font-semibold text-base px-8 py-4 rounded-full border-2 border-[#C5A059]/30 hover:border-[#C5A059] hover:bg-[#FAF7F2] transition-all duration-300 shadow-sm"
                >
                  {/* WhatsApp icon */}
                  <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.129.553 4.128 1.522 5.863L0 24l6.278-1.496A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.667-.5-5.2-1.376l-.371-.22-3.865.921.979-3.751-.243-.388A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Order on WhatsApp
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2">
                <div className="flex items-center gap-2 text-sm text-[#3D2B1F]/60">
                  <Truck className="w-4 h-4 text-[#C5A059]" />
                  <span>Buea · Limbe · Douala</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#3D2B1F]/60">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>24h Custom Quotes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#3D2B1F]/60">
                  <Award className="w-4 h-4 text-[#C5A059]" />
                  <span>Premium Ingredients</span>
                </div>
              </div>
            </div>

            {/* Visual hero card */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md mx-auto">
                {/* Main cake display card */}
                <div className="relative bg-gradient-to-br from-[#FAD2E1]/60 to-[#C5A059]/20 rounded-[2.5rem] p-10 text-center shadow-[0_30px_80px_rgba(61,43,31,0.15)] border border-white/80">
                  <div className="text-[10rem] leading-none animate-float select-none">🎂</div>
                  <div className="mt-4">
                    <p className="font-serif text-2xl font-bold text-[#3D2B1F]">Bespoke Cakes</p>
                    <p className="text-[#3D2B1F]/60 text-sm mt-1">Made fresh for every occasion</p>
                  </div>
                  {/* Gold ribbon accent */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md tracking-wide">
                    ✦ MADE IN BUEA ✦
                  </div>
                </div>

                {/* Floating stat cards */}
                <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(61,43,31,0.12)] flex items-center gap-3 border border-[#C5A059]/10">
                  <div className="w-10 h-10 bg-[#C5A059]/15 rounded-xl flex items-center justify-center text-xl">🚚</div>
                  <div>
                    <p className="font-bold text-sm text-[#3D2B1F]">Fast Delivery</p>
                    <p className="text-xs text-[#3D2B1F]/60">Citywide in Buea</p>
                  </div>
                </div>

                <div className="absolute -top-5 -right-8 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(61,43,31,0.12)] flex items-center gap-3 border border-[#C5A059]/10">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#3D2B1F]">5.0 Rating</p>
                    <p className="text-xs text-[#3D2B1F]/60">500+ happy clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS SECTION ── */}
        <section className="bg-[#3D2B1F] py-14">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-4xl md:text-5xl font-bold text-[#C5A059]">{stat.value}</p>
                  <p className="text-[#FAF7F2]/70 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED CAKES ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <p className="text-[#C5A059] font-semibold text-sm uppercase tracking-widest">Our Signature Collection</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D2B1F]">
                Baked for Your Moments
              </h2>
              <p className="text-[#3D2B1F]/60 text-lg">
                Every cake tells a story. Explore our most-loved creations, each handcrafted with the finest ingredients.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURED_CAKES.map((cake) => (
                <div
                  key={cake.name}
                  className="group bg-white rounded-[1.75rem] border border-[#3D2B1F]/6 shadow-[0_4px_24px_rgba(61,43,31,0.06)] hover:shadow-[0_12px_40px_rgba(197,160,89,0.2)] hover:-translate-y-2 transition-all duration-400 overflow-hidden flex flex-col"
                >
                  {/* Image area */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br overflow-hidden">
                    <img 
                      src={cake.image} 
                      alt={cake.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-semibold px-3 py-1.5 rounded-full text-[#3D2B1F] shadow-sm">
                      {cake.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-xl font-bold text-[#3D2B1F] mb-2">{cake.name}</h3>
                    <p className="text-sm text-[#3D2B1F]/60 flex-1 leading-relaxed">{cake.description}</p>
                    <div className="flex items-center justify-between mt-5 pt-5 border-t border-[#3D2B1F]/6">
                      <span className="font-bold text-[#C5A059] text-lg">{cake.price}</span>
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3D2B1F] hover:text-[#C5A059] transition-colors group/btn"
                      >
                        Order Now
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-14">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#3D2B1F] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#C5A059] transition-all duration-300 shadow-md hover:shadow-[0_8px_30px_rgba(197,160,89,0.4)]"
              >
                View Full Catalog
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-24 bg-[#FAF7F2]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <p className="text-[#C5A059] font-semibold text-sm uppercase tracking-widest">Simple Process</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D2B1F]">How to Order</h2>
              <p className="text-[#3D2B1F]/60 text-lg">Getting your perfect cake is simple and easy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: "01",
                  emoji: "💬",
                  title: "Contact Us",
                  desc: "Reach out via WhatsApp or fill out our custom order form with your vision and requirements.",
                },
                {
                  step: "02",
                  emoji: "🎨",
                  title: "We Design & Quote",
                  desc: "Our baker crafts a design for you within 24 hours and sends you a transparent quote.",
                },
                {
                  step: "03",
                  emoji: "🚚",
                  title: "Pay & Receive",
                  desc: "Confirm with MoMo (+237 654043313), and your freshly baked cake is delivered to your door.",
                },
              ].map((step) => (
                <div key={step.step} className="relative text-center space-y-4 p-8 bg-white rounded-[1.75rem] border border-[#C5A059]/10 shadow-[0_4px_24px_rgba(61,43,31,0.06)]">
                  <div className="w-14 h-14 bg-[#C5A059]/10 rounded-2xl flex items-center justify-center text-3xl mx-auto">
                    {step.emoji}
                  </div>
                  <div className="absolute top-6 right-6 font-serif text-4xl font-bold text-[#C5A059]/10">
                    {step.step}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#3D2B1F]">{step.title}</h3>
                  <p className="text-[#3D2B1F]/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING GUIDE SECTION ── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <p className="text-[#C5A059] font-semibold text-sm uppercase tracking-widest">Clear & Fair pricing</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3D2B1F]">Our Cake Guide Starting Rates</h2>
              <p className="text-[#3D2B1F]/60 text-sm md:text-base">
                Whether you need a cute mini bento cake or a custom sculpted fondant masterpiece, here are our standard start rates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Bento Cakes starting 7k */}
              <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#C5A059]/15 shadow-sm text-center relative overflow-hidden flex flex-col justify-between group hover:border-[#C5A059] hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD1DC]/30 rounded-bl-[4rem] pointer-events-none" />
                <div>
                  <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300 select-none">🍱</span>
                  <h3 className="font-serif text-xl font-bold text-[#3D2B1F]">Bento Cakes</h3>
                  <p className="text-xs text-[#3D2B1F]/60 mt-1 max-w-[200px] mx-auto">Cute, compact 4" mini celebration cakes perfect for small gestures.</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#3D2B1F]/6">
                  <p className="text-xs text-[#3D2B1F]/50 uppercase font-semibold">Starting from</p>
                  <p className="font-serif text-2xl font-bold text-[#C5A059] mt-0.5">7,000 FCFA</p>
                </div>
              </div>

              {/* Birthday Cakes starting 15k */}
              <div className="bg-[#FAF7F2] rounded-3xl p-8 border-2 border-[#C5A059] shadow-md text-center relative overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 bg-[#C5A059] text-white text-[9px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                  Popular
                </div>
                <div>
                  <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300 select-none">🎂</span>
                  <h3 className="font-serif text-xl font-bold text-[#3D2B1F]">Birthday Cakes</h3>
                  <p className="text-xs text-[#3D2B1F]/60 mt-1 max-w-[200px] mx-auto">Rich multi-layered cream cakes with customized buttercream piping.</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#3D2B1F]/6">
                  <p className="text-xs text-[#3D2B1F]/50 uppercase font-semibold">Starting from</p>
                  <p className="font-serif text-2xl font-bold text-[#3D2B1F] mt-0.5">15,000 FCFA</p>
                </div>
              </div>

              {/* Fondant Cakes starting 20k */}
              <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#C5A059]/15 shadow-sm text-center relative overflow-hidden flex flex-col justify-between group hover:border-[#C5A059] hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#3D2B1F]/5 rounded-bl-[4rem] pointer-events-none" />
                <div>
                  <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300 select-none">🎩</span>
                  <h3 className="font-serif text-xl font-bold text-[#3D2B1F]">Fondant Art</h3>
                  <p className="text-xs text-[#3D2B1F]/60 mt-1 max-w-[200px] mx-auto">Luxury sculpted fondant layers with customized thematic figures.</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#3D2B1F]/6">
                  <p className="text-xs text-[#3D2B1F]/50 uppercase font-semibold">Starting from</p>
                  <p className="font-serif text-2xl font-bold text-[#C5A059] mt-0.5">20,000 FCFA</p>
                </div>
              </div>

            </div>

            {/* Bottom info */}
            <div className="mt-10 bg-[#C5A059]/8 border border-[#C5A059]/20 rounded-2xl p-5 text-center max-w-xl mx-auto">
              <p className="text-xs text-[#3D2B1F]/70">
                💡 Prices may vary depending on design customization, specific flavor selections, and tiered requirements. Get a personalized estimate on our <Link href="/custom-order" className="font-bold underline hover:text-[#C5A059]">Custom Orders page</Link>.
              </p>
            </div>

          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24 bg-[#3D2B1F]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <p className="text-[#C5A059] font-semibold text-sm uppercase tracking-widest">Customer Love</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">What Our Clients Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-[1.75rem] p-8 space-y-5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed italic">"{t.text}"</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-[#C5A059] text-xs mt-0.5">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="py-24 bg-gradient-to-br from-[#FAD2E1]/40 to-[#FAF7F2]">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="text-6xl mb-6 animate-float">🎂</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D2B1F] mb-6">
              Ready to Order Your Dream Cake?
            </h2>
            <p className="text-[#3D2B1F]/70 text-lg mb-10 leading-relaxed">
              Whether it's a wedding, birthday, or a special occasion — we'll create something extraordinary, just for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/custom-order"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3D2B1F] text-white font-semibold text-base px-10 py-4 rounded-full hover:bg-[#C5A059] transition-all duration-300 shadow-lg"
              >
                Request Custom Cake
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-base px-10 py-4 rounded-full hover:bg-[#128C7E] transition-all duration-300 shadow-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.129.553 4.128 1.522 5.863L0 24l6.278-1.496A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.667-.5-5.2-1.376l-.371-.22-3.865.921.979-3.751-.243-.388A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
