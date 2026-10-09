import React from 'react';
import { Link } from 'react-router-dom';
import { Award, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { WEAVERS_DATA } from '../data/weavers';

export default function MeetOurWeavers() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-heritage-maroon uppercase tracking-widest">
          The Living Hands of Tamil Nadu
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          Meet Our Master Weavers
        </h1>
        <p className="text-xs sm:text-sm text-stone-600">
          Behind every thread of pure silk and hand-tied Sungudi is a master artisan carrying centuries of familial loom lineage.
        </p>
      </div>

      {/* Weavers Grid */}
      <div className="space-y-8">
        {WEAVERS_DATA.map((weaver) => (
          <div
            key={weaver.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col md:flex-row gap-6 items-start justify-between"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src={weaver.photo}
                alt={weaver.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-heritage-gold shadow flex-shrink-0"
              />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-heritage-maroon uppercase">
                    {weaver.origin}
                  </span>
                  <span className="text-[10px] bg-amber-100 text-amber-900 font-semibold px-2 py-0.5 rounded-full">
                    {weaver.experience}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-stone-900">{weaver.name}</h3>
                <p className="font-tamil text-xs text-stone-500">{weaver.tamilName}</p>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl">
                  {weaver.bio}
                </p>

                <div className="pt-2 text-xs text-stone-500 space-y-1">
                  <p><strong className="text-stone-700">Speciality Craft:</strong> {weaver.speciality}</p>
                  <p><strong className="text-stone-700">Loom Rig:</strong> {weaver.loomType}</p>
                </div>
              </div>
            </div>

            <div className="sm:self-center flex flex-col gap-2 w-full md:w-auto">
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 italic max-w-xs text-center">
                "{weaver.craftMotto}"
              </div>
              <Link
                to="/weaver-stories"
                className="w-full py-2.5 px-4 rounded-xl bg-heritage-maroon hover:bg-heritage-maroonDark text-white text-xs font-bold text-center block transition-colors shadow-sm"
              >
                Read Full Story
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

