import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Eye, ShieldCheck, MapPin } from 'lucide-react';

export default function SareeCard({ saree, onSelect }) {
  return (
    <div className="group bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-elevated transition-all duration-300 flex flex-col justify-between">
      
      {/* Saree Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <img
          src={saree.images[0]}
          alt={saree.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase shadow-sm ${
            saree.loomType === 'handloom' 
              ? 'bg-emerald-800/90 text-emerald-100 backdrop-blur-md' 
              : 'bg-stone-800/80 text-stone-200 backdrop-blur-md'
          }`}>
            {saree.loomType === 'handloom' ? '100% Handloom' : 'Powerloom Jacquard'}
          </span>
          <span className="bg-heritage-maroon/90 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
            {saree.originHub} GI Hub
          </span>
        </div>

        {/* Quick View Button */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
          <Link
            to={`/collections?view=${saree.id}`}
            onClick={(e) => {
              if (onSelect) {
                e.preventDefault();
                onSelect(saree);
              }
            }}
            className="flex-1 bg-white/95 hover:bg-white text-stone-900 font-bold text-xs py-2 px-3 rounded-xl shadow-md backdrop-blur-sm flex items-center justify-center gap-1.5 transition-all"
          >
            <Eye className="w-3.5 h-3.5 text-heritage-maroon" />
            <span>Explore Details</span>
          </Link>
          <Link
            to="/virtual-try-on"
            className="bg-purple-900/90 hover:bg-purple-900 text-white font-semibold text-xs p-2 rounded-xl shadow-md backdrop-blur-sm transition-all"
            title="AI Virtual Try-On Preview"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
          </Link>
        </div>
      </div>

      {/* Saree Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
            <span className="font-bold text-heritage-maroon uppercase tracking-wide">
              {saree.originHub} • {saree.fabric}
            </span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Certified
            </span>
          </div>

          <h4 className="font-serif font-bold text-sm text-stone-900 line-clamp-2 leading-snug">
            {saree.title}
          </h4>

          <p className="font-tamil text-xs text-stone-500 mt-0.5">
            {saree.tamilTitle}
          </p>

          <p className="text-xs text-stone-600 line-clamp-2 mt-2 leading-relaxed">
            {saree.description}
          </p>
        </div>

        {/* Technical Craft Snippet */}
        <div className="pt-3 border-t border-stone-100 space-y-1 text-[11px] text-stone-500">
          <p><strong className="text-stone-700">Border:</strong> {saree.borderType}</p>
          <p><strong className="text-stone-700">Zari:</strong> {saree.zariType}</p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={() => onSelect ? onSelect(saree) : null}
            className="w-full py-2 px-3 rounded-xl bg-stone-100 hover:bg-heritage-maroon hover:text-white text-stone-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
          >
            <span>View Weave & Fabric Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
