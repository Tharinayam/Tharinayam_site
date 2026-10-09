import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Award, MapPin, Sparkles, CheckCircle2, ChevronRight, Store } from 'lucide-react';
import { WEAVERS_DATA } from '../data/weavers';
import { SAREES_DATA } from '../data/sarees';
import SareeCard from '../components/SareeCard';

export default function WeaverProfile() {
  const { slug } = useParams();
  const weaver = WEAVERS_DATA.find((w) => w.id === slug) || WEAVERS_DATA[0];

  // Sarees crafted by this weaver
  const weaverSarees = SAREES_DATA.filter((s) => s.weaverId === weaver.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Breadcrumb */}
      <nav className="text-xs text-stone-500 flex items-center gap-1.5">
        <Link to="/" className="hover:text-stone-800">Home</Link>
        <span>/</span>
        <Link to="/collections?loom=handloom" className="hover:text-stone-800">Handloom Artisans</Link>
        <span>/</span>
        <span className="text-stone-800 font-medium">{weaver.name}</span>
      </nav>

      {/* Weaver Profile Hero */}
      <div className="rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-sm">
        <div className="relative h-48 sm:h-64 bg-stone-900">
          <img src={weaver.coverImage} alt={weaver.name} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
        </div>

        <div className="px-6 sm:px-10 pb-8 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 -mt-16 sm:-mt-20 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-end gap-5">
              <img
                src={weaver.photo}
                alt={weaver.name}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-white shadow-xl bg-stone-100"
              />
              <div className="space-y-1">
                <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider">
                  Certified Master Artisan
                </span>
                <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900">
                  {weaver.name}
                </h1>
                <p className="font-tamil text-sm text-stone-500">{weaver.tamilName}</p>
                <p className="text-xs text-stone-600 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-heritage-maroon" /> {weaver.origin}
                </p>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2 max-w-xs">
              <Award className="w-5 h-5 text-heritage-gold flex-shrink-0" />
              <span>{weaver.experience}</span>
            </div>
          </div>

          {/* Bio & Craft philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-200 text-xs sm:text-sm">
            <div className="md:col-span-2 space-y-4">
              <h3 className="font-serif font-bold text-base text-stone-900">Artisan Journey & Lineage</h3>
              <p className="text-stone-600 leading-relaxed">{weaver.bio}</p>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 italic text-stone-700">
                "{weaver.craftMotto}"
              </div>
            </div>

            <div className="space-y-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
              <h4 className="font-bold text-stone-800 uppercase tracking-wider">Craft Specifications</h4>
              <p><strong className="text-stone-700">Speciality:</strong> {weaver.speciality}</p>
              <p><strong className="text-stone-700">Loom Rig:</strong> {weaver.loomType}</p>
              <div>
                <strong className="text-stone-700 block mb-1">State & National Honours:</strong>
                <ul className="space-y-1 text-stone-600">
                  {weaver.awards.map((aw) => (
                    <li key={aw} className="flex items-center gap-1.5 text-emerald-800 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {aw}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Handcrafted Sarees by this artisan */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <h2 className="font-serif font-bold text-xl text-stone-900">
              Active Handloom Creations by {weaver.name.split(' ')[2] || weaver.name}
            </h2>
            <p className="text-xs text-stone-500">
              Direct from the artisan's pit loom in {weaver.origin.split(',')[0]}
            </p>
          </div>
          <span className="text-xs font-semibold text-stone-600 bg-stone-100 px-3 py-1 rounded-full">
            {weaverSarees.length} Handcrafted Pieces
          </span>
        </div>

        {weaverSarees.length === 0 ? (
          <p className="text-xs text-stone-500">No active sarees currently listed for this weaver.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weaverSarees.map((saree) => (
              <SareeCard key={saree.id} saree={saree} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

