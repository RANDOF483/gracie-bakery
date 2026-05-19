"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Phone, Upload, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const WHATSAPP = "654043313";

export default function CustomOrder() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    eventDate: "",
    eventType: "Wedding",
    size: "Medium (20-30 servings)",
    flavor: "Vanilla Bean",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          eventDate: form.eventDate,
          eventType: form.eventType,
          size: form.size,
          flavor: form.flavor,
          description: form.description,
          cakeName: `Custom ${form.eventType} Cake`,
          orderType: "Custom",
        }),
      });

      // 2. Open WhatsApp Redirect
      const msg = encodeURIComponent(
        `Hello Gracie! I'd like to place a custom cake order:\n\n` +
        `👤 Name: ${form.name}\n` +
        `📞 Phone: ${form.phone}\n` +
        `📍 Address: ${form.address}\n` +
        `📅 Event Date: ${form.eventDate}\n` +
        `🎉 Event Type: ${form.eventType}\n` +
        `🎂 Size: ${form.size}\n` +
        `🍰 Flavor: ${form.flavor}\n` +
        `📝 Description: ${form.description}`
      );
      window.open(`https://wa.me/237${WHATSAPP}?text=${msg}`, "_blank");
      setSubmitted(true);
    } catch (err) {
      console.error("Order submission failed:", err);
      // Still open WhatsApp as fallback even if API fails
      const msg = encodeURIComponent(`Hello Gracie! (Direct Fallback) I'd like to place a custom cake order...`);
      window.open(`https://wa.me/237${WHATSAPP}?text=${msg}`, "_blank");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#FAF7F2] min-h-screen">

        {/* Hero */}
        <section className="bg-[#3D2B1F] py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23C5A059%22 fill-opacity=%220.06%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-100" />
          <div className="container mx-auto px-4 relative z-10">
            <p className="text-[#C5A059] text-sm font-semibold uppercase tracking-widest mb-4">Made Just For You</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">Request a Custom Cake</h1>
            <p className="text-white/60 max-w-xl mx-auto text-lg">
              Fill out the form and we'll send your quote via WhatsApp within 24 hours. Payment via MoMo (+237 {WHATSAPP}).
            </p>
          </div>
        </section>

        {/* Process steps */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { n: "1", label: "Fill Form", icon: "📝" },
              { n: "2", label: "Get Quote", icon: "💬" },
              { n: "3", label: "Pay & Receive", icon: "🚚" },
            ].map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-4 text-center border border-[#C5A059]/10 shadow-sm flex flex-col items-center gap-2">
                <span className="text-2xl">{s.icon}</span>
                <span className="font-serif font-bold text-[#3D2B1F] text-sm">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          {submitted ? (
            <div className="bg-white rounded-[2rem] shadow-[0_8px_40px_rgba(61,43,31,0.08)] p-12 text-center border border-[#C5A059]/10 animate-fade-in-up">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="font-serif text-3xl font-bold text-[#3D2B1F] mb-4">Order Sent & Saved!</h2>
              <p className="text-[#3D2B1F]/60 mb-8 max-w-md mx-auto">
                Your request has been successfully recorded in our backend database and forwarded to Gracie on WhatsApp. We will confirm your details shortly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/237${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#128C7E] transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.129.553 4.128 1.522 5.863L0 24l6.278-1.496A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.667-.5-5.2-1.376l-.371-.22-3.865.921.979-3.751-.243-.388A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Chat with Gracie
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-4 rounded-full border border-[#3D2B1F]/15 text-[#3D2B1F] font-semibold hover:bg-[#FAF7F2] transition-all"
                >
                  Submit Another Order
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-[2rem] shadow-[0_8px_40px_rgba(61,43,31,0.08)] border border-[#C5A059]/10 overflow-hidden">
              <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-10">

                {/* Event Details */}
                <div className="space-y-5">
                  <h2 className="font-serif text-2xl font-bold text-[#3D2B1F] flex items-center gap-2">
                    <span className="text-2xl">🎉</span> Event Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#3D2B1F] flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#C5A059]" /> Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={form.eventDate}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[#3D2B1F]/15 bg-[#FAF7F2]/50 px-4 py-3 text-sm text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#3D2B1F]">Event Type</label>
                      <select
                        name="eventType"
                        value={form.eventType}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#3D2B1F]/15 bg-[#FAF7F2]/50 px-4 py-3 text-sm text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition"
                      >
                        {["Wedding", "Birthday", "Anniversary", "Corporate", "Graduation", "Other"].map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Cake Details */}
                <div className="space-y-5">
                  <h2 className="font-serif text-2xl font-bold text-[#3D2B1F] flex items-center gap-2">
                    <span className="text-2xl">🎂</span> Cake Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#3D2B1F]">Cake Size / Servings</label>
                      <select
                        name="size"
                        value={form.size}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#3D2B1F]/15 bg-[#FAF7F2]/50 px-4 py-3 text-sm text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition"
                      >
                        {["Small (10-15 servings)", "Medium (20-30 servings)", "Large (40-50 servings)", "Tiered (50+ servings)"].map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#3D2B1F]">Flavor Profile</label>
                      <select
                        name="flavor"
                        value={form.flavor}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#3D2B1F]/15 bg-[#FAF7F2]/50 px-4 py-3 text-sm text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition"
                      >
                        {["Vanilla Bean", "Rich Chocolate", "Red Velvet", "Lemon & Raspberry", "Caramel Pecan", "Strawberry", "Other (specify below)"].map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Inspiration upload area */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#3D2B1F] flex items-center gap-2">
                      <Upload className="w-4 h-4 text-[#C5A059]" /> Inspiration Image (send via WhatsApp after submitting)
                    </label>
                    <div className="border-2 border-dashed border-[#C5A059]/30 rounded-xl p-8 text-center bg-[#FAF7F2]/50 hover:bg-[#FAF7F2] transition-colors cursor-pointer">
                      <span className="text-3xl">📷</span>
                      <p className="text-sm text-[#3D2B1F]/50 mt-2">You can share your inspiration photo directly on WhatsApp after submitting</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#3D2B1F]">Theme / Description</label>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-xl border border-[#3D2B1F]/15 bg-[#FAF7F2]/50 px-4 py-3 text-sm text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition resize-none"
                      placeholder="Describe your vision: colors, theme, special inscriptions, any specific requirements..."
                    />
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-5">
                  <h2 className="font-serif text-2xl font-bold text-[#3D2B1F] flex items-center gap-2">
                    <span className="text-2xl">📞</span> Your Contact Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#3D2B1F]">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[#3D2B1F]/15 bg-[#FAF7F2]/50 px-4 py-3 text-sm text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#3D2B1F] flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#C5A059]" /> Phone Number (WhatsApp)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[#3D2B1F]/15 bg-[#FAF7F2]/50 px-4 py-3 text-sm text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition"
                        placeholder="+237 6XX XXX XXX"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-semibold text-[#3D2B1F]">Delivery Address</label>
                      <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#3D2B1F]/15 bg-[#FAF7F2]/50 px-4 py-3 text-sm text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition"
                        placeholder="Quarter, City (e.g. Molyko, Buea)"
                      />
                    </div>
                  </div>
                </div>

                {/* MoMo info */}
                <div className="bg-[#C5A059]/8 border border-[#C5A059]/20 rounded-2xl p-5 flex items-start gap-4">
                  <span className="text-2xl shrink-0">📱</span>
                  <div>
                    <p className="font-semibold text-[#3D2B1F] text-sm">Payment via MTN MoMo or Orange Money</p>
                    <p className="text-[#3D2B1F]/60 text-xs mt-1">
                      After confirmation, send payment to <span className="font-bold text-[#C5A059]">+237 {WHATSAPP}</span>. A 50% deposit is required to begin baking.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#3D2B1F] text-white font-bold text-base px-8 py-5 rounded-2xl hover:bg-[#C5A059] transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(197,160,89,0.4)] group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span>Processing Order...</span>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.129.553 4.128 1.522 5.863L0 24l6.278-1.496A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.667-.5-5.2-1.376l-.371-.22-3.865.921.979-3.751-.243-.388A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                      </svg>
                      Submit & Chat via WhatsApp
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 justify-center">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <p className="text-xs text-center text-[#3D2B1F]/50">
                    We'll respond within 24 hours with your custom quote.
                  </p>
                </div>
              </form>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
