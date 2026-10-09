import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, Eye, X, Store, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';
import { SAREES_DATA } from '../data/sarees';
import SareeCard from '../components/SareeCard';

export default function SareeCollections() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const loomParam = searchParams.get('loom') || 'all';
  const hubParam = searchParams.get('hub') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedLoom, setSelectedLoom] = useState(loomParam);
  const [selectedHub, setSelectedHub] = useState(hubParam);
  const [selectedModalSaree, setSelectedModalSaree] = useState(null);

  // Sync params
  React.useEffect(() => {
    if (categoryParam !== 'all') setSelectedCategory(categoryParam);
    if (loomParam !== 'all') setSelectedLoom(loomParam);
    if (hubParam !== 'all') setSelectedHub(hubParam);
  }, [categoryParam, loomParam, hubParam]);

  const allHubs = useMemo(() => Array.from(new Set(SAREES_DATA.map(s => s.originHub))), []);

  const filteredSarees = useMemo(() => {
    return SAREES_DATA.filter((saree) => {
      if (selectedCategory !== 'all' && saree.category !== selectedCategory) return false;
      if (selectedLoom !== 'all' && saree.loomType !== selectedLoom) return false;
      if (selectedHub !== 'all' && saree.originHub !== selectedHub) return false;
      return true;
    });
  }, [selectedCategory, selectedLoom, selectedHub]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedLoom('all');
    setSelectedHub('all');
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Saree Collections</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900">
              Saree Collections & Textile Archive
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-2xl">
              An educational showcase of certified Pattu, breathable Sungudi & Chettinad cottons, handloom pit-loom treasures, and contemporary powerloom drapes.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-stone-500">
              Displaying {filteredSarees.length} Handpicked Drapes
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs Bar */}
      <div className="flex flex-wrap gap-2 items-center justify-between bg-white p-3 rounded-2xl border border-stone-200 shadow-sm text-xs">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'all', label: 'All Collections' },
            { id: 'pattu', label: 'Pattu & Silk Sarees' },
            { id: 'cotton', label: 'Cotton & Sungudi' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-heritage-maroon text-white font-bold'
                  : 'bg-stone-50 text-stone-700 hover:bg-stone-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Loom Type Pills */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setSelectedLoom('all')}
            className={`px-2.5 py-1 rounded-lg ${selectedLoom === 'all' ? 'bg-stone-800 text-white font-bold' : 'text-stone-600 hover:bg-stone-100'}`}
          >
            All Looms
          </button>
          <button
            onClick={() => setSelectedLoom('handloom')}
            className={`px-2.5 py-1 rounded-lg ${selectedLoom === 'handloom' ? 'bg-emerald-800 text-white font-bold' : 'text-stone-600 hover:bg-stone-100'}`}
          >
            Handloom Only
          </button>
          <button
            onClick={() => setSelectedLoom('powerloom')}
            className={`px-2.5 py-1 rounded-lg ${selectedLoom === 'powerloom' ? 'bg-stone-800 text-white font-bold' : 'text-stone-600 hover:bg-stone-100'}`}
          >
            Powerloom
          </button>
        </div>

        {/* Reset */}
        {(selectedCategory !== 'all' || selectedLoom !== 'all' || selectedHub !== 'all') && (
          <button onClick={resetFilters} className="text-heritage-maroon font-bold underline text-xs">
            Clear Filters
          </button>
        )}
      </div>

      {/* Hub Filter Bar */}
      <div className="flex gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-stone-400 font-bold self-center whitespace-nowrap">Filter by Origin Hub:</span>
        <button
          onClick={() => setSelectedHub('all')}
          className={`px-3 py-1 rounded-full whitespace-nowrap ${selectedHub === 'all' ? 'bg-stone-900 text-white font-bold' : 'bg-white border text-stone-700'}`}
        >
          All Hubs
        </button>
        {allHubs.map((hub) => (
          <button
            key={hub}
            onClick={() => setSelectedHub(hub)}
            className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
              selectedHub === hub ? 'bg-heritage-maroon text-white font-bold' : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            {hub}
          </button>
        ))}
      </div>

      {/* Sarees Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSarees.map((saree) => (
          <SareeCard 
            key={saree.id} 
            saree={saree} 
            onSelect={(s) => setSelectedModalSaree(s)}
          />
        ))}
      </div>

      {/* Saree Informational Modal */}
      {selectedModalSaree && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <span className="text-[10px] font-bold text-heritage-maroon uppercase tracking-wider">
                  {selectedModalSaree.originHub} • {selectedModalSaree.loomType}
                </span>
                <h3 className="font-serif font-bold text-xl text-stone-900 mt-0.5">
                  {selectedModalSaree.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedModalSaree(null)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <img
                src={selectedModalSaree.images[0]}
                alt={selectedModalSaree.title}
                className="w-full aspect-[4/5] object-cover rounded-2xl border border-stone-200"
              />
              <div className="space-y-3 text-xs sm:text-sm">
                <p className="text-stone-600 leading-relaxed">
                  {selectedModalSaree.description}
                </p>
                <div className="space-y-1.5 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                  <p><strong className="text-stone-800">Fabric Composition:</strong> {selectedModalSaree.fabric}</p>
                  <p><strong className="text-stone-800">Zari Specification:</strong> {selectedModalSaree.zariType}</p>
                  <p><strong className="text-stone-800">Warp x Weft Count:</strong> {selectedModalSaree.warpWeft}</p>
                  <p><strong className="text-stone-800">Border Technique:</strong> {selectedModalSaree.borderType}</p>
                  <p><strong className="text-stone-800">Approximate Weight:</strong> {selectedModalSaree.weight}</p>
                  <p><strong className="text-stone-800">Certifications:</strong> {selectedModalSaree.certification}</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
              <h5 className="font-bold uppercase tracking-wider">Weaving History & Motif Meaning</h5>
              <p className="leading-relaxed text-stone-700">{selectedModalSaree.weaveStory}</p>
            </div>

            <div className="flex justify-between items-center pt-2">
              <Link
                to={`/shops`}
                onClick={() => setSelectedModalSaree(null)}
                className="text-xs font-bold text-heritage-maroon hover:underline flex items-center gap-1"
              >
                <Store className="w-3.5 h-3.5" />
                <span>Find verified shops for this weave</span>
              </Link>
              <button
                onClick={() => setSelectedModalSaree(null)}
                className="bg-stone-900 text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-stone-800"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

