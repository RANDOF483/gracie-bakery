"use client";
import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Star, SlidersHorizontal, ShoppingBag, X, Calendar, Phone, CheckCircle2 } from "lucide-react";

const WHATSAPP = "654043313";

const CAKES = [
  { id: 1, name: "Red & Gold Birthday Splendor", category: "Birthday", price: 15000, priceStr: "15,000 FCFA", description: "Vibrant red watercolor buttercream base with gold splatters, golden balls, and topper.", rating: 5, image: "/images/birthday_red_gold.png", bg: "from-[#FFD1DC] to-[#FAF7F2]" },
  { id: 2, name: "Luxury Gold Foil Marble", category: "Fondant", price: 20000, priceStr: "20,000 FCFA", description: "Exquisite beige-gold marble buttercream with raw golden leaf foil division and navy spheres.", rating: 5, image: "/images/gold_marble.png", bg: "from-[#C5A059]/20 to-[#FAF7F2]" },
  { id: 3, name: "Ribbed Navy Rosette Classic", category: "Birthday", price: 18000, priceStr: "18,000 FCFA", description: "Horizontal off-white ribbed borders decorated with navy rosettes and shiny silver rods.", rating: 5, image: "/images/ribbed_navy.png", bg: "from-[#FAF7F2] to-[#E0E7FF]/40" },
  { id: 4, name: "Royal Navy Rosette Cupcakes", category: "Dessert", price: 12000, priceStr: "12,000 FCFA", description: "Box of 6 gourmet cupcakes piped with dark navy rosettes, silver sprinkles, and glitter.", rating: 5, image: "/images/navy_cupcakes.png", bg: "from-[#F0F4FF] to-[#FAF7F2]" },
  { id: 5, name: "Traditional Scotch Eggs Pastry", category: "Celebration", price: 5000, priceStr: "5,000 FCFA", description: "Crispy breaded deep-fried seasoned meat wrap with soft-boiled egg center. Perfect Cameroonian savory snack.", rating: 5, image: "/images/scotch_eggs.png", bg: "from-[#E6F4EA] to-[#FAF7F2]" },
  { id: 6, name: "Mini Bento Celebration", category: "Bento", price: 7000, priceStr: "7,000 FCFA", description: "Cute 4-inch mini bento cake, perfect for personal celebrations and cute photos.", rating: 5, image: "/images/birthday_red_gold.png", bg: "from-[#FAF7F2] to-[#FFD1DC]/40" },
  { id: 7, name: "Red Velvet Romance", category: "Anniversary", price: 22000, priceStr: "22,000 FCFA", description: "Classic red velvet layers with cream cheese frosting, caramel shards, and fresh berries.", rating: 5, image: "/images/hero_cake.png", bg: "from-[#FF6B6B]/15 to-[#FAF7F2]" },
  { id: 8, name: "Golden Wedding Tier", category: "Wedding", price: 65000, priceStr: "65,000 FCFA", description: "Elegant two-tier cake with gold leaf accents, fresh florals, and silk ribbon details.", rating: 5, image: "/images/gold_marble.png", bg: "from-[#C5A059]/20 to-[#FAF7F2]" },
  { id: 9, name: "Midnight Opera", category: "Wedding", price: 45000, priceStr: "45,000 FCFA", description: "Decadent dark chocolate and coffee opera cake with mirror glaze finish.", rating: 5, image: "/images/hero_cake.png", bg: "from-[#2C1810]/10 to-[#FAF7F2]" },
];

