import React, { useState, useMemo } from 'react';
import { useSearchParams, useParams, Link } from 'react-router-dom';
import { 
  Filter, 
  SlidersHorizontal, 
  Grid, 
  List, 
  X, 
  ChevronDown, 
  RotateCcw,
  Sparkles,
  MapPin,
  Check
} from 'lucide-react';
import { SAREES_DATA } from '../data/sarees';
import SareeCard from '../components/SareeCard';

export default function ProductListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { slug } = useParams(); // For /categories/:slug

  // Read filter params from URL
  const loomParam = searchParams.get('loom') || 'all';
  const hubParam = searchParams.get('hub') || 'all';
  const occasionParam = searchParams.get('occasion') || 'all';
  const filterParam = searchParams.get('filter') || 'all'; // new, trending

  // Local filter states
  const [selectedLoom, setSelectedLoom] = useState(loomParam);
  const [selectedHub, setSelectedHub] = useState(hubParam);
  const [selectedFabric, setSelectedFabric] = useState('all');
  const [selectedOccasion, setSelectedOccasion] = useState(occasionParam);
  const [priceRange, setPriceRange] = useState('all'); // 'all', 'under5k', '5k-15k', '15k-30k', 'above30k'
  const [selectedColor, setSelectedColor] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync if URL params change
  React.useEffect(() => {
    if (loomParam !== 'all') setSelectedLoom(loomParam);
    if (hubParam !== 'all') setSelectedHub(hubParam);
    if (occasionParam !== 'all') setSelectedOccasion(occasionParam);
  }, [loomParam, hubParam, occasionParam]);

  // Distinct values for filter options
  const allHubs = useMemo(() => Array.from(new Set(SAREES_DATA.map(s => s.originHub))), []);
  const allFabrics = useMemo(() => Array.from(new Set(SAREES_DATA.map(s => s.fabric))), []);
  const allColors = useMemo(() => Array.from(new Set(SAREES_DATA.map(s => s.primaryColor))), []);
  const allOccasions = ["Wedding", "Reception", "Festival", "Temple", "Office", "Casual"];

  // Category slug handling (e.g. /categories/pattu or /categories/cotton)
  const categoryFilter = slug ? slug.toLowerCase() : null;

  // Filter and Sort Pipeline
  const filteredSarees = useMemo(() => {
    return SAREES_DATA.filter((saree) => {
      // Category slug match
      if (categoryFilter) {
        if (categoryFilter === 'pattu' && saree.category !== 'pattu') return false;
        if (categoryFilter === 'cotton' && saree.category !== 'cotton') return false;
        if (categoryFilter === 'handloom' && saree.loomType !== 'handloom') return false;
        if (categoryFilter === 'powerloom' && saree.loomType !== 'powerloom') return false;
      }

      // Quick filter (new or trending)
      if (filterParam === 'new' && !saree.newArrival) return false;
      if (filterParam === 'trending' && !saree.trending) return false;

      // Loom type
      if (selectedLoom !== 'all' && saree.loomType !== selectedLoom) return false;

      // Hub
      if (selectedHub !== 'all' && saree.originHub !== selectedHub) return false;

      // Fabric
      if (selectedFabric !== 'all' && saree.fabric !== selectedFabric) return false;

      // Occasion
      if (selectedOccasion !== 'all' && !saree.occasion.toLowerCase().includes(selectedOccasion.toLowerCase())) return false;

      // Color
      if (selectedColor !== 'all' && saree.primaryColor !== selectedColor) return false;

      // Price range
      if (priceRange === 'under5k' && saree.price >= 5000) return false;
      if (priceRange === '5k-15k' && (saree.price < 5000 || saree.price > 15000)) return false;
      if (priceRange === '15k-30k' && (saree.price < 15000 || saree.price > 30000)) return false;
      if (priceRange === 'above30k' && saree.price <= 30000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [categoryFilter, filterParam, selectedLoom, selectedHub, selectedFabric, selectedOccasion, selectedColor, priceRange, sortBy]);

  const resetFilters = () => {
    setSelectedLoom('all');
    setSelectedHub('all');
    setSelectedFabric('all');
    setSelectedOccasion('all');
    setPriceRange('all');
    setSelectedColor('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const activeFilterCount = [
    selectedLoom !== 'all',
    selectedHub !== 'all',
    selectedFabric !== 'all',
    selectedOccasion !== 'all',
    priceRange !== 'all',
    selectedColor !== 'all',
  ].filter(Boolean).length;

  const pageTitle = categoryFilter
    ? `${categoryFilter.toUpperCase()} Saree Collection`
    : filterParam === 'new'
    ? 'New Arrivals'
    : filterParam === 'trending'
    ? 'Trending Collections'
    : 'All Saree Collections';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Breadcrumb & Header */}
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Collections</span>
          {categoryFilter && (
            <>
              <span>/</span>
              <span className="text-heritage-maroon capitalize font-semibold">{categoryFilter}</span>
            </>
          )}
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 tracking-wide">
              {pageTitle}
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Showing {filteredSarees.length} sarees direct from Tamil Nadu weavers & boutique societies
            </p>
          </div>

          {/* Sort & View Mode Controls */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            {/* Mobile Filter Trigger */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3 py-2 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 bg-white shadow-sm"
            >
              <Filter className="w-4 h-4 text-heritage-maroon" />
              <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-stone-300 text-stone-800 text-xs font-medium rounded-xl pl-3 pr-8 py-2 focus:outline-none focus:border-heritage-gold shadow-sm cursor-pointer"
              >
                <option value="featured">Featured & Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">New Arrivals</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>

            {/* View Mode Switcher */}
            <div className="hidden sm:flex items-center rounded-xl border border-stone-300 bg-white p-0.5 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg ${viewMode === 'grid' ? 'bg-heritage-maroon text-white' : 'text-stone-500 hover:text-stone-800'}`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg ${viewMode === 'list' ? 'bg-heritage-maroon text-white' : 'text-stone-500 hover:text-stone-800'}`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filter Chips */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-stone-400 font-medium">Active Filters:</span>
          {selectedLoom !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-stone-100 text-stone-800 border border-stone-200">
              Loom: {selectedLoom}
              <button onClick={() => setSelectedLoom('all')}><X className="w-3 h-3 text-stone-400" /></button>
            </span>
          )}
          {selectedHub !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-stone-100 text-stone-800 border border-stone-200">
              Hub: {selectedHub}
              <button onClick={() => setSelectedHub('all')}><X className="w-3 h-3 text-stone-400" /></button>
            </span>
          )}
          {priceRange !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-stone-100 text-stone-800 border border-stone-200">
              Price: {priceRange}
              <button onClick={() => setPriceRange('all')}><X className="w-3 h-3 text-stone-400" /></button>
            </span>
          )}
          {selectedColor !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-stone-100 text-stone-800 border border-stone-200">
              Color: {selectedColor}
              <button onClick={() => setSelectedColor('all')}><X className="w-3 h-3 text-stone-400" /></button>
            </span>
          )}
          <button
            onClick={resetFilters}
            className="text-xs font-semibold text-heritage-maroon hover:underline flex items-center gap-1 ml-2"
          >
            <RotateCcw className="w-3 h-3" /> Reset All
          </button>
        </div>
      )}

      {/* Main Grid & Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block space-y-6 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm sticky top-28">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <h3 className="font-serif font-bold text-sm text-stone-900 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-heritage-maroon" />
              <span>Filters</span>
            </h3>
            {activeFilterCount > 0 && (
              <button onClick={resetFilters} className="text-xs text-heritage-maroon hover:underline font-semibold">
                Clear All
              </button>
            )}
          </div>

          {/* Loom Type */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
              Loom Craft
            </label>
            <div className="space-y-1.5 text-xs text-stone-600">
              {[
                { id: 'all', label: 'All Loom Types' },
                { id: 'handloom', label: '100% Handloom (கைத்தறி)' },
                { id: 'powerloom', label: 'Powerloom Jacquard' },
              ].map((opt) => (
                <label key={opt.id} className="flex items-center gap-2 cursor-pointer hover:text-stone-900">
                  <input
                    type="radio"
                    name="loom"
                    checked={selectedLoom === opt.id}
                    onChange={() => setSelectedLoom(opt.id)}
                    className="accent-heritage-maroon"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Weaving Hub / Origin */}
          <div className="space-y-2 pt-3 border-t border-stone-100">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
              Weaving Origin Hub
            </label>
            <div className="space-y-1.5 text-xs text-stone-600 max-h-40 overflow-y-auto pr-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="hub"
                  checked={selectedHub === 'all'}
                  onChange={() => setSelectedHub('all')}
                  className="accent-heritage-maroon"
                />
                <span>All Origins</span>
              </label>
              {allHubs.map((hub) => (
                <label key={hub} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hub"
                    checked={selectedHub === hub}
                    onChange={() => setSelectedHub(hub)}
                    className="accent-heritage-maroon"
                  />
                  <span>{hub}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2 pt-3 border-t border-stone-100">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
              Budget Range
            </label>
            <div className="space-y-1.5 text-xs text-stone-600">
              {[
                { id: 'all', label: 'All Prices' },
                { id: 'under5k', label: 'Under ₹5,000' },
                { id: '5k-15k', label: '₹5,000 - ₹15,000' },
                { id: '15k-30k', label: '₹15,000 - ₹30,000' },
                { id: 'above30k', label: 'Above ₹30,000 (Bridal Pattu)' },
              ].map((p) => (
                <label key={p.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange === p.id}
                    onChange={() => setPriceRange(p.id)}
                    className="accent-heritage-maroon"
                  />
                  <span>{p.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Occasion */}
          <div className="space-y-2 pt-3 border-t border-stone-100">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
              Occasion
            </label>
            <div className="space-y-1.5 text-xs text-stone-600">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="occasion"
                  checked={selectedOccasion === 'all'}
                  onChange={() => setSelectedOccasion('all')}
                  className="accent-heritage-maroon"
                />
                <span>All Occasions</span>
              </label>
              {allOccasions.map((occ) => (
                <label key={occ} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="occasion"
                    checked={selectedOccasion === occ}
                    onChange={() => setSelectedOccasion(occ)}
                    className="accent-heritage-maroon"
                  />
                  <span>{occ}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="space-y-2 pt-3 border-t border-stone-100">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
              Primary Shade
            </label>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedColor('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${selectedColor === 'all' ? 'border-heritage-maroon bg-heritage-maroon text-white' : 'border-stone-200 text-stone-700'}`}
              >
                All
              </button>
              {allColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${selectedColor === color ? 'border-heritage-maroon bg-heritage-maroon text-white' : 'border-stone-200 text-stone-700'}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

        </aside>

        {/* Product Cards Container */}
        <div className="lg:col-span-3">
          {filteredSarees.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-heritage-maroon mx-auto flex items-center justify-center">
                <SlidersHorizontal className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-800">No Sarees Matched Your Filters</h3>
              <p className="text-xs text-stone-500 max-w-md mx-auto">
                Try loosening your filters or resetting to view all available Kanchipuram, Madurai, Chettinad, and Arani handlooms.
              </p>
              <button
                onClick={resetFilters}
                className="bg-heritage-maroon text-white font-semibold text-xs px-5 py-2.5 rounded-xl hover:bg-heritage-maroonDark transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredSarees.map((saree) => (
                <SareeCard key={saree.id} saree={saree} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredSarees.map((saree) => (
                <div 
                  key={saree.id}
                  className="bg-white rounded-2xl border border-stone-200 p-4 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-4 items-center"
                >
                  <img
                    src={saree.images[0]}
                    alt={saree.title}
                    className="w-full sm:w-36 h-44 object-cover rounded-xl"
                  />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-heritage-maroon border border-amber-200">
                        {saree.originHub} • {saree.loomType}
                      </span>
                      <span className="text-xs text-emerald-700 font-medium">{saree.certification}</span>
                    </div>
                    <Link to={`/products/${saree.id}`} className="font-serif font-bold text-base text-stone-900 hover:text-heritage-maroon block">
                      {saree.title}
                    </Link>
                    <p className="text-xs text-stone-600 line-clamp-2">{saree.description}</p>
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-lg font-bold text-stone-900">₹{saree.price.toLocaleString('en-IN')}</span>
                      {saree.originalPrice > saree.price && (
                        <span className="text-xs text-stone-400 line-through">₹{saree.originalPrice.toLocaleString('en-IN')}</span>
                      )}
                      <span className="text-xs text-heritage-maroon font-bold">{saree.discount}% OFF</span>
                    </div>
                  </div>
                  <div className="sm:self-center flex flex-col gap-2 w-full sm:w-auto">
                    <Link
                      to={`/products/${saree.id}`}
                      className="bg-heritage-maroon text-white text-xs font-semibold px-4 py-2 rounded-xl text-center hover:bg-heritage-maroonDark transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Mobile Filter Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm lg:hidden animate-fadeIn">
          <div className="bg-white w-full max-w-xs h-full p-6 overflow-y-auto space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="font-serif font-bold text-base text-stone-900">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)}>
                <X className="w-5 h-5 text-stone-500" />
              </button>
            </div>

            {/* Mobile filters replicate controls */}
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-stone-700 uppercase block mb-1.5">Loom</label>
                <div className="space-y-1 text-xs">
                  {['all', 'handloom', 'powerloom'].map((l) => (
                    <label key={l} className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={selectedLoom === l}
                        onChange={() => setSelectedLoom(l)}
                        className="accent-heritage-maroon"
                      />
                      <span className="capitalize">{l}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <label className="text-xs font-bold text-stone-700 uppercase block mb-1.5">Origin Hub</label>
                <div className="space-y-1 text-xs">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={selectedHub === 'all'}
                      onChange={() => setSelectedHub('all')}
                      className="accent-heritage-maroon"
                    />
                    <span>All Origins</span>
                  </label>
                  {allHubs.map((h) => (
                    <label key={h} className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={selectedHub === h}
                        onChange={() => setSelectedHub(h)}
                        className="accent-heritage-maroon"
                      />
                      <span>{h}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex gap-2">
              <button
                onClick={resetFilters}
                className="flex-1 py-2 text-xs font-semibold text-stone-600 border border-stone-300 rounded-xl"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-2 text-xs font-semibold text-white bg-heritage-maroon rounded-xl"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

