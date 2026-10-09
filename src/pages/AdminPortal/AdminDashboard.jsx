import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Store, 
  Users, 
  Layers, 
  TrendingUp, 
  Check, 
  X, 
  AlertCircle,
  Eye,
  Award
} from 'lucide-react';
import { SHOPS_DATA } from '../../data/shops';
import { WEAVERS_DATA } from '../../data/weavers';
import { SAREES_DATA } from '../../data/sarees';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [pendingVendors, setPendingVendors] = useState([
    {
      id: "app-101",
      shopName: "Thirubuvanam Silk Handloom Cooperative",
      city: "Thirubuvanam, Thanjavur",
      weaversCount: 85,
      appliedDate: "08 Oct 2026",
      status: "Pending Verification",
      giNumber: "GI-TAG-TN-2009-08"
    },
    {
      id: "app-102",
      shopName: "Bhavani Jamakkalam & Handloom Guild",
      city: "Bhavani, Erode",
      weaversCount: 42,
      appliedDate: "07 Oct 2026",
      status: "Documents Under Review",
      giNumber: "GI-TAG-TN-2005-03"
    }
  ]);

  const handleApprove = (id) => {
    setPendingVendors(pendingVendors.filter(v => v.id !== id));
    alert("Vendor Society approved and given Silk Mark verification badge on THARINAYAM!");
  };

  return (
    <div className="min-h-screen bg-stone-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Admin Header */}
        <div className="bg-[#1C1D21] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md border-b-4 border-heritage-gold">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-heritage-maroon text-heritage-gold flex items-center justify-center font-bold text-2xl font-serif">
              த
            </div>
            <div>
              <span className="text-xs text-heritage-gold font-bold uppercase tracking-wider">
                Platform Administration
              </span>
              <h1 className="font-serif font-bold text-xl sm:text-2xl">
                THARINAYAM Control Console
              </h1>
              <p className="text-xs text-stone-400">
                Supervising 120+ Societies • Silk Mark Enforcement • GI Cluster Compliance
              </p>
            </div>
          </div>

          <Link
            to="/"
            className="text-xs font-semibold text-stone-300 hover:text-white bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 self-start sm:self-auto"
          >
            ← Return to Main Storefront
          </Link>
        </div>

        {/* High-level Platform Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-sm space-y-1">
            <span className="text-xs text-stone-500 font-medium">Gross Platform GMV</span>
            <p className="font-serif font-bold text-2xl text-stone-900">₹42.8 Lakhs</p>
            <span className="text-[10px] text-emerald-700 font-semibold">Support direct to artisans</span>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-sm space-y-1">
            <span className="text-xs text-stone-500 font-medium">Active Master Weavers</span>
            <p className="font-serif font-bold text-2xl text-heritage-maroon">{WEAVERS_DATA.length * 40}+ Artisans</p>
            <span className="text-[10px] text-stone-500">Across 6 TN Clusters</span>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-sm space-y-1">
            <span className="text-xs text-stone-500 font-medium">Verified Local Societies</span>
            <p className="font-serif font-bold text-2xl text-stone-900">{SHOPS_DATA.length + 115} Boutiques</p>
            <span className="text-[10px] text-emerald-700 font-semibold">100% Silk Mark checked</span>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-sm space-y-1">
            <span className="text-xs text-stone-500 font-medium">Pending Approvals</span>
            <p className="font-serif font-bold text-2xl text-amber-600">{pendingVendors.length} Societies</p>
            <span className="text-[10px] text-amber-700 font-semibold">Action required</span>
          </div>
        </div>

        {/* Pending Approvals Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">
                Vendor & Weaving Society Approvals Queue
              </h3>
              <p className="text-xs text-stone-500">Verify government handloom registration and Silk Mark license</p>
            </div>
            <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1 rounded-full">
              {pendingVendors.length} Pending
            </span>
          </div>

          {pendingVendors.length === 0 ? (
            <p className="text-xs text-stone-500 py-4">No pending approvals. All societies verified!</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-stone-100 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="pb-3">Society Name</th>
                    <th className="pb-3">Cluster</th>
                    <th className="pb-3">Artisans</th>
                    <th className="pb-3">GI Tag License</th>
                    <th className="pb-3">Applied</th>
                    <th className="pb-3 text-right">Verification Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-700">
                  {pendingVendors.map((v) => (
                    <tr key={v.id}>
                      <td className="py-3 font-bold text-stone-900">{v.shopName}</td>
                      <td className="py-3">{v.city}</td>
                      <td className="py-3 font-semibold">{v.weaversCount} weavers</td>
                      <td className="py-3 font-mono text-[11px] text-emerald-800">{v.giNumber}</td>
                      <td className="py-3 text-stone-500">{v.appliedDate}</td>
                      <td className="py-3 text-right space-x-2">
                        <button
                          onClick={() => handleApprove(v.id)}
                          className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[11px] transition-colors inline-flex items-center gap-1"
                        >
                          <Check className="w-3 h-3" /> Approve
                        </button>
                        <button
                          onClick={() => setPendingVendors(pendingVendors.filter(x => x.id !== v.id))}
                          className="px-3 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 font-semibold text-[11px] transition-colors"
                        >
                          Reject
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
    </div>
  );
}

