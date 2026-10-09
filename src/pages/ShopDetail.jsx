import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Store, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  Star, 
  Compass, 
  Share2,
  Calendar,
  Layers
} from 'lucide-react';
import { SHOPS_DATA } from '../data/shops';
import { SAREES_DATA } from '../data/sarees';
import SareeCard from '../components/SareeCard';

export default function ShopDetail() {
  const { slug } = useParams();
  const shop = SHOPS_DATA.find((s) => s.id === slug) || SHOPS_DATA[0];

  // Sarees belonging to this shop
  const shopSarees = SAREES_DATA.filter((s) => s.shopId === shop.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Breadcrumbs */}
      <nav className="text-xs text-stone-500 flex items-center gap-1.5">
        <Link to="/" className="hover:text-stone-800">Home</Link>
        <span>/</span>
        <Link to="/discover-shops" className="hover:text-stone-800">Local Shops</Link>
        <span>/</span>
        <span className="text-stone-800 font-medium">{shop.name}</span>
      </nav>

      {/* Shop Hero Card */}
      <div className="relative rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-sm">
        {/* Cover Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-900">
          <img
            src={shop.bannerImage}
            alt={shop.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-heritage-gold" />
              <span>{shop.city}, Tamil Nadu</span>
            </span>
            {shop.verified && (
              <span className="bg-emerald-700/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                <CheckCircle2 className="w-3.5 h-3.5" /> Certified Weaver Society
              </span>
            )}
          </div>
        </div>

        {/* Content Bar over banner */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900">
                  {shop.name}
                </h1>
              </div>
              <p className="font-tamil text-sm text-stone-500 mt-1">{shop.tamilName}</p>
              <p className="text-xs text-stone-600 mt-2 flex items-center gap-1.5 max-w-2xl">
                <MapPin className="w-4 h-4 text-heritage-maroon flex-shrink-0" />
                <span>{shop.address}</span>
              </p>
            </div>

            {/* Quick Contact CTAs */}
            <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
              <a
                href={`https://wa.me/${shop.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Shop</span>
              </a>
              <a
                href={`tel:${shop.phone.replace(/[^0-9]/g, '')}`}
                className="bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Shop</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics & Hours */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
              <span className="text-stone-400 block mb-0.5">Established</span>
              <span className="font-bold text-stone-800">{shop.establishedYear} ({new Date().getFullYear() - shop.establishedYear} yrs)</span>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
              <span className="text-stone-400 block mb-0.5">Customer Rating</span>
              <span className="font-bold text-amber-600 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                {shop.rating} ({shop.reviewsCount} reviews)
              </span>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
              <span className="text-stone-400 block mb-0.5">Visiting Hours</span>
              <span className="font-bold text-stone-800 truncate block">{shop.timings}</span>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
              <span className="text-stone-400 block mb-0.5">Direct Shipping</span>
              <span className="font-bold text-emerald-700">Available Pan-India</span>
            </div>
          </div>

          {/* About description */}
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-sm text-stone-900">About the Society / Boutique</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-4xl">
              {shop.description}
            </p>
          </div>

          {/* Specialities Chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {shop.specialities.map((spec) => (
              <span
                key={spec}
                className="px-3 py-1 rounded-full bg-amber-50 text-heritage-maroon border border-amber-200 text-xs font-medium"
              >
                {spec}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Shop Gallery Section */}
      {shop.gallery && shop.gallery.length > 0 && (
        <div className="space-y-4">
          <h2 className="font-serif font-bold text-xl text-stone-900">
            Loom & Showroom Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shop.gallery.map((photo, index) => (
              <div key={index} className="aspect-square rounded-2xl overflow-hidden border border-stone-200 bg-stone-100">
                <img src={photo} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Saree Catalogue of this Shop */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <h2 className="font-serif font-bold text-xl text-stone-900">
              Sarees From {shop.name}
            </h2>
            <p className="text-xs text-stone-500">
              Direct handloom inventory inspected and packed by this society
            </p>
          </div>
          <span className="text-xs font-semibold text-stone-600 bg-stone-100 px-3 py-1 rounded-full">
            {shopSarees.length} Products
          </span>
        </div>

        {shopSarees.length === 0 ? (
          <p className="text-xs text-stone-500">No products currently listed for this shop.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shopSarees.map((saree) => (
              <SareeCard key={saree.id} saree={saree} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

