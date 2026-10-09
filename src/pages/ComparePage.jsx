import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, X, ShoppingBag, Sparkles, Check, ArrowRight, Plus } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { SAREES_DATA } from '../data/sarees';

export default function ComparePage() {
  const { compareList, removeFromCompare, clearCompare, addToCart, addToCompare } = useShop();

  const availableToAdd = SAREES_DATA.filter((s) => !compareList.some((c) => c.id === s.id)).slice(0, 3);

  if (compareList.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-amber-50 text-heritage-maroon mx-auto flex items-center justify-center">
          <Layers className="w-8 h-8" />
        </div>
        <h2 className="font-serif font-bold text-2xl text-stone-900">No Sarees in Comparison</h2>
        <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
          Add up to 4 sarees from our collection to compare fabric, zari quality, pit-loom craft, and artisan origin side-by-side.
        </p>
        <Link
          to="/collections"
          className="inline-flex items-center gap-2 bg-heritage-maroon text-white font-bold text-xs px-6 py-3 rounded-xl hover:bg-heritage-maroonDark transition-all"
        >
          <span>Browse Saree Collections</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
        <div>
          <nav className="text-xs text-stone-500 mb-1 flex items-center gap-1.5">
            <Link to="/" className="hover:text-stone-800">Home</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">Compare Sarees</span>
          </nav>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900">
            Side-by-Side Saree Comparison
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Evaluating {compareList.length} of 4 selected drapes
          </p>
        </div>

        <button
          onClick={clearCompare}
          className="text-xs font-semibold text-rose-600 hover:text-rose-700 underline self-start sm:self-auto"
        >
          Clear All
        </button>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto bg-white rounded-3xl border border-stone-200 shadow-sm">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <tbody>
            
            {/* Row 1: Product Preview & Remove */}
            <tr className="border-b border-stone-200 bg-stone-50/50">
              <td className="p-4 w-44 font-serif font-bold text-xs text-stone-500 uppercase tracking-wider">
                Product
              </td>
              {compareList.map((saree) => (
                <td key={saree.id} className="p-4 min-w-[220px] align-top">
                  <div className="relative group">
                    <button
                      onClick={() => removeFromCompare(saree.id)}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-stone-900/80 text-white hover:bg-rose-600 transition-colors z-10"
                      title="Remove from compare"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    <img
                      src={saree.images[0]}
                      alt={saree.title}
                      className="w-full h-48 object-cover rounded-xl mb-2"
                    />
                    <Link to={`/products/${saree.id}`} className="font-serif font-bold text-xs text-stone-900 hover:text-heritage-maroon line-clamp-2 block">
                      {saree.title}
                    </Link>
                    <p className="text-xs font-bold text-heritage-maroon mt-1">
                      ₹{saree.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                </td>
              ))}
              {compareList.length < 4 && (
                <td className="p-4 min-w-[200px] text-center border-dashed border-l border-stone-200 bg-stone-50/30">
                  <p className="text-xs text-stone-400 mb-2">Slot available</p>
                  <Link
                    to="/collections"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-heritage-maroon hover:underline"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Saree
                  </Link>
                </td>
              )}
            </tr>

            {/* Row 2: Origin Hub */}
            <tr className="border-b border-stone-100">
              <td className="p-4 text-xs font-semibold text-stone-500 bg-stone-50/30">Weaving Hub</td>
              {compareList.map((saree) => (
                <td key={saree.id} className="p-4 text-xs font-bold text-stone-800">
                  {saree.originHub}
                </td>
              ))}
              {compareList.length < 4 && <td></td>}
            </tr>

            {/* Row 3: Loom Type */}
            <tr className="border-b border-stone-100">
              <td className="p-4 text-xs font-semibold text-stone-500 bg-stone-50/30">Loom Craft</td>
              {compareList.map((saree) => (
                <td key={saree.id} className="p-4 text-xs text-stone-800">
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                    saree.loomType === 'handloom' ? 'bg-emerald-50 text-emerald-800' : 'bg-stone-100 text-stone-800'
                  }`}>
                    {saree.loomType === 'handloom' ? '100% Pit Handloom' : 'Powerloom Jacquard'}
                  </span>
                </td>
              ))}
              {compareList.length < 4 && <td></td>}
            </tr>

            {/* Row 4: Fabric */}
            <tr className="border-b border-stone-100">
              <td className="p-4 text-xs font-semibold text-stone-500 bg-stone-50/30">Fabric</td>
              {compareList.map((saree) => (
                <td key={saree.id} className="p-4 text-xs font-semibold text-stone-800">
                  {saree.fabric}
                </td>
              ))}
              {compareList.length < 4 && <td></td>}
            </tr>

            {/* Row 5: Zari Type */}
            <tr className="border-b border-stone-100">
              <td className="p-4 text-xs font-semibold text-stone-500 bg-stone-50/30">Zari Quality</td>
              {compareList.map((saree) => (
                <td key={saree.id} className="p-4 text-xs text-stone-800">
                  {saree.zariType}
                </td>
              ))}
              {compareList.length < 4 && <td></td>}
            </tr>

            {/* Row 6: Warp & Weft */}
            <tr className="border-b border-stone-100">
              <td className="p-4 text-xs font-semibold text-stone-500 bg-stone-50/30">Warp & Weft</td>
              {compareList.map((saree) => (
                <td key={saree.id} className="p-4 text-xs text-stone-700">
                  {saree.warpWeft}
                </td>
              ))}
              {compareList.length < 4 && <td></td>}
            </tr>

            {/* Row 7: Border Technique */}
            <tr className="border-b border-stone-100">
              <td className="p-4 text-xs font-semibold text-stone-500 bg-stone-50/30">Border Technique</td>
              {compareList.map((saree) => (
                <td key={saree.id} className="p-4 text-xs text-stone-700">
                  {saree.borderType}
                </td>
              ))}
              {compareList.length < 4 && <td></td>}
            </tr>

            {/* Row 8: Artisan / Society */}
            <tr className="border-b border-stone-100">
              <td className="p-4 text-xs font-semibold text-stone-500 bg-stone-50/30">Weaver / Society</td>
              {compareList.map((saree) => (
                <td key={saree.id} className="p-4 text-xs text-stone-700">
                  {saree.weaverName || saree.shopName}
                </td>
              ))}
              {compareList.length < 4 && <td></td>}
            </tr>

            {/* Row 9: Certification */}
            <tr className="border-b border-stone-200">
              <td className="p-4 text-xs font-semibold text-stone-500 bg-stone-50/30">Certification</td>
              {compareList.map((saree) => (
                <td key={saree.id} className="p-4 text-xs text-emerald-800 font-semibold">
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    {saree.certification}
                  </span>
                </td>
              ))}
              {compareList.length < 4 && <td></td>}
            </tr>

            {/* Row 10: Action (Add to Cart) */}
            <tr>
              <td className="p-4 text-xs font-semibold text-stone-500 bg-stone-50/30">Action</td>
              {compareList.map((saree) => (
                <td key={saree.id} className="p-4">
                  <button
                    onClick={() => addToCart(saree, 1)}
                    className="w-full bg-heritage-maroon hover:bg-heritage-maroonDark text-white text-xs font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </td>
              ))}
              {compareList.length < 4 && <td></td>}
            </tr>

          </tbody>
        </table>
      </div>

      {/* Suggested to Add to Compare */}
      {availableToAdd.length > 0 && compareList.length < 4 && (
        <div className="pt-4 space-y-3">
          <h3 className="font-serif font-bold text-sm text-stone-800">
            Suggested Sarees to Add to Comparison:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {availableToAdd.map((s) => (
              <div key={s.id} className="flex items-center justify-between p-3 bg-white rounded-xl border border-stone-200">
                <div className="flex items-center gap-3">
                  <img src={s.images[0]} alt={s.title} className="w-12 h-12 object-cover rounded-lg" />
                  <div>
                    <p className="text-xs font-semibold text-stone-800 truncate max-w-[150px]">{s.title}</p>
                    <p className="text-[11px] text-stone-500">₹{s.price.toLocaleString('en-IN')}</p>
                  </div>
                </div>
                <button
                  onClick={() => addToCompare(s)}
                  className="p-1.5 rounded-lg bg-stone-100 hover:bg-heritage-maroon hover:text-white text-stone-700 text-xs font-medium transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

