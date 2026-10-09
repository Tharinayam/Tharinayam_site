import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Truck, RotateCcw, Lock, FileText, CheckCircle2 } from 'lucide-react';

export default function PoliciesPage() {
  const { slug } = useParams();
  const currentSlug = slug || 'shipping';

  const POLICIES = {
    shipping: {
      title: "Direct Weaver Shipping Policy",
      icon: Truck,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
          <p>
            At THARINAYAM, we follow a unique direct-from-artisan dispatch model. Instead of storing sarees in central commercial warehouses where delicate silks might endure months of shelf pressure, every saree is dispatched directly from the respective Weaving Society or boutique in Kanchipuram, Madurai, Salem, Arani, or Karaikudi.
          </p>
          <h4 className="font-bold text-stone-900 text-sm">Dispatch Timelines</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>In-Stock Handlooms:</strong> Dispatched within 24 to 48 hours of order confirmation.</li>
            <li><strong>Live Loom / Custom Orders:</strong> If a saree is currently on the pit loom, estimated weaving completion and dispatch will be clearly communicated by the weaver society.</li>
            <li><strong>Delivery Partner:</strong> We partner with trusted courier networks (BlueDart, DTDC, India Post Speed Post) with tamper-evident insured packing.</li>
          </ul>
          <h4 className="font-bold text-stone-900 text-sm">Shipping Charges</h4>
          <p>
            Standard shipping is 100% <strong>FREE</strong> for all orders above ₹5,000 across India. For orders below ₹5,000, a flat nominal delivery fee of ₹150 applies.
          </p>
        </div>
      )
    },
    returns: {
      title: "Returns, Refunds & Exchange Policy",
      icon: RotateCcw,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
          <p>
            We take immense pride in the craftsmanship of our weavers. If for any reason your handloom drape does not meet your expectations, we offer a transparent 7-day return and exchange window.
          </p>
          <h4 className="font-bold text-stone-900 text-sm">Return Eligibility</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>The saree must be unworn, unwashed, and unpleated.</li>
            <li>The blouse piece must remain unstitched and attached to the saree.</li>
            <li>Original Silk Mark / Handloom Mark tag and barcode must be intact.</li>
          </ul>
          <h4 className="font-bold text-stone-900 text-sm">Refund Process</h4>
          <p>
            Once received and inspected by our artisan verification unit, refunds are processed to your original payment method (UPI / Bank Account) within 3-5 business days.
          </p>
        </div>
      )
    },
    authenticity: {
      title: "Authenticity & Silk Mark Guidelines",
      icon: ShieldCheck,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
          <p>
            Tamil Nadu's handloom reputation is built on centuries of trust. We stand firmly against fake polyester blends being passed off as pure mulberry silk.
          </p>
          <h4 className="font-bold text-stone-900 text-sm">Silk Mark Certification</h4>
          <p>
            Silk Mark is a certification label issued by the Silk Mark Organisation of India (sponsored by the Central Silk Board, Ministry of Textiles, Govt. of India). It guarantees that the warp and weft fibers used are 100% natural mulberry silk.
          </p>
          <h4 className="font-bold text-stone-900 text-sm">Geographical Indication (GI) Tags</h4>
          <p>
            THARINAYAM directly supports registered GI holders:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Kanchipuram Silk</strong> (GI Certificate #23)</li>
            <li><strong>Madurai Sungudi</strong> (GI Certificate #17)</li>
            <li><strong>Chettinad Kandangi</strong> (GI Certificate #302)</li>
            <li><strong>Arani Silk</strong> (GI Certificate #53)</li>
            <li><strong>Salem Silk</strong> (GI Certificate #87)</li>
            <li><strong>Coimbatore Kora Cotton</strong> (GI Certificate #213)</li>
          </ul>
        </div>
      )
    },
    privacy: {
      title: "Privacy Policy",
      icon: Lock,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
          <p>
            Your privacy is sacred to us. We never sell or share your phone number, delivery address, or payment details with third-party advertisers. Information collected is used solely for order fulfillment, courier delivery OTPs, and customer support.
          </p>
        </div>
      )
    },
    terms: {
      title: "Terms & Conditions",
      icon: FileText,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
          <p>
            By accessing and shopping on THARINAYAM, you agree to our platform terms. Handcrafted items possess organic yarn variations and natural slubs which celebrate artisanal authenticity and should not be construed as factory defects.
          </p>
        </div>
      )
    }
  };

  const active = POLICIES[currentSlug] || POLICIES['shipping'];
  const Icon = active.icon;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Policies & Guidelines</span>
        </nav>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900">
          Policies & Artisan Safeguards
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Tabs */}
        <div className="md:col-span-4 bg-white rounded-3xl p-4 border border-stone-200 shadow-sm space-y-1 text-xs font-semibold">
          {[
            { id: 'shipping', label: 'Direct Weaver Shipping' },
            { id: 'returns', label: 'Returns & Refunds' },
            { id: 'authenticity', label: 'Authenticity & Silk Mark' },
            { id: 'privacy', label: 'Privacy Policy' },
            { id: 'terms', label: 'Terms & Conditions' }
          ].map((item) => (
            <Link
              key={item.id}
              to={`/policies/${item.id}`}
              className={`block p-3 rounded-2xl transition-colors ${
                currentSlug === item.id
                  ? 'bg-heritage-maroon text-white font-bold'
                  : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Content Box */}
        <div className="md:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-heritage-maroon flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
            <h2 className="font-serif font-bold text-xl text-stone-900">{active.title}</h2>
          </div>

          {active.content}
        </div>

      </div>

    </div>
  );
}

