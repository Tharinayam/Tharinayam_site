import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, ShieldCheck, Award, ArrowRight, Store } from 'lucide-react';

export default function OurMission() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <Link to="/about" className="hover:text-stone-800">About Us</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Our Mission</span>
        </nav>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          Our Mission: Supporting Weavers & Preserving Handlooms
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          The handloom sector is India's second-largest employer after agriculture. Our mission is to restore dignity, economic security, and public admiration to this sacred craft.
        </p>
      </div>

      {/* Core Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-heritage-maroon flex items-center justify-center font-bold">
            🤝
          </div>
          <h3 className="font-serif font-bold text-base text-stone-900">Direct Visibility for Societies</h3>
          <p className="text-stone-600 leading-relaxed text-xs">
            Showcasing small weavers' cooperatives and independent boutique owners without commercial fee barriers or predatory aggregators.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-heritage-maroon flex items-center justify-center font-bold">
            🛡️
          </div>
          <h3 className="font-serif font-bold text-base text-stone-900">Combating Polyester Counterfeits</h3>
          <p className="text-stone-600 leading-relaxed text-xs">
            Educating the public on distinguishing pure mulberry silk from cheap machine-printed synthetic lookalikes that harm artisan livelihoods.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-heritage-maroon flex items-center justify-center font-bold">
            🌱
          </div>
          <h3 className="font-serif font-bold text-base text-stone-900">Inspiring the Next Generation</h3>
          <p className="text-stone-600 leading-relaxed text-xs">
            Documenting the master techniques of elderly weavers so youth from artisan families take pride in continuing the family pit-loom lineage.
          </p>
        </div>
      </div>

      {/* Callout */}
      <div className="p-8 rounded-3xl bg-[#FAF7F0] border-2 border-heritage-gold flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-serif font-bold text-xl text-stone-900">Are You a Weaver or Boutique Owner?</h3>
          <p className="text-xs sm:text-sm text-stone-600">Join our open directory of verified Tamil Nadu textile creators.</p>
        </div>
        <Link
          to="/for-vendors"
          className="bg-heritage-maroon hover:bg-heritage-maroonDark text-white text-xs font-bold px-6 py-3 rounded-xl shadow whitespace-nowrap transition-colors"
        >
          Learn About Vendor Onboarding
        </Link>
      </div>

    </div>
  );
}

