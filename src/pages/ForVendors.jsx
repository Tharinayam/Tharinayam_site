import React from 'react';
import { Link } from 'react-router-dom';
import { Store, ShieldCheck, HeartHandshake, Phone, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ForVendors() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">For Vendors & Weavers</span>
        </nav>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          Partner With THARINAYAM: For Weavers & Local Shops
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          Are you a certified handloom weavers' co-operative society, independent pit-loom artisan, or authentic saree boutique in Tamil Nadu? Discover how our platform connects you directly with genuine textile buyers.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm">
        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
          <span className="w-9 h-9 rounded-xl bg-amber-50 text-heritage-maroon font-bold flex items-center justify-center">
            0%
          </span>
          <h3 className="font-serif font-bold text-base text-stone-900">Zero Commissions</h3>
          <p className="text-stone-600 leading-relaxed text-xs">
            We are an open discovery platform. Visitors contact your shop or society directly via phone or walk-in. We take zero cuts from your artisan earnings.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
          <span className="w-9 h-9 rounded-xl bg-amber-50 text-heritage-maroon font-bold flex items-center justify-center">
            🌐
          </span>
          <h3 className="font-serif font-bold text-base text-stone-900">Pan-India & NRI Reach</h3>
          <p className="text-stone-600 leading-relaxed text-xs">
            Brides and cultural connoisseurs from Chennai, Bengaluru, Mumbai, and the global Tamil diaspora use THARINAYAM to discover authentic local weavers.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
          <span className="w-9 h-9 rounded-xl bg-amber-50 text-heritage-maroon font-bold flex items-center justify-center">
            ✓
          </span>
          <h3 className="font-serif font-bold text-base text-stone-900">Silk Mark Verification</h3>
          <p className="text-stone-600 leading-relaxed text-xs">
            We feature your official certifications, GI tag registrations, and master weaver awards, building instant buyer trust.
          </p>
        </div>
      </div>

      {/* Onboarding Steps */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <h2 className="font-serif font-bold text-2xl text-stone-900">
          How to Get Your Shop Listed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div className="space-y-1.5 p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-heritage-maroon block">Step 1: Submit Details</span>
            <p className="text-stone-600 text-xs">Provide society/shop name, registered address, weaving cluster, and contact numbers.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-heritage-maroon block">Step 2: Verification</span>
            <p className="text-stone-600 text-xs">Our team verifies your handloom registration, cooperative membership, or Silk Mark licensing.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-heritage-maroon block">Step 3: Go Live</span>
            <p className="text-stone-600 text-xs">Your shop profile, showroom photos, and craft specialities are published to our statewide directory.</p>
          </div>
        </div>

        <div className="pt-4 flex flex-wrap gap-4 items-center">
          <Link
            to="/contact"
            className="bg-heritage-maroon hover:bg-heritage-maroonDark text-white font-bold text-xs px-6 py-3 rounded-xl shadow transition-colors flex items-center gap-2"
          >
            <span>Submit Vendor Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="text-xs text-stone-500">
            Or call our artisan coordination line at +91 94432 18920
          </span>
        </div>
      </div>

    </div>
  );
}

