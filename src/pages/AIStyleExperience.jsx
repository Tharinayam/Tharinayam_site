import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Eye, CheckCircle2, ArrowRight, ShieldAlert, Layers } from 'lucide-react';

export default function AIStyleExperience() {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#2E1065] via-[#3B0764] to-[#4C1D95] text-white py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-heritage-gold text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Innovation in Indian Ethnic Wear</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl leading-tight">
            AI-Powered Saree Styling Experience
          </h1>
          <p className="font-tamil text-lg text-purple-200">
            செயற்கை நுண்ணறிவு மூலம் உங்களுக்கு பொருத்தமான சேலை தேர்வு
          </p>
          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-2xl mx-auto">
            THARINAYAM explores how computer vision, skin undertone science, and drape physics can help saree enthusiasts visualize and discover drapes honoring centuries-old craftsmanship.
          </p>
        </div>
      </section>

      {/* Concept Pillars */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900">Virtual Try-On Simulation</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Visualize how complex Kanchipuram zari pallus and Madurai Sungudi tie-dyes drape across different silhouettes before visiting a local weaver boutique.
            </p>
            <Link to="/virtual-try-on" className="text-xs font-bold text-purple-700 hover:underline inline-flex items-center gap-1 pt-1">
              <span>Read Try-On Tech Explainer</span> <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900">Skin Undertone Harmony</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Intelligent color analysis mapping warm golden, neutral olive, and rich dusky complexions to authentic temple crimson, turmeric ochre, or peacock blues.
            </p>
            <Link to="/recommendations" className="text-xs font-bold text-purple-700 hover:underline inline-flex items-center gap-1 pt-1">
              <span>Explore Recommendation Logic</span> <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900">Border Proportion Analysis</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Recommending border widths (narrow 3-inch temple rekku vs broad 8-inch Chettinad borders) tailored to height and personal draping preferences.
            </p>
            <Link to="/how-it-works" className="text-xs font-bold text-purple-700 hover:underline inline-flex items-center gap-1 pt-1">
              <span>See the Customer Journey</span> <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Advisory Banner */}
        <div className="p-8 rounded-3xl bg-amber-50 border border-amber-200 space-y-2 text-xs sm:text-sm text-amber-950">
          <div className="flex items-center gap-2 font-bold text-amber-900">
            <ShieldAlert className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span>Preserving Artisan Primacy over Automation</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-xs">
            Our AI initiatives are designed strictly as an educational and visualization aid. They do not replace the physical tactile beauty of handloom silk or the irreplaceable expertise of master weavers. We encourage every customer to touch real weaves and visit local societies.
          </p>
        </div>

      </section>

    </div>
  );
}

