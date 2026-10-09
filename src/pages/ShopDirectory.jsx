import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Store, MapPin, Phone, CheckCircle2, ArrowRight, Search } from 'lucide-react';
import { SHOPS_DATA } from '../data/shops';

export default function ShopDirectory() {
  const [search, setSearch] = useState('');

  const filtered = SHOPS_DATA.filter((s) => 
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.city.toLowerCase().includes(search.toLowerCase()) ||
    s.specialities.some(sp => sp.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Shop Directory</span>
        </nav>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900">
          Tamil Nadu Saree Shop & Society Directory
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          A public index of registered weavers' cooperatives, historic silk houses, and authorized handloom boutiques.
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-md">
        <input
          type="text"
          placeholder="Filter directory by society name, city or fabric..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2.5 rounded-xl bg-white border border-stone-300 text-xs focus:outline-none focus:border-heritage-gold shadow-sm"
        />
      </div>

      {/* Directory Table */}
      <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-stone-50 border-b border-stone-200 text-stone-400 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Society / Shop Name</th>
                <th className="p-4">Location / Hub</th>
                <th className="p-4">Specialities</th>
                <th className="p-4">Contact</th>
                <th className="p-4 text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              {filtered.map((shop) => (
                <tr key={shop.id} className="hover:bg-amber-50/30 transition-colors">
                  <td className="p-4 font-bold text-stone-900">
                    <div className="flex items-center gap-2">
                      <span>{shop.name}</span>
                      {shop.verified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />}
                    </div>
                    <span className="font-tamil text-stone-400 text-xs block font-normal">{shop.tamilName}</span>
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-heritage-maroon">{shop.city}</span>
                    <span className="text-xs text-stone-500 block truncate max-w-xs">{shop.area}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {shop.specialities.map(sp => (
                        <span key={sp} className="px-2 py-0.5 rounded bg-stone-100 text-[10px] text-stone-700">
                          {sp}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-xs font-mono">{shop.phone}</td>
                  <td className="p-4 text-right">
                    <Link
                      to={`/shops/${shop.id}`}
                      className="inline-flex items-center gap-1 font-bold text-heritage-maroon hover:underline text-xs"
                    >
                      <span>View</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

