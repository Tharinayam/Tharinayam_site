import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, Layers, Sparkles } from 'lucide-react';

const GALLERY_PHOTOS = [
  {
    title: "Bridal Crimson Korvai Pit-Loom Weave",
    category: "Saree Photography",
    hub: "Kanchipuram",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Master Artisan at Pit-Loom with Adai Harness",
    category: "Weaving Process",
    hub: "Kanchipuram",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Hand-Tied Sungudi Cotton Tie-Dye Ring Motif",
    category: "Weaving Process",
    hub: "Madurai",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Chettinad Architectural Checks & Earth Tones",
    category: "Saree Photography",
    hub: "Karaikudi",
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Peacock Blue Royal Brocade with Gold Zari Pallu",
    category: "Saree Photography",
    hub: "Kanchipuram",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Traditional Heritage Weavers Society Showroom",
    category: "Shop Images",
    hub: "Mylapore, Chennai",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const filtered = filter === 'All' 
    ? GALLERY_PHOTOS 
    : GALLERY_PHOTOS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-heritage-maroon uppercase tracking-widest">
          Visual Textile Archive
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          The Loom Gallery
        </h1>
        <p className="text-xs sm:text-sm text-stone-600">
          Curated photography capturing the intimate poetry of pit-loom shuttles, pure silk drapes, and traditional Tamil Nadu boutique showrooms.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 overflow-x-auto text-xs font-semibold">
        {['All', 'Saree Photography', 'Weaving Process', 'Shop Images'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl transition-all ${
              filter === cat
                ? 'bg-heritage-maroon text-white font-bold shadow-sm'
                : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setPreviewPhoto(item)}
            className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200 shadow-sm cursor-pointer hover:shadow-elevated transition-all"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-heritage-gold">
                {item.hub} • {item.category}
              </span>
              <h4 className="font-serif font-bold text-sm leading-snug mt-0.5">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {previewPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-stone-200 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-heritage-maroon uppercase">
                  {previewPhoto.hub} • {previewPhoto.category}
                </span>
                <h3 className="font-serif font-bold text-lg text-stone-900">{previewPhoto.title}</h3>
              </div>
              <button
                onClick={() => setPreviewPhoto(null)}
                className="text-stone-400 hover:text-stone-900 p-1 rounded-full"
              >
                ✕
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200">
              <img src={previewPhoto.image} alt={previewPhoto.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

