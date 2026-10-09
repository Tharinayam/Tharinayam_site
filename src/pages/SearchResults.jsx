import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Store, ArrowRight } from 'lucide-react';
import { SAREES_DATA } from '../data/sarees';
import { SHOPS_DATA } from '../data/shops';
import SareeCard from '../components/SareeCard';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const matchedSarees = React.useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return SAREES_DATA.filter((s) =>
      s.title.toLowerCase().includes(q) ||
      s.originHub.toLowerCase().includes(q) ||
      s.fabric.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.tags.some(t => t.toLowerCase().includes(q))
    );
  }, [query]);

  const matchedShops = React.useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return SHOPS_DATA.filter((sh) =>
      sh.name.toLowerCase().includes(q) ||
      sh.city.toLowerCase().includes(q) ||
      sh.specialities.some(s => s.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Search Results</span>
        </nav>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900">
          Search Results for "{query}"
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          Found {matchedSarees.length} matching sarees and {matchedShops.length} verified weaver societies
        </p>
      </div>

      {matchedSarees.length === 0 && matchedShops.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 space-y-4">
          <Search className="w-12 h-12 text-stone-300 mx-auto" />
          <h3 className="font-serif font-bold text-xl text-stone-800">No matching sarees or shops found</h3>
          <p className="text-xs text-stone-500 max-w-md mx-auto">
            Try searching for Kanchipuram, Madurai, Sungudi, Chettinad, pure silk, or cotton.
          </p>
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 bg-heritage-maroon text-white font-bold text-xs px-6 py-3 rounded-xl"
          >
            <span>Browse All Sarees</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Sarees */}
          {matchedSarees.length > 0 && (
            <div className="space-y-4">
              <h2 className="font-serif font-bold text-xl text-stone-900">
                Matching Sarees ({matchedSarees.length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {matchedSarees.map((saree) => (
                  <SareeCard key={saree.id} saree={saree} />
                ))}
              </div>
            </div>
          )}

          {/* Shops */}
          {matchedShops.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-stone-200">
              <h2 className="font-serif font-bold text-xl text-stone-900">
                Matching Weaver Societies & Shops ({matchedShops.length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchedShops.map((shop) => (
                  <Link
                    key={shop.id}
                    to={`/shops/${shop.id}`}
                    className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all space-y-2 block"
                  >
                    <span className="text-[10px] font-bold text-heritage-maroon uppercase">{shop.city}</span>
                    <h3 className="font-serif font-bold text-base text-stone-900">{shop.name}</h3>
                    <p className="text-xs text-stone-500 truncate">{shop.address}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}

