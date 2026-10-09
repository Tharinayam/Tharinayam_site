import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, X, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function CompareFloatingBar() {
  const { compareList, removeFromCompare, clearCompare } = useShop();

  if (compareList.length === 0) return null;

  return (
    <aside aria-label="Compare Sarees Selection" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md border border-stone-300 shadow-2xl rounded-2xl px-4 py-3 flex items-center gap-4 max-w-xl w-[92%] animate-slideUp">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-heritage-maroon text-heritage-gold flex items-center justify-center">
          <Layers className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs font-bold text-stone-800">Compare Sarees</p>
          <p className="text-[10px] text-stone-500">{compareList.length} of 4 selected</p>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex items-center gap-1.5 flex-1 overflow-x-auto py-1">
        {compareList.map((saree) => (
          <div key={saree.id} className="relative group/thumb flex-shrink-0">
            <img 
              src={saree.images[0]} 
              alt={saree.title} 
              className="w-10 h-10 object-cover rounded-lg border border-stone-200" 
            />
            <button
              onClick={() => removeFromCompare(saree.id)}
              className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-stone-900 text-white flex items-center justify-center text-[10px] opacity-80 hover:opacity-100"
            >
              <X className="w-2.5 h-2.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={clearCompare}
          className="text-[11px] text-stone-500 hover:text-stone-800 underline px-1"
        >
          Clear
        </button>
        <Link
          to="/compare"
          className="bg-heritage-maroon hover:bg-heritage-maroonDark text-white text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-1.5 shadow-sm transition-all"
        >
          <span>Compare Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </aside>
  );
}

