import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Store, MapPin, Phone, Clock, Search, CheckCircle2, ArrowRight } from 'lucide-react';
import { SHOPS_DATA, TAMIL_NADU_CITIES } from '../data/shops';

export default function DiscoverShops() {
  const [selectedCity, setSelectedCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredShops = useMemo(() => {
    return SHOPS_DATA.filter((shop) => {
      if (selectedCity !== 'All' && shop.city.toLowerCase() !== selectedCity.toLowerCase()) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = shop.name.toLowerCase().includes(q);
        const matchCity = shop.city.toLowerCase().includes(q);
        const matchSpec = shop.specialities.some(s => s.toLowerCase().includes(q));
        if (!matchName && !matchCity && !matchSpec) return false;
      }
      return true;
    });
  }, [selectedCity, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Discover Local Shops</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900">
              Discover Local Shops & Weavers Societies
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-2xl">
              Connect directly with verified handloom societies, historic silk houses, and local boutiques across Tamil Nadu's sacred weaving centers.
            </p>
          </div>

          <Link
            to="/shops"
            className="text-xs font-bold text-heritage-maroon hover:underline flex items-center gap-1 self-start md:self-auto"
          >
            <span>View Full Directory List</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Search and City Filter Pills */}
      <div className="space-y-4">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search by shop name, city, or speciality (e.g. Sungudi, Korvai)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-stone-300 focus:outline-none focus:border-heritage-gold shadow-sm"
          />
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
        </div>

        {/* City Filter Buttons */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <button
            onClick={() => setSelectedCity('All')}
            className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              selectedCity === 'All'
                ? 'bg-heritage-maroon text-white font-bold shadow-sm'
                : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            All Cities
          </button>
          {["Chennai", "Kanchipuram", "Madurai", "Coimbatore", "Chettinad", "Salem", "Arani"].map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCity === city
                  ? 'bg-heritage-maroon text-white font-bold shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Shops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredShops.map((shop) => (
          <div
            key={shop.id}
            className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                <img src={shop.bannerImage} alt={shop.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-heritage-gold" />
                  <span>{shop.city}</span>
                </div>
                {shop.verified && (
                  <div className="absolute top-3 right-3 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                    <CheckCircle2 className="w-3 h-3" /> Certified Society
                  </div>
                )}
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif font-bold text-lg text-stone-900 leading-snug">
                  {shop.name}
                </h3>
                <p className="font-tamil text-xs text-stone-500">{shop.tamilName}</p>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {shop.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {shop.specialities.map((spec) => (
                    <span key={spec} className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 text-[10px]">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="space-y-1 text-xs text-stone-500 pt-2 border-t border-stone-100">
                  <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-heritage-maroon flex-shrink-0" /><span className="truncate">{shop.address}</span></p>
                  <p className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-stone-400" /><span>{shop.timings}</span></p>
                  <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-stone-400" /><span>{shop.phone}</span></p>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link
                to={`/shops/${shop.id}`}
                className="w-full py-2.5 bg-heritage-maroon hover:bg-heritage-maroonDark text-white text-xs font-bold rounded-xl text-center block transition-colors shadow-sm"
              >
                View Shop Profile & Details
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
