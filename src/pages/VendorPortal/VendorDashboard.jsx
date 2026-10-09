import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Store, 
  Package, 
  ShoppingBag, 
  TrendingUp, 
  Plus, 
  Truck, 
  CheckCircle2, 
  Layers, 
  X, 
  Edit3, 
  Eye, 
  ShieldCheck,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { SAREES_DATA } from '../../data/sarees';

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'products' | 'orders' | 'profile'
  const [vendorProducts, setVendorProducts] = useState(SAREES_DATA.slice(0, 4));
  const [showAddModal, setShowAddModal] = useState(false);

  // New Saree Form State
  const [newSaree, setNewSaree] = useState({
    title: '',
    tamilTitle: '',
    category: 'pattu',
    loomType: 'handloom',
    originHub: 'Kanchipuram',
    price: '',
    originalPrice: '',
    fabric: 'Pure Mulberry Silk',
    zariType: 'Pure Silver Zari Gold Dipped',
    stockCount: 3,
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    description: ''
  });

  // Vendor Incoming Orders
  const [vendorOrders, setVendorOrders] = useState([
    {
      id: "TN-ORD-8819",
      customer: "Kavitha Narayanan",
      city: "Chennai",
      sareeTitle: "Bridal Crimson Red Kanchipuram Pure Silk",
      amount: 38500,
      status: "Ready for Inspection",
      tracking: ""
    },
    {
      id: "TN-ORD-8824",
      customer: "Sowmya Raghavan",
      city: "Bengaluru",
      sareeTitle: "Peacock Blue Royal Kanchipuram Silk",
      amount: 32000,
      status: "Dispatched",
      tracking: "WEAVER-EXP-992144"
    }
  ]);

  const handleAddSaree = (e) => {
    e.preventDefault();
    const created = {
      id: `vendor-saree-${Date.now()}`,
      title: newSaree.title || "Custom Handcrafted Silk Saree",
      tamilTitle: newSaree.tamilTitle || "கைத்தறி பட்டுப் புடவை",
      category: newSaree.category,
      loomType: newSaree.loomType,
      originHub: newSaree.originHub,
      price: Number(newSaree.price) || 24500,
      originalPrice: Number(newSaree.originalPrice) || 29000,
      discount: 15,
      rating: 5.0,
      reviewsCount: 1,
      images: [newSaree.imageUrl],
      colors: ["Red", "Gold"],
      primaryColor: "Red",
      fabric: newSaree.fabric,
      zariType: newSaree.zariType,
      warpWeft: "3-Ply Mulberry Silk",
      borderType: "Korvai Temple Border",
      occasion: "Wedding",
      certification: "Silk Mark & Handloom Mark Certified",
      shopId: "kanchi-kamatchi-silks",
      shopName: "Sri Kamakshi Handloom Weavers Society",
      inStock: true,
      stockCount: Number(newSaree.stockCount) || 2,
      description: newSaree.description || "Authentic pit-loom masterpiece woven by generational craftsmen.",
      featured: true,
      newArrival: true
    };

    setVendorProducts([created, ...vendorProducts]);
    setShowAddModal(false);
    alert("🎉 Saree published successfully to THARINAYAM marketplace!");
  };

  const handleDispatchOrder = (orderId) => {
    const trackingCode = `WEAVER-EXP-${Math.floor(100000 + Math.random() * 900000)}`;
    setVendorOrders(vendorOrders.map(o => o.id === orderId ? { ...o, status: "Dispatched", tracking: trackingCode } : o));
    alert(`Order dispatched! Tracking code ${trackingCode} assigned and customer notified via SMS.`);
  };

  return (
    <div className="min-h-screen bg-stone-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Vendor Header */}
        <div className="bg-heritage-maroon text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md border-b-4 border-heritage-gold">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-heritage-gold text-stone-900 font-serif font-bold text-2xl flex items-center justify-center flex-shrink-0">
              த
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-heritage-gold font-semibold uppercase tracking-wider">
                  Artisan Society Portal
                </span>
                <span className="bg-emerald-600/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Verified Seller
                </span>
              </div>
              <h1 className="font-serif font-bold text-xl sm:text-2xl">
                Sri Kamakshi Handloom Weavers Society
              </h1>
              <p className="text-xs text-stone-300">
                Kanchipuram Cluster • Silk Mark License #SK-4491
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-heritage-gold hover:bg-heritage-goldDark text-stone-900 font-bold text-xs px-4 py-2.5 rounded-xl shadow flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Saree to Loom</span>
            </button>

            <Link
              to="/shops/kanchi-kamatchi-silks"
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/20 transition-colors flex items-center gap-1.5"
            >
              <Eye className="w-4 h-4" />
              <span>View Public Boutique</span>
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-stone-200 pb-2 text-xs sm:text-sm font-semibold text-stone-600">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'dashboard' ? 'bg-white text-heritage-maroon shadow-sm' : 'hover:bg-stone-200/60'
            }`}
          >
            Dashboard Overview
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'products' ? 'bg-white text-heritage-maroon shadow-sm' : 'hover:bg-stone-200/60'
            }`}
          >
            Saree Catalogue ({vendorProducts.length})
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'orders' ? 'bg-white text-heritage-maroon shadow-sm' : 'hover:bg-stone-200/60'
            }`}
          >
            Customer Orders ({vendorOrders.length})
          </button>
        </div>

        {/* Tab 1: Dashboard Overview */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Stat Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-sm space-y-1">
                <span className="text-xs text-stone-500 font-medium">Monthly Weaver Revenue</span>
                <p className="font-serif font-bold text-2xl text-stone-900">₹3,84,500</p>
                <span className="text-[10px] text-emerald-700 font-semibold">+18% vs last month</span>
              </div>
              <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-sm space-y-1">
                <span className="text-xs text-stone-500 font-medium">Active Drapes on Loom</span>
                <p className="font-serif font-bold text-2xl text-heritage-maroon">18 Sarees</p>
                <span className="text-[10px] text-stone-500">Pit-loom cycle active</span>
              </div>
              <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-sm space-y-1">
                <span className="text-xs text-stone-500 font-medium">Dispatches Pending</span>
                <p className="font-serif font-bold text-2xl text-amber-600">2 Orders</p>
                <span className="text-[10px] text-amber-700 font-semibold">Inspect & ship</span>
              </div>
              <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-sm space-y-1">
                <span className="text-xs text-stone-500 font-medium">Customer Rating</span>
                <p className="font-serif font-bold text-2xl text-stone-900">4.9 / 5.0</p>
                <span className="text-[10px] text-emerald-700 font-semibold">Top Rated Society</span>
              </div>
            </div>

            {/* Recent Orders Preview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <h3 className="font-serif font-bold text-base text-stone-900">Recent Customer Orders</h3>
                <button onClick={() => setActiveTab('orders')} className="text-xs font-semibold text-heritage-maroon hover:underline">
                  View All Orders
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-stone-100 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="pb-3">Order ID</th>
                      <th className="pb-3">Customer</th>
                      <th className="pb-3">Saree Item</th>
                      <th className="pb-3">Amount</th>
                      <th className="pb-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    {vendorOrders.map((o) => (
                      <tr key={o.id} className="py-2.5">
                        <td className="py-3 font-mono font-bold text-heritage-maroon">{o.id}</td>
                        <td className="py-3">{o.customer} ({o.city})</td>
                        <td className="py-3 font-medium">{o.sareeTitle}</td>
                        <td className="py-3 font-bold text-stone-900">₹{o.amount.toLocaleString('en-IN')}</td>
                        <td className="py-3">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            o.status === 'Dispatched' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {o.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Saree Catalogue */}
        {activeTab === 'products' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <h3 className="font-serif font-bold text-lg text-stone-900">Listed Saree Collection</h3>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-heritage-maroon text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Saree</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="pb-3">Preview</th>
                    <th className="pb-3">Title & Craft</th>
                    <th className="pb-3">Price</th>
                    <th className="pb-3">Stock Count</th>
                    <th className="pb-3">Certifications</th>
                    <th className="pb-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-700">
                  {vendorProducts.map((p) => (
                    <tr key={p.id}>
                      <td className="py-3">
                        <img src={p.images[0]} alt={p.title} className="w-12 h-14 object-cover rounded-lg border" />
                      </td>
                      <td className="py-3 max-w-xs">
                        <p className="font-bold text-stone-800 truncate">{p.title}</p>
                        <p className="text-[11px] text-stone-500">{p.fabric} • {p.loomType}</p>
                      </td>
                      <td className="py-3 font-bold text-stone-900">
                        ₹{p.price.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3">
                        <span className="font-bold text-stone-800">{p.stockCount} in stock</span>
                      </td>
                      <td className="py-3 text-[11px] text-emerald-800 font-medium">
                        ✓ Silk Mark & GI Tag
                      </td>
                      <td className="py-3">
                        <Link to={`/products/${p.id}`} className="text-heritage-maroon font-bold hover:underline">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Customer Orders & Dispatch */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <h3 className="font-serif font-bold text-lg text-stone-900">Orders Received from Marketplace</h3>
              <p className="text-xs text-stone-500">Dispatch directly from Kanchipuram loom facility</p>
            </div>

            <div className="space-y-4">
              {vendorOrders.map((ord) => (
                <div key={ord.id} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-sm text-stone-900">{ord.id}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        ord.status === 'Dispatched' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {ord.status}
                      </span>
                    </div>
                    <p className="font-semibold text-stone-800">{ord.sareeTitle}</p>
                    <p className="text-stone-500">Buyer: {ord.customer} • Destination: {ord.city}</p>
                    {ord.tracking && (
                      <p className="text-emerald-700 font-mono font-semibold">
                        Courier Tracking: {ord.tracking}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-serif font-bold text-base text-stone-900">
                      ₹{ord.amount.toLocaleString('en-IN')}
                    </span>
                    {ord.status !== 'Dispatched' && (
                      <button
                        onClick={() => handleDispatchOrder(ord.id)}
                        className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
                      >
                        <Truck className="w-3.5 h-3.5" />
                        <span>Dispatch & Generate Tracking</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Add Saree Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <h3 className="font-serif font-bold text-lg text-stone-900">Add New Saree to Loom Catalogue</h3>
              <button onClick={() => setShowAddModal(false)}><X className="w-5 h-5 text-stone-400" /></button>
            </div>

            <form onSubmit={handleAddSaree} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Saree Name / Title</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Traditional Korvai Kanchipuram Silk with Annapakshi Pallu"
                  value={newSaree.title}
                  onChange={(e) => setNewSaree({ ...newSaree, title: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:outline-none focus:border-heritage-gold"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Loom Type</label>
                  <select
                    value={newSaree.loomType}
                    onChange={(e) => setNewSaree({ ...newSaree, loomType: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:outline-none focus:border-heritage-gold"
                  >
                    <option value="handloom">100% Handloom (Pit Loom)</option>
                    <option value="powerloom">Powerloom Jacquard</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Weaving Origin Hub</label>
                  <select
                    value={newSaree.originHub}
                    onChange={(e) => setNewSaree({ ...newSaree, originHub: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:outline-none focus:border-heritage-gold"
                  >
                    <option value="Kanchipuram">Kanchipuram</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Chettinad">Chettinad</option>
                    <option value="Arani">Arani</option>
                    <option value="Salem">Salem</option>
                    <option value="Coimbatore">Coimbatore</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Price (₹ INR)</label>
                  <input
                    required
                    type="number"
                    placeholder="e.g. 28000"
                    value={newSaree.price}
                    onChange={(e) => setNewSaree({ ...newSaree, price: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:outline-none focus:border-heritage-gold"
                  />
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Available Loom Stock</label>
                  <input
                    required
                    type="number"
                    value={newSaree.stockCount}
                    onChange={(e) => setNewSaree({ ...newSaree, stockCount: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:outline-none focus:border-heritage-gold"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Fabric & Zari Detail</label>
                <input
                  type="text"
                  placeholder="Pure Mulberry Silk with Pure Silver Gold-Washed Zari"
                  value={newSaree.fabric}
                  onChange={(e) => setNewSaree({ ...newSaree, fabric: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:outline-none focus:border-heritage-gold"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-heritage-maroon hover:bg-heritage-maroonDark text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-colors"
                >
                  Publish Saree to Marketplace
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

