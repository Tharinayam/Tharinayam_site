import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  MapPin, 
  Heart, 
  ShoppingBag, 
  ShieldCheck, 
  Sparkles, 
  Plus, 
  Edit3, 
  Trash2,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { SAREES_DATA } from '../data/sarees';
import SareeCard from '../components/SareeCard';

export default function ProfilePage() {
  const { user, wishlist, orders } = useShop();
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'addresses' | 'wishlist' | 'preferences'

  const wishlistedSarees = SAREES_DATA.filter((s) => wishlist.includes(s.id));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
        <div>
          <nav className="text-xs text-stone-500 mb-1 flex items-center gap-1.5">
            <Link to="/" className="hover:text-stone-800">Home</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">My Account</span>
          </nav>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900">
            Customer Profile & Wardrobe
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sidebar Navigation (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4 pb-4 border-b border-stone-100">
            <div className="w-14 h-14 rounded-2xl bg-heritage-maroon text-heritage-gold flex items-center justify-center font-serif text-2xl font-bold">
              {user.name[0]}
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">{user.name}</h3>
              <p className="text-xs text-stone-500 truncate">{user.email}</p>
              <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold mt-1 inline-block">
                Verified Customer
              </span>
            </div>
          </div>

          <nav className="space-y-1 text-xs sm:text-sm font-medium">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full p-3 rounded-2xl text-left flex items-center justify-between transition-all ${
                activeTab === 'profile' ? 'bg-heritage-maroon text-white font-bold' : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <User className="w-4 h-4" /> Personal Details
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('addresses')}
              className={`w-full p-3 rounded-2xl text-left flex items-center justify-between transition-all ${
                activeTab === 'addresses' ? 'bg-heritage-maroon text-white font-bold' : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4" /> Saved Addresses ({user.addresses.length})
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('wishlist')}
              className={`w-full p-3 rounded-2xl text-left flex items-center justify-between transition-all ${
                activeTab === 'wishlist' ? 'bg-heritage-maroon text-white font-bold' : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Heart className="w-4 h-4" /> My Wishlist ({wishlist.length})
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('preferences')}
              className={`w-full p-3 rounded-2xl text-left flex items-center justify-between transition-all ${
                activeTab === 'preferences' ? 'bg-heritage-maroon text-white font-bold' : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-purple-400" /> Saree & Styling Preferences
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <Link
              to="/orders"
              className="w-full p-3 rounded-2xl text-left flex items-center justify-between text-stone-700 hover:bg-stone-50 transition-all block"
            >
              <span className="flex items-center gap-2.5">
                <ShoppingBag className="w-4 h-4" /> My Orders ({orders.length})
              </span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>

        {/* Right Content Area (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          
          {/* Tab 1: Profile Details */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-lg text-stone-900 pb-3 border-b border-stone-100">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="space-y-1">
                  <span className="text-stone-500">Full Name</span>
                  <p className="font-semibold text-stone-800">{user.name}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-stone-500">Email Address</span>
                  <p className="font-semibold text-stone-800">{user.email}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-stone-500">Mobile Number</span>
                  <p className="font-semibold text-stone-800">{user.phone}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-stone-500">Preferred Language</span>
                  <p className="font-semibold text-stone-800">English / தமிழ் (Tamil)</p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Addresses */}
          {activeTab === 'addresses' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <h3 className="font-serif font-bold text-lg text-stone-900">Saved Addresses</h3>
                <button
                  onClick={() => alert("Add new address modal")}
                  className="text-xs font-semibold text-heritage-maroon hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add New Address
                </button>
              </div>

              <div className="space-y-3">
                {user.addresses.map((addr) => (
                  <div key={addr.id} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-stone-900">{addr.name}</span>
                      {addr.isDefault && (
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full">
                          Default Delivery Address
                        </span>
                      )}
                    </div>
                    <p className="text-stone-600">{addr.addressLine}</p>
                    <p className="text-stone-600">{addr.city}, {addr.state} - {addr.pincode}</p>
                    <p className="text-stone-500 text-xs">Phone: {addr.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Wishlist */}
          {activeTab === 'wishlist' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  Wishlist ({wishlistedSarees.length})
                </h3>
              </div>

              {wishlistedSarees.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <Heart className="w-10 h-10 text-stone-300 mx-auto" />
                  <p className="text-xs sm:text-sm text-stone-500">Your wishlist is currently empty.</p>
                  <Link to="/collections" className="text-xs font-bold text-heritage-maroon underline">
                    Browse Handloom Sarees
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {wishlistedSarees.map((saree) => (
                    <SareeCard key={saree.id} saree={saree} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 4: Preferences */}
          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-lg text-stone-900 pb-3 border-b border-stone-100">
                Styling & Fabric Preferences
              </h3>
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-1">
                  <span className="font-bold text-stone-800">Favorite Weaves:</span>
                  <p className="text-stone-600">Pure Kanchipuram Silk Korvai, Madurai Sungudi Cotton</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-1">
                  <span className="font-bold text-stone-800">Color Palette:</span>
                  <p className="text-stone-600">Crimson Red, Mustard Ochre, Peacock Blue, Temple Green</p>
                </div>
                <Link
                  to="/style-quiz"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-heritage-maroon hover:underline pt-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Update preferences with AI Style Quiz</span>
                </Link>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

