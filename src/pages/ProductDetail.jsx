import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Sparkles, 
  Layers, 
  ShoppingBag, 
  ShieldCheck, 
  Star, 
  Truck, 
  RotateCcw, 
  CheckCircle2, 
  Share2, 
  MapPin, 
  Phone, 
  Store,
  ChevronRight,
  Info
} from 'lucide-react';
import { SAREES_DATA } from '../data/sarees';
import { SHOPS_DATA } from '../data/shops';
import { WEAVERS_DATA } from '../data/weavers';
import { useShop } from '../context/ShopContext';
import SareeCard from '../components/SareeCard';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { 
    addToCart, 
    isWishlisted, 
    toggleWishlist, 
    addToCompare, 
    removeFromCompare, 
    isInCompare,
    setTryOnSaree 
  } = useShop();

  const saree = SAREES_DATA.find((s) => s.id === id) || SAREES_DATA[0];
  const shop = SHOPS_DATA.find((sh) => sh.id === saree.shopId) || SHOPS_DATA[0];
  const weaver = WEAVERS_DATA.find((w) => w.id === saree.weaverId) || WEAVERS_DATA[0];

  const [activeImage, setActiveImage] = useState(saree.images[0]);
  const [selectedColor, setSelectedColor] = useState(saree.colors[0] || 'Original');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'weaveStory' | 'vendor'

  const wish = isWishlisted(saree.id);
  const inCompare = isInCompare(saree.id);

  // Similar Sarees (same category or hub, excluding current)
  const similarSarees = SAREES_DATA
    .filter((s) => s.id !== saree.id && (s.category === saree.category || s.originHub === saree.originHub))
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(saree, quantity, selectedColor);
  };

  const handleBuyNow = () => {
    addToCart(saree, quantity, selectedColor);
    navigate('/checkout');
  };

  const handleVirtualTryOn = () => {
    setTryOnSaree(saree);
    navigate('/ai-try-on');
  };

  const handleCompare = () => {
    if (inCompare) {
      removeFromCompare(saree.id);
    } else {
      addToCompare(saree);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Breadcrumb */}
      <nav className="text-xs text-stone-500 flex items-center gap-1.5 flex-wrap">
        <Link to="/" className="hover:text-stone-800">Home</Link>
        <span>/</span>
        <Link to="/collections" className="hover:text-stone-800">Collections</Link>
        <span>/</span>
        <Link to={`/collections?hub=${saree.originHub}`} className="hover:text-stone-800">{saree.originHub}</Link>
        <span>/</span>
        <span className="text-stone-800 font-medium truncate max-w-xs">{saree.title}</span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Gallery & Certifications (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 aspect-[4/5] shadow-sm">
            <img
              src={activeImage}
              alt={saree.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Loom Tag Pill */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5">
              <span className="bg-emerald-900/90 backdrop-blur-md text-emerald-100 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                {saree.loomType === 'handloom' ? '100% Handloom' : 'Powerloom Jacquard'}
              </span>
              <span className="bg-heritage-maroon/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {saree.originHub} GI Hub
              </span>
            </div>

            {/* Quick Virtual Try-On Badge */}
            <button
              onClick={handleVirtualTryOn}
              className="absolute bottom-4 right-4 bg-purple-700/90 hover:bg-purple-800 backdrop-blur-md text-white font-semibold text-xs py-2 px-3.5 rounded-xl shadow-lg flex items-center gap-2 transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-purple-200" />
              <span>AI Try-On Drape</span>
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {saree.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`relative w-20 h-24 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                  activeImage === img ? 'border-heritage-maroon shadow-md' : 'border-stone-200 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Certification Strip */}
          <div className="bg-amber-50/60 rounded-2xl p-4 border border-amber-200/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-heritage-maroon flex-shrink-0" />
              <div>
                <p className="font-bold text-stone-800">{saree.certification}</p>
                <p className="text-[11px] text-stone-500">Government tested pure silk warp & authenticated GI tag</p>
              </div>
            </div>
            <Link to="/policies/authenticity" className="text-heritage-maroon font-semibold underline text-[11px]">
              Verify Mark
            </Link>
          </div>
        </div>

        {/* Right: Saree Details & Actions (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
              <span className="font-bold text-heritage-maroon uppercase tracking-wider">
                {saree.originHub} • {saree.fabric}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }}
                  className="p-1.5 rounded-full hover:bg-stone-100 text-stone-600"
                  title="Share Saree"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => toggleWishlist(saree.id)}
                  className={`p-1.5 rounded-full hover:bg-stone-100 transition-colors ${wish ? 'text-rose-600' : 'text-stone-600'}`}
                  title={wish ? "In Wishlist" : "Add to Wishlist"}
                >
                  <Heart className={`w-4 h-4 ${wish ? 'fill-rose-600' : ''}`} />
                </button>
              </div>
            </div>

            <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 leading-snug">
              {saree.title}
            </h1>
            <p className="font-tamil text-sm text-stone-600 mt-1">
              {saree.tamilTitle}
            </p>

            {/* Ratings and Reviews */}
            <div className="flex items-center gap-2 mt-3 text-xs">
              <div className="flex items-center gap-1 bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{saree.rating}</span>
              </div>
              <span className="text-stone-500">•</span>
              <span className="text-stone-600 font-medium">{saree.reviewsCount} customer reviews</span>
              <span className="text-stone-500">•</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Genuine Artisan Drape
              </span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="flex items-baseline gap-3">
              <span className="font-serif font-bold text-3xl text-stone-900">
                ₹{saree.price.toLocaleString('en-IN')}
              </span>
              {saree.originalPrice > saree.price && (
                <>
                  <span className="text-sm text-stone-400 line-through">
                    ₹{saree.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Save {saree.discount}%
                  </span>
                </>
              )}
            </div>
            <p className="text-[11px] text-stone-500 mt-1">
              Inclusive of all GST. Direct artisan price (No intermediary markups).
            </p>
          </div>

          {/* Color Selection */}
          {saree.colors && saree.colors.length > 0 && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Primary Palette / Combinations
              </label>
              <div className="flex flex-wrap gap-2">
                {saree.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                      selectedColor === color
                        ? 'border-heritage-maroon bg-heritage-maroon text-white shadow-sm'
                        : 'border-stone-200 hover:border-stone-400 bg-white text-stone-700'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stock / Loom info */}
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-stone-700 font-medium">
              Only {saree.stockCount} pieces available from current handloom cycle.
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full bg-heritage-maroon hover:bg-heritage-maroonDark text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-md transition-all"
              >
                Buy Now (Direct Dispatch)
              </button>
            </div>

            {/* AI Try-on & Compare secondary bar */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleVirtualTryOn}
                className="w-full bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-300 font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>AI Saree Try-On</span>
              </button>

              <button
                onClick={handleCompare}
                className={`w-full border font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors ${
                  inCompare
                    ? 'border-heritage-gold bg-amber-50 text-heritage-maroon'
                    : 'border-stone-300 hover:border-stone-400 text-stone-700 bg-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{inCompare ? 'In Compare (Remove)' : 'Compare with Others'}</span>
              </button>
            </div>
          </div>

          {/* Delivery & Artisan Dispatch Guarantee */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs border-t border-stone-200">
            <div className="flex items-center gap-2 text-stone-600">
              <Truck className="w-4 h-4 text-heritage-maroon" />
              <span>Ships in 24-48 Hours</span>
            </div>
            <div className="flex items-center gap-2 text-stone-600">
              <RotateCcw className="w-4 h-4 text-heritage-maroon" />
              <span>7-Day Easy Return</span>
            </div>
            <div className="flex items-center gap-2 text-stone-600">
              <ShieldCheck className="w-4 h-4 text-heritage-maroon" />
              <span>Silk Mark Verified</span>
            </div>
          </div>

        </div>

      </div>

      {/* Tabs Section: Specifications, Weaver Story & Local Shop */}
      <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
        <div className="flex border-b border-stone-200 bg-stone-50/70 text-xs sm:text-sm font-semibold text-stone-600">
          <button
            onClick={() => setActiveTab('specs')}
            className={`px-6 py-4 border-b-2 transition-all ${
              activeTab === 'specs' ? 'border-heritage-maroon text-heritage-maroon bg-white' : 'border-transparent hover:text-stone-900'
            }`}
          >
            Saree Specifications
          </button>
          <button
            onClick={() => setActiveTab('weaveStory')}
            className={`px-6 py-4 border-b-2 transition-all ${
              activeTab === 'weaveStory' ? 'border-heritage-maroon text-heritage-maroon bg-white' : 'border-transparent hover:text-stone-900'
            }`}
          >
            Weaving Heritage & Motifs
          </button>
          <button
            onClick={() => setActiveTab('vendor')}
            className={`px-6 py-4 border-b-2 transition-all ${
              activeTab === 'vendor' ? 'border-heritage-maroon text-heritage-maroon bg-white' : 'border-transparent hover:text-stone-900'
            }`}
          >
            Local Shop & Weaver Profile
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500">Fabric Composition:</span>
                  <span className="font-semibold text-stone-800">{saree.fabric}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500">Loom Type:</span>
                  <span className="font-semibold text-stone-800">{saree.loomType === 'handloom' ? 'Traditional Pit Loom' : 'Powerloom Jacquard'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500">Zari Specification:</span>
                  <span className="font-semibold text-stone-800">{saree.zariType}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500">Warp & Weft Count:</span>
                  <span className="font-semibold text-stone-800">{saree.warpWeft}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500">Border Technique:</span>
                  <span className="font-semibold text-stone-800">{saree.borderType}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500">Total Length:</span>
                  <span className="font-semibold text-stone-800">{saree.sareeLength}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500">Blouse Piece:</span>
                  <span className="font-semibold text-stone-800">{saree.blousePiece}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500">Approx. Weight:</span>
                  <span className="font-semibold text-stone-800">{saree.weight}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'weaveStory' && (
            <div className="space-y-4 max-w-3xl">
              <h3 className="font-serif font-bold text-lg text-stone-900">
                The Heritage Behind This Weave
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {saree.description}
              </p>
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                <h4 className="text-xs font-bold text-heritage-maroon uppercase tracking-wider mb-1">
                  Artisan Method & Motif Significance
                </h4>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {saree.weaveStory}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'vendor' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Weaver Card */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <span className="text-[10px] font-bold text-heritage-goldDark uppercase tracking-wider">
                  Handcrafted By
                </span>
                <div className="flex items-center gap-3">
                  <img src={weaver.photo} alt={weaver.name} className="w-12 h-12 rounded-full object-cover border border-stone-300" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-stone-900">{weaver.name}</h4>
                    <p className="text-xs text-stone-500">{weaver.origin}</p>
                  </div>
                </div>
                <p className="text-xs text-stone-600 italic">"{weaver.craftMotto}"</p>
                <Link
                  to={`/weavers/${weaver.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-heritage-maroon hover:underline pt-1"
                >
                  <span>Explore Artisan Portfolio</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Shop / Society Card */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <span className="text-[10px] font-bold text-heritage-teal uppercase tracking-wider">
                  Dispatched By Local Society
                </span>
                <div>
                  <h4 className="font-serif font-bold text-sm text-stone-900">{shop.name}</h4>
                  <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-heritage-maroon" /> {shop.address}
                  </p>
                </div>
                <div className="text-xs text-stone-600 flex flex-wrap gap-4 pt-1">
                  <span><strong>Timings:</strong> {shop.timings}</span>
                  <span><strong>Contact:</strong> {shop.phone}</span>
                </div>
                <Link
                  to={`/shops/${shop.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-heritage-teal hover:underline pt-1"
                >
                  <span>View Society Catalogue & Gallery</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <h3 className="font-serif font-bold text-xl text-stone-900">Customer Reviews & Ratings</h3>
            <p className="text-xs text-stone-500">Real customer feedback from saree buyers across India & abroad</p>
          </div>
          <button
            onClick={() => alert("Review submission form opened for verified purchase.")}
            className="bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold px-4 py-2 rounded-xl transition-colors self-start sm:self-auto"
          >
            Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 flex flex-col justify-center items-center text-center">
            <span className="font-serif font-bold text-4xl text-stone-900">{saree.rating}</span>
            <div className="flex items-center gap-1 my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <p className="text-xs text-stone-500">Based on {saree.reviewsCount} verified reviews</p>
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-800">Devaki Ramasamy (Madurai)</span>
                <span className="text-[10px] text-stone-400">Verified Buyer • 2 weeks ago</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                "The zari shine and mulberry silk weight are breathtaking. The pit-loom korvai border is truly authentic. My daughter wore it for her engagement in Chennai, and everyone asked where we got it!"
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-800">Kavitha Narayanan (Coimbatore)</span>
                <span className="text-[10px] text-stone-400">Verified Buyer • 1 month ago</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                "Delivered straight from Kanchipuram with Silk Mark tag and certification QR code. Fast shipping and the box packaging was royal. Proud of our Tamil weavers!"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Sarees Grid */}
      {similarSarees.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-xl text-stone-900">
              Similar Handlooms & Alternatives
            </h3>
            <Link to="/collections" className="text-xs font-semibold text-heritage-maroon hover:underline">
              View All Sarees
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarSarees.map((s) => (
              <SareeCard key={s.id} saree={s} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

