import React from 'react';
import { X, MapPin, Check, Navigation, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { TAMIL_NADU_CITIES } from '../data/shops';

export default function LocationModal() {
  const { 
    selectedLocation, 
    setSelectedLocation, 
    isLocationModalOpen, 
    setIsLocationModalOpen 
  } = useShop();

  if (!isLocationModalOpen) return null;

  const handleSelect = (city) => {
    setSelectedLocation(city);
    setIsLocationModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-heritage-maroon/10 text-heritage-maroon flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-800">Select Weaving Hub / City</h3>
              <p className="text-xs text-stone-500">Discover authentic sarees & local weaver societies near you</p>
            </div>
          </div>
          <button 
            onClick={() => setIsLocationModalOpen(false)}
            className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Location Quick Button */}
        <div className="mt-4">
          <button
            onClick={() => handleSelect("Chennai")}
            className="w-full flex items-center justify-between p-3 rounded-xl border border-dashed border-heritage-gold bg-amber-50/50 hover:bg-amber-100/50 transition-colors text-left"
          >
            <div className="flex items-center gap-2.5">
              <Navigation className="w-4 h-4 text-heritage-maroon" />
              <div>
                <p className="text-xs font-semibold text-stone-800">Use Current Location</p>
                <p className="text-[11px] text-stone-500">Auto-detecting Chennai, Tamil Nadu</p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-heritage-maroon">Detect</span>
          </button>
        </div>

        {/* City Grid */}
        <div className="mt-4">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2.5">
            Famous Textile & Weaving Hubs
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {TAMIL_NADU_CITIES.map((city) => {
              const isSelected = selectedLocation === city;
              return (
                <button
                  key={city}
                  onClick={() => handleSelect(city)}
                  className={`p-2.5 rounded-xl text-left border text-xs font-medium transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-heritage-maroon bg-heritage-maroon text-white shadow-sm'
                      : 'border-stone-200 hover:border-heritage-gold hover:bg-amber-50/30 text-stone-700'
                  }`}
                >
                  <span className="truncate">{city}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
          <span className="flex items-center gap-1 text-heritage-teal font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Shows local stock & direct shipping times
          </span>
          <button
            onClick={() => handleSelect("All Tamil Nadu")}
            className="text-heritage-maroon hover:underline font-semibold"
          >
            Reset to All TN
          </button>
        </div>
      </div>
    </div>
  );
}

