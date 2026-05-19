"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Star, TrendingUp, Calendar, Clock, CheckCircle2, AlertCircle, Trash2, ShieldCheck, DollarSign } from "lucide-react";

interface Order {
  id: string;
  name: string;
  phone: string;
  address: string;
  eventDate: string;
  eventType: string;
  size: string;
  flavor: string;
  description: string;
  price: string;
  cakeName: string;
  orderType: string;
  paymentStatus: string;
  orderStatus: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  // Fetch orders
  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/orders");
      if (res.ok) {
        const data = await res.json();
        setOrders(data);
      }
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Update order fields
  const handleUpdate = async (id: string, updates: Partial<Order>) => {
    try {
      const res = await fetch(`/api/orders/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (res.ok) {
        // Optimistically update local state
        setOrders((prev) =>
          prev.map((o) => (o.id === id ? { ...o, ...updates } : o))
        );
      }
    } catch (error) {
      console.error("Failed to update order:", error);
    }
  };

  // Delete order
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this order record?")) return;
    try {
      const res = await fetch(`/api/orders/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setOrders((prev) => prev.filter((o) => o.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete order:", error);
    }
  };

  // Calculate metrics
  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.orderStatus !== "Delivered" && o.orderStatus !== "Cancelled").length;
  const completedOrders = orders.filter((o) => o.orderStatus === "Delivered").length;
  
  // Calculate total revenue (tries to extract numbers from price strings like "15,000 FCFA")
  const totalRevenue = orders
    .filter((o) => o.paymentStatus === "Paid")
    .reduce((sum, o) => {
      const num = parseInt(o.price.replace(/[^0-9]/g, "")) || 0;
      return sum + num;
    }, 0);

  const filteredOrders = filter === "All" 
    ? orders 
    : filter === "Pending" 
    ? orders.filter(o => o.orderStatus === "Received") 
    : filter === "Paid" 
    ? orders.filter(o => o.paymentStatus === "Paid")
    : orders.filter(o => o.orderStatus === filter);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#FAF7F2] min-h-screen py-12">
        <div className="container mx-auto px-4">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#C5A059]/20">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> Admin Portal
              </div>
              <h1 className="font-serif text-4xl font-bold text-[#3D2B1F] mt-1">Gracie's Order Registry</h1>
            </div>
            <button 
              onClick={fetchOrders}
              className="bg-[#3D2B1F] text-white hover:bg-[#C5A059] text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow-sm"
            >
              Refresh Registry
            </button>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/10 shadow-[0_4px_20px_rgba(61,43,31,0.05)] flex items-center gap-4">
              <div className="w-12 h-12 bg-[#C5A059]/10 text-[#C5A059] rounded-xl flex items-center justify-center text-xl font-bold">
                📋
              </div>
              <div>
                <p className="text-xs text-[#3D2B1F]/50 uppercase font-semibold">Total Orders</p>
                <p className="font-serif text-2xl font-bold text-[#3D2B1F] mt-0.5">{totalOrders}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/10 shadow-[0_4px_20px_rgba(61,43,31,0.05)] flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FFD700]/10 text-[#DAA520] rounded-xl flex items-center justify-center text-xl font-bold">
                💰
              </div>
              <div>
                <p className="text-xs text-[#3D2B1F]/50 uppercase font-semibold">Verified Revenue</p>
                <p className="font-serif text-2xl font-bold text-[#C5A059] mt-0.5">{totalRevenue.toLocaleString()} FCFA</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/10 shadow-[0_4px_20px_rgba(61,43,31,0.05)] flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FF6B6B]/10 text-[#FF6B6B] rounded-xl flex items-center justify-center text-xl font-bold">
                ⏳
              </div>
              <div>
                <p className="text-xs text-[#3D2B1F]/50 uppercase font-semibold">Active Pipeline</p>
                <p className="font-serif text-2xl font-bold text-[#3D2B1F] mt-0.5">{pendingOrders}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/10 shadow-[0_4px_20px_rgba(61,43,31,0.05)] flex items-center gap-4">
              <div className="w-12 h-12 bg-[#228B22]/10 text-[#228B22] rounded-xl flex items-center justify-center text-xl font-bold">
                🎂
              </div>
              <div>
                <p className="text-xs text-[#3D2B1F]/50 uppercase font-semibold">Completed Orders</p>
                <p className="font-serif text-2xl font-bold text-[#3D2B1F] mt-0.5">{completedOrders}</p>
              </div>
            </div>

          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {["All", "Pending", "Paid", "Confirmed", "Baking", "Delivered", "Cancelled"].map((btn) => (
              <button
                key={btn}
                onClick={() => setFilter(btn)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition ${
                  filter === btn
                    ? "bg-[#3D2B1F] text-white shadow-md"
                    : "bg-white text-[#3D2B1F]/80 border border-[#3D2B1F]/10 hover:border-[#C5A059]"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Orders Table Area */}
          <div className="bg-white rounded-[2rem] border border-[#C5A059]/10 shadow-[0_10px_40px_rgba(61,43,31,0.05)] overflow-hidden">
            {loading ? (
              <div className="p-16 text-center text-[#3D2B1F]/50 font-serif">
                Loading orders from registry...
              </div>
            ) : filteredOrders.length === 0 ? (
              <div className="p-16 text-center text-[#3D2B1F]/50 space-y-2">
                <p className="text-4xl">📭</p>
                <p className="font-serif text-lg font-bold">No orders found</p>
                <p className="text-sm">New catalog or custom order requests will appear here instantly.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#3D2B1F] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider border-b border-[#C5A059]/20">
                      <th className="p-5">Order ID</th>
                      <th className="p-5">Customer</th>
                      <th className="p-5">Cake / details</th>
                      <th className="p-5">Event/Delivery</th>
                      <th className="p-5">Momo Payment</th>
                      <th className="p-5">Baking Status</th>
                      <th className="p-5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#3D2B1F]/5 text-sm text-[#3D2B1F]">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-[#FAF7F2]/50 transition-colors">
                        
                        {/* ID */}
                        <td className="p-5 font-mono text-xs font-bold text-[#C5A059]">{order.id}</td>
                        
                        {/* Customer */}
                        <td className="p-5">
                          <p className="font-bold">{order.name}</p>
                          <a 
                            href={`https://wa.me/237${order.phone}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs text-[#25D366] hover:underline flex items-center gap-1 mt-0.5"
                          >
                            💬 {order.phone}
                          </a>
                          <p className="text-xs text-[#3D2B1F]/50 mt-1">{order.address}</p>
                        </td>

                        {/* Cake Details */}
                        <td className="p-5 max-w-xs">
                          <p className="font-semibold text-xs bg-[#C5A059]/10 text-[#3D2B1F] px-2 py-0.5 rounded-full inline-block mb-1">
                            {order.orderType} Order
                          </p>
                          <p className="font-bold">{order.cakeName}</p>
                          <p className="text-xs text-[#3D2B1F]/70 mt-1">Flavor: {order.flavor}</p>
                          <p className="text-xs text-[#3D2B1F]/70">Size: {order.size}</p>
                          <p className="text-xs text-[#3D2B1F]/50 italic mt-1.5 line-clamp-2">"{order.description}"</p>
                        </td>

                        {/* Event Date */}
                        <td className="p-5">
                          <p className="font-semibold">{order.eventDate}</p>
                          <p className="text-xs text-[#3D2B1F]/40 mt-0.5">Submitted: {new Date(order.createdAt).toLocaleDateString()}</p>
                        </td>

                        {/* Payment Status */}
                        <td className="p-5">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            order.paymentStatus === "Paid" 
                              ? "bg-[#228B22]/10 text-[#228B22]" 
                              : "bg-[#FFD700]/10 text-[#DAA520]"
                          }`}>
                            {order.paymentStatus}
                          </span>
                          <p className="font-bold text-xs text-[#3D2B1F]/70 mt-2">{order.price}</p>
                          {order.paymentStatus !== "Paid" && (
                            <button
                              onClick={() => handleUpdate(order.id, { paymentStatus: "Paid" })}
                              className="text-[10px] font-bold text-[#C5A059] block mt-1 hover:underline cursor-pointer"
                            >
                              Verify MoMo Paid
                            </button>
                          )}
                        </td>

                        {/* Order status */}
                        <td className="p-5">
                          <select
                            value={order.orderStatus}
                            onChange={(e) => handleUpdate(order.id, { orderStatus: e.target.value })}
                            className="text-xs border border-[#3D2B1F]/10 rounded-lg px-2.5 py-1 bg-white text-[#3D2B1F] focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                          >
                            {["Received", "Confirmed", "Baking", "Delivered", "Cancelled"].map((status) => (
                              <option key={status} value={status}>{status}</option>
                            ))}
                          </select>
                        </td>

                        {/* Actions */}
                        <td className="p-5 text-right space-y-1">
                          <button
                            onClick={() => handleUpdate(order.id, { orderStatus: "Confirmed" })}
                            className="bg-[#C5A059] text-white hover:bg-[#E8C97A] text-xs font-bold px-3 py-1.5 rounded-lg mr-1 transition cursor-pointer"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => handleDelete(order.id)}
                            className="text-[#FF6B6B] hover:text-red-700 p-2.5"
                            aria-label="Delete"
                          >
                            <Trash2 className="w-4 h-4 inline" />
                          </button>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
