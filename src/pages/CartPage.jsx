import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  Tag, 
  ShieldCheck, 
  Truck, 
  Heart,
  Store
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function CartPage() {
  const { 
    cart, 
    cartCount, 
    cartSubtotal, 
    cartDiscount, 
    shippingFee, 
    cartTotal, 
    couponCode, 
    discountPercent, 
    couponError, 
    applyCoupon, 
    removeCoupon, 
    updateQuantity, 
    removeFromCart,
    toggleWishlist 
  } = useShop();

  const [inputCoupon, setInputCoupon] = useState('');
  const navigate = useNavigate();

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (inputCoupon.trim()) {
      applyCoupon(inputCoupon);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-amber-50 text-heritage-maroon mx-auto flex items-center justify-center">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900">Your Shopping Bag is Empty</h2>
        <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
          Explore our certified handloom sarees from Kanchipuram, Madurai, Chettinad, and Arani. Support generational master weavers directly.
        </p>
        <Link
          to="/collections"
          className="inline-flex items-center gap-2 bg-heritage-maroon hover:bg-heritage-maroonDark text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
        >
          <span>Explore Saree Collections</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Shopping Bag</span>
        </nav>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900">
          Shopping Bag ({cartCount} {cartCount === 1 ? 'Saree' : 'Sarees'})
        </h1>
      </div>

      {/* Cart Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Cart Items List (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {cart.map(({ saree, quantity, selectedColor }) => (
            <div
              key={saree.id}
              className="bg-white rounded-3xl p-4 sm:p-6 border border-stone-200 shadow-sm flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={saree.images[0]}
                  alt={saree.title}
                  className="w-20 h-28 object-cover rounded-2xl border border-stone-200 flex-shrink-0"
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-heritage-maroon uppercase tracking-wider">
                    {saree.originHub} • {saree.fabric}
                  </span>
                  <Link to={`/products/${saree.id}`} className="font-serif font-bold text-sm text-stone-900 hover:text-heritage-maroon block line-clamp-1">
                    {saree.title}
                  </Link>
                  <p className="text-xs text-stone-500">
                    Palette: <span className="font-medium text-stone-700">{selectedColor}</span>
                  </p>
                  <p className="text-xs text-stone-500">
                    Dispatched from: <span className="font-medium text-stone-700">{saree.shopName}</span>
                  </p>
                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-base font-bold text-stone-900">
                      ₹{saree.price.toLocaleString('en-IN')}
                    </span>
                    {saree.originalPrice > saree.price && (
                      <span className="text-xs text-stone-400 line-through">
                        ₹{saree.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Quantity Controls & Remove */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                <div className="flex items-center rounded-xl border border-stone-200 bg-stone-50 p-1">
                  <button
                    onClick={() => updateQuantity(saree.id, quantity - 1)}
                    className="p-1.5 rounded-lg hover:bg-white text-stone-700 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-stone-800">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(saree.id, quantity + 1)}
                    className="p-1.5 rounded-lg hover:bg-white text-stone-700 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleWishlist(saree.id)}
                    className="p-1.5 text-stone-400 hover:text-rose-600 transition-colors"
                    title="Move to Wishlist"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => removeFromCart(saree.id)}
                    className="p-1.5 text-stone-400 hover:text-stone-700 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Artisan Dispatch Guarantee Notice */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-center gap-3 text-xs text-amber-950">
            <Store className="w-5 h-5 text-heritage-maroon flex-shrink-0" />
            <p>
              <strong>Direct Artisan Fulfillment:</strong> Your sarees are packed directly at weavers' cooperative societies in Kanchipuram, Madurai, and Karaikudi to guarantee Silk Mark authenticity and fair weaver wages.
            </p>
          </div>
        </div>

        {/* Right: Order Summary & Coupon (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-6">
            <h3 className="font-serif font-bold text-base text-stone-900 pb-3 border-b border-stone-100">
              Order Summary
            </h3>

            {/* Coupon Box */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Have a Promo Code?
              </label>
              {couponCode ? (
                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                    <Tag className="w-4 h-4" />
                    <span>{couponCode} ({discountPercent}% OFF APPLIED)</span>
                  </div>
                  <button onClick={removeCoupon} className="text-rose-600 font-semibold underline text-[11px]">
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Try 'WEAVER10'"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value)}
                    className="flex-1 bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs uppercase focus:outline-none focus:border-heritage-gold"
                  />
                  <button
                    type="submit"
                    className="bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs px-4 py-2 rounded-xl transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}
              {couponError && <p className="text-[11px] text-rose-600">{couponError}</p>}
            </div>

            {/* Price Calculations */}
            <div className="space-y-3 text-xs sm:text-sm text-stone-600 border-t border-stone-100 pt-4">
              <div className="flex justify-between">
                <span>Subtotal ({cartCount} items):</span>
                <span className="font-semibold text-stone-900">₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>

              {cartDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Weaver Heritage Discount:</span>
                  <span>- ₹{cartDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Estimated Shipping:</span>
                <span>
                  {shippingFee === 0 ? (
                    <strong className="text-emerald-700">FREE</strong>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>

              <div className="flex justify-between pt-3 border-t border-stone-200 text-base font-bold text-stone-900">
                <span>Total Amount:</span>
                <span className="font-serif text-lg text-heritage-maroon">
                  ₹{cartTotal.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-[10px] text-stone-400">All prices include applicable GST</p>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-heritage-maroon hover:bg-heritage-maroonDark text-white font-bold py-3.5 px-6 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Trust Markers */}
            <div className="space-y-2 text-[11px] text-stone-500 pt-2 border-t border-stone-100">
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-heritage-maroon" />
                <span>100% Secure Checkout via UPI, Cards & NetBanking</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-heritage-maroon" />
                <span>Direct artisan dispatch with real-time SMS tracking</span>
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

