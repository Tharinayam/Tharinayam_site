import React from 'react';
import { Link, useSearchParams, useParams } from 'react-router-dom';
import { 
  CheckCircle2, 
  Package, 
  Truck, 
  Clock, 
  MapPin, 
  Download, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  Store,
  ChevronRight
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function OrdersPage() {
  const { orders } = useShop();
  const [searchParams] = useSearchParams();
  const { orderId } = useParams();

  const isNewOrder = searchParams.get('new') === 'true';

  // If specific orderId requested
  const activeOrder = orderId 
    ? orders.find((o) => o.id === orderId) || orders[0] 
    : orders[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Celebratory Banner if just placed */}
      {isNewOrder && (
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white p-6 sm:p-8 border border-emerald-700 shadow-xl space-y-3 animate-fadeIn">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Nandri • Order Confirmed
              </span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl">
                Your Handloom Heirloom is Being Prepared!
              </h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-2xl">
            Order #{activeOrder.id} has been registered with {activeOrder.vendorName}. The master artisan has received your order instructions and will personally inspect the zari and warp before dispatch.
          </p>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
        <div>
          <nav className="text-xs text-stone-500 mb-1 flex items-center gap-1.5">
            <Link to="/" className="hover:text-stone-800">Home</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">My Orders</span>
          </nav>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900">
            Order History & Loom Tracking
          </h1>
        </div>
        <Link
          to="/collections"
          className="text-xs font-semibold text-heritage-maroon hover:underline flex items-center gap-1"
        >
          <span>Continue Shopping</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Orders List */}
      <div className="space-y-8">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm space-y-6 p-6 sm:p-8"
          >
            {/* Order Top Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100 text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-stone-900 text-sm">Order #{order.id}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-semibold text-[11px]">
                    {order.status}
                  </span>
                </div>
                <p className="text-stone-500">
                  Placed on {order.date} • Paid via {order.paymentMethod}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-stone-500 block text-[11px]">Total Paid</span>
                <span className="font-serif font-bold text-base text-heritage-maroon">
                  ₹{order.totalAmount.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Tracking Timeline Stepper */}
            <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-stone-800 flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-heritage-maroon" />
                  <span>Artisan Shipment Tracking: {order.trackingNumber}</span>
                </span>
                <span className="text-emerald-700 font-semibold">
                  Est. Delivery: {order.estimatedDelivery}
                </span>
              </div>

              {/* Steps bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                {order.timeline.map((step, idx) => (
                  <div key={idx} className="relative space-y-1">
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        step.completed
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-200 text-stone-600'
                      }`}>
                        {step.completed ? '✓' : idx + 1}
                      </div>
                      <span className={`text-xs font-semibold ${step.completed ? 'text-stone-900' : 'text-stone-400'}`}>
                        {step.title}
                      </span>
                    </div>
                    <p className="text-[10px] text-stone-500 pl-7">{step.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ordered Sarees List */}
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-stone-400">
                Ordered Items ({order.items.length})
              </h4>
              <div className="divide-y divide-stone-100">
                {order.items.map((item, i) => (
                  <div key={i} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.saree.images[0]}
                        alt={item.saree.title}
                        className="w-16 h-20 object-cover rounded-xl border border-stone-200 flex-shrink-0"
                      />
                      <div className="space-y-1">
                        <Link to={`/products/${item.saree.id}`} className="font-serif font-bold text-xs sm:text-sm text-stone-900 hover:text-heritage-maroon block">
                          {item.saree.title}
                        </Link>
                        <p className="text-xs text-stone-500">
                          {item.saree.originHub} • {item.saree.fabric} • Qty: {item.quantity}
                        </p>
                        <p className="text-[11px] text-stone-500 flex items-center gap-1">
                          <Store className="w-3 h-3 text-heritage-maroon" />
                          <span>Fulfillment Society: {item.saree.shopName}</span>
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-xs sm:text-sm text-stone-900">
                        ₹{(item.saree.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => alert(`Downloading GST Invoice for Order #${order.id}`)}
                  className="flex items-center gap-1 text-stone-600 hover:text-stone-900 underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Tax Invoice</span>
                </button>
                <span>•</span>
                <Link to="/help" className="text-stone-600 hover:text-stone-900 underline flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Need help with order?</span>
                </Link>
              </div>

              <button
                onClick={() => alert("Return window is valid up to 7 days from delivery date.")}
                className="text-stone-500 hover:text-rose-600 transition-colors"
              >
                Return or Exchange Policy
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

