import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  CreditCard, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  Plus
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function CheckoutPage() {
  const { cart, cartTotal, cartSubtotal, cartDiscount, shippingFee, user, placeOrder } = useShop();
  const navigate = useNavigate();

  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [upiId, setUpiId] = useState('user@okaxis');
  const [isPlacing, setIsPlacing] = useState(false);

  // Address form fields
  const [newAddress, setNewAddress] = useState({
    name: user.name,
    addressLine: user.addresses[0]?.addressLine || '',
    city: user.addresses[0]?.city || 'Chennai',
    state: 'Tamil Nadu',
    pincode: user.addresses[0]?.pincode || '600020',
    phone: user.phone
  });

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsPlacing(true);

    setTimeout(() => {
      const order = placeOrder({
        address: newAddress,
        paymentMethod
      });
      setIsPlacing(false);
      navigate(`/orders/${order.id}?new=true`);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <Link to="/cart" className="hover:text-stone-800">Bag</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Checkout</span>
        </nav>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900">
          Secure Artisan Checkout
        </h1>
      </div>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Address and Payment (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Step 1: Delivery Address */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <h3 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-heritage-maroon" />
                <span>1. Delivery Address</span>
              </h3>
              <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Tamper-Proof Packaging
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={newAddress.name}
                  onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-xs focus:outline-none focus:border-heritage-gold"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">Mobile Number (For Courier OTP)</label>
                <input
                  type="tel"
                  required
                  value={newAddress.phone}
                  onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-xs focus:outline-none focus:border-heritage-gold"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-stone-700 block mb-1">Street Address / House No / Apartment</label>
                <input
                  type="text"
                  required
                  value={newAddress.addressLine}
                  onChange={(e) => setNewAddress({ ...newAddress, addressLine: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-xs focus:outline-none focus:border-heritage-gold"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">City / Town</label>
                <input
                  type="text"
                  required
                  value={newAddress.city}
                  onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-xs focus:outline-none focus:border-heritage-gold"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">Pincode</label>
                <input
                  type="text"
                  required
                  value={newAddress.pincode}
                  onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-xs focus:outline-none focus:border-heritage-gold"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Delivery Option */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-3">
            <h3 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
              <Truck className="w-5 h-5 text-heritage-maroon" />
              <span>2. Delivery Speed & Artisan Inspection</span>
            </h3>

            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs flex items-center justify-between">
              <div>
                <p className="font-bold text-stone-900">Direct Loom Hub Express (3-5 Business Days)</p>
                <p className="text-stone-500 mt-0.5">Inspected directly by Master Weavers Society prior to dispatch</p>
              </div>
              <span className="font-bold text-emerald-800">FREE</span>
            </div>
          </div>

          {/* Step 3: Payment Method */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <h3 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-heritage-maroon" />
                <span>3. Payment Selection</span>
              </h3>
              <span className="text-[11px] text-stone-500">256-Bit Encrypted</span>
            </div>

            <div className="space-y-3">
              {[
                { id: 'UPI', title: 'Instant UPI (Google Pay, PhonePe, Paytm, BHIM)', desc: 'Zero transaction charges. Recommended for instant confirmation.' },
                { id: 'CARD', title: 'Credit / Debit Cards (RuPay, Visa, Mastercard)', desc: 'Secure card authorization via payment gateway.' },
                { id: 'NETBANKING', title: 'Net Banking (SBI, HDFC, ICICI, Indian Bank, Canara Bank)', desc: 'Supported across all major Indian retail banks.' },
                { id: 'COD', title: 'Cash on Delivery (Pay at Doorstep)', desc: 'Available for orders up to ₹15,000 across India.' }
              ].map((m) => (
                <label
                  key={m.id}
                  onClick={() => setPaymentMethod(m.id)}
                  className={`p-4 rounded-2xl border flex items-start gap-3 cursor-pointer transition-all ${
                    paymentMethod === m.id
                      ? 'border-heritage-maroon bg-amber-50/40 shadow-sm'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === m.id}
                    onChange={() => setPaymentMethod(m.id)}
                    className="accent-heritage-maroon mt-1"
                  />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-stone-800">{m.title}</p>
                    <p className="text-[11px] text-stone-500 mt-0.5">{m.desc}</p>
                  </div>
                </label>
              ))}
            </div>

            {paymentMethod === 'UPI' && (
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                <label className="font-semibold text-stone-700 block">Enter your UPI ID / VPA</label>
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="e.g. mobile@okaxis or name@upi"
                  className="w-full bg-white border border-stone-300 rounded-lg p-2 focus:outline-none focus:border-heritage-gold"
                />
              </div>
            )}
          </div>

        </div>

        {/* Right: Order Summary Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
            <h3 className="font-serif font-bold text-base text-stone-900 pb-3 border-b border-stone-100">
              Items in Order ({cart.length})
            </h3>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {cart.map(({ saree, quantity, selectedColor }) => (
                <div key={saree.id} className="flex gap-3 items-center text-xs">
                  <img src={saree.images[0]} alt={saree.title} className="w-12 h-14 object-cover rounded-lg border" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-stone-800 truncate">{saree.title}</p>
                    <p className="text-stone-500">Qty: {quantity} • {selectedColor}</p>
                    <p className="font-bold text-heritage-maroon">₹{(saree.price * quantity).toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-xs border-t border-stone-100 pt-3 text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
              {cartDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Discount:</span>
                  <span>- ₹{cartDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="text-emerald-700 font-bold">FREE</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-200 text-sm font-bold text-stone-900">
                <span>Payable Amount:</span>
                <span className="text-heritage-maroon font-serif text-base">₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPlacing}
              className="w-full bg-heritage-maroon hover:bg-heritage-maroonDark text-white font-bold py-3.5 px-6 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>{isPlacing ? 'Securing Order on Loom...' : `Pay ₹${cartTotal.toLocaleString('en-IN')} & Confirm`}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </form>

    </div>
  );
}