const CATEGORIES = ["All", "Birthday", "Bento", "Fondant", "Wedding", "Anniversary", "Dessert", "Celebration"];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  
  // Checkout Modal State
  const [selectedCake, setSelectedCake] = useState<(typeof CAKES)[0] | null>(null);
  const [checkoutStep, setCheckoutStep] = useState<"idle" | "form" | "success">("idle");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    deliveryDate: "",
  });

  let filtered = activeCategory === "All" ? CAKES : CAKES.filter((c) => c.category === activeCategory);
  if (sortBy === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);

  const handleOrderClick = (cake: (typeof CAKES)[0]) => {
    setSelectedCake(cake);
    setCheckoutStep("form");
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCake) return;
    setLoading(true);

    try {
      // 1. Save to Next.js API Backend Database
      await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          address: form.address,
          eventDate: form.deliveryDate,
          eventType: selectedCake.category,
          size: "Standard Signature Size",
          flavor: selectedCake.name,
          description: `Catalog order of ${selectedCake.name}`,
          price: selectedCake.priceStr,
          cakeName: selectedCake.name,
          orderType: "Catalog",
        }),
      });

      // 2. Open WhatsApp Redirect
      const msg = encodeURIComponent(
        `Hello Gracie! I'd like to buy this cake from your Catalog:\n\n` +
        `🎂 Cake: ${selectedCake.name}\n` +
        `💰 Price: ${selectedCake.priceStr}\n` +
        `👤 Customer Name: ${form.name}\n` +
        `📞 Phone: ${form.phone}\n` +
        `📅 Delivery Date: ${form.deliveryDate}\n` +
        `📍 Address: ${form.address}`
      );
      window.open(`https://wa.me/237${WHATSAPP}?text=${msg}`, "_blank");
      setCheckoutStep("success");
    } catch (err) {
      console.error("Order submission failed:", err);
      // Fallback
      window.open(`https://wa.me/237${WHATSAPP}?text=Hello+Gracie%21+I%27d+like+to+order+${selectedCake.name}`, "_blank");
      setCheckoutStep("success");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-[#FAF7F2] min-h-screen">

        {/* Header */}
        <section className="bg-[#3D2B1F] py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23C5A059%22 fill-opacity=%220.06%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-100" />
          <div className="container mx-auto px-4 relative z-10">
            <p className="text-[#C5A059] text-sm font-semibold uppercase tracking-widest mb-4">Handcrafted with Love</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">Our Collection</h1>
            <p className="text-white/60 max-w-xl mx-auto text-lg">
              Browse our selection of premium cakes and desserts — each one a masterpiece, baked fresh to order.
            </p>
          </div>
        </section>

        {/* Filters & Grid */}
        <section className="container mx-auto px-4 py-12">
          {/* Filter bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#C5A059] shrink-0" />
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#3D2B1F] text-white shadow-md"
                      : "bg-white text-[#3D2B1F] border border-[#3D2B1F]/10 hover:border-[#C5A059] hover:text-[#C5A059]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#3D2B1F]/10 rounded-xl px-4 py-2 bg-white text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
            </select>
          </div>

          {/* Results count */}
          <p className="text-sm text-[#3D2B1F]/50 mb-8">Showing {filtered.length} cake{filtered.length !== 1 ? "s" : ""}</p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((cake) => (
              <div
                key={cake.id}
                className="group bg-white rounded-[1.75rem] border border-[#3D2B1F]/6 shadow-[0_4px_24px_rgba(61,43,31,0.06)] hover:shadow-[0_12px_40px_rgba(197,160,89,0.2)] hover:-translate-y-2 transition-all duration-400 overflow-hidden flex flex-col"
              >
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

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#3D2B1F] leading-tight">{cake.name}</h3>
                    <div className="flex shrink-0">
                      {[...Array(cake.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#3D2B1F]/60 flex-1 leading-relaxed mb-5">{cake.description}</p>
                  <div className="flex items-center justify-between pt-5 border-t border-[#3D2B1F]/6">
                    <span className="font-bold text-[#C5A059] text-lg">{cake.priceStr}</span>
                    <button
                      onClick={() => handleOrderClick(cake)}
                      className="inline-flex items-center gap-1.5 bg-[#3D2B1F] text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-[#C5A059] transition-all duration-200 group/btn cursor-pointer"
                    >
                      Order Now
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 bg-[#3D2B1F] rounded-[2rem] p-12">
            <h3 className="font-serif text-3xl font-bold text-white mb-4">Don't see what you're looking for?</h3>
            <p className="text-white/60 mb-8">We create fully custom cakes tailored to your vision and occasion.</p>
            <Link
              href="/custom-order"
              className="inline-flex items-center gap-2 bg-[#C5A059] text-[#3D2B1F] font-semibold px-8 py-4 rounded-full hover:bg-[#E8C97A] transition-all duration-300 shadow-md"
            >
              Request a Custom Cake
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* Checkout Modal Popup */}
      {selectedCake && checkoutStep !== "idle" && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] max-w-md w-full shadow-2xl overflow-hidden border border-[#C5A059]/10 animate-fade-in-up">
            
            {/* Header */}
            <div className="p-6 bg-[#3D2B1F] text-white relative">
              <button 
                onClick={() => setSelectedCake(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-xs text-[#C5A059] font-bold uppercase tracking-wider">Checkout Order</span>
              <h3 className="font-serif text-2xl font-bold mt-1">Confirm Your Selection</h3>
            </div>

            {/* Content states */}
            {checkoutStep === "form" ? (
              <form onSubmit={handleCheckoutSubmit} className="p-6 space-y-5">
                
                {/* Product Summary */}
                <div className="flex items-center gap-4 bg-[#FAF7F2] p-4 rounded-2xl border border-[#C5A059]/10">
                  <span className="text-4xl">{selectedCake.emoji}</span>
                  <div>
                    <h4 className="font-bold text-[#3D2B1F] text-sm">{selectedCake.name}</h4>
                    <p className="text-xs text-[#3D2B1F]/60 mt-0.5">{selectedCake.category} Category</p>
                    <p className="font-bold text-[#C5A059] text-sm mt-1">{selectedCake.priceStr}</p>
                  </div>
                </div>

                {/* Fields */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3D2B1F]">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-[#3D2B1F]/15 bg-[#FAF7F2]/50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3D2B1F] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#C5A059]" /> Phone (WhatsApp preferred)
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={form.phone}
                      onChange={(e) => setForm({...form, phone: e.target.value})}
                      placeholder="+237 6XX XXX XXX"
                      className="w-full rounded-xl border border-[#3D2B1F]/15 bg-[#FAF7F2]/50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#3D2B1F] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C5A059]" /> Delivery Date
                      </label>
                      <input 
                        type="date" 
                        required
                        value={form.deliveryDate}
                        onChange={(e) => setForm({...form, deliveryDate: e.target.value})}
                        className="w-full rounded-xl border border-[#3D2B1F]/15 bg-[#FAF7F2]/50 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#3D2B1F]">Address / Quarter</label>
                      <input 
                        type="text" 
                        required
                        value={form.address}
                        onChange={(e) => setForm({...form, address: e.target.value})}
                        placeholder="Molyko, Buea"
                        className="w-full rounded-xl border border-[#3D2B1F]/15 bg-[#FAF7F2]/50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-xl p-3.5 flex items-start gap-2.5">
                  <span className="text-lg leading-none">📱</span>
                  <p className="text-xs text-[#3D2B1F]/80">
                    Payment via MTN MoMo / Orange Money to <span className="font-bold text-[#C5A059]">+237 {WHATSAPP}</span>. We confirm the order via WhatsApp.
                  </p>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-[#3D2B1F] text-white font-bold py-3 rounded-xl hover:bg-[#C5A059] transition disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? "Processing..." : "Submit & Open WhatsApp"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedCake(null)}
                    className="px-4 py-3 rounded-xl border border-[#3D2B1F]/15 text-[#3D2B1F] font-semibold text-sm hover:bg-[#FAF7F2] transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              // Success state
              <div className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-[#228B22]/10 rounded-full flex items-center justify-center text-3xl mx-auto text-[#228B22]">
                  ✓
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3D2B1F]">Order Registered!</h3>
                <p className="text-sm text-[#3D2B1F]/60 max-w-xs mx-auto">
                  Your purchase details have been successfully saved and pre-filled onto WhatsApp. Gracie is ready to prepare your custom cake!
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`https://wa.me/237${WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:bg-[#128C7E] transition shadow-md flex items-center justify-center gap-2"
                  >
                    Open WhatsApp Chat
                  </a>
                  <button
                    onClick={() => {
                      setSelectedCake(null);
                      setCheckoutStep("idle");
                    }}
                    className="w-full bg-[#3D2B1F] text-white font-bold py-3 rounded-xl hover:bg-[#C5A059] transition"
                  >
                    Back to Catalog
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
