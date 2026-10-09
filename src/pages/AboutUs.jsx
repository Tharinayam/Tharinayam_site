import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartHandshake, Award, Sparkles, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#4A0E17] via-[#631320] to-[#751525] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-heritage-gold text-center relative">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-heritage-gold">
            Brand Overview & Purpose
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl">
            About THARINAYAM (தறிநயம்)
          </h1>
          <p className="font-tamil text-lg text-amber-100">
            நெசவாளர் கலை, பாரம்பரிய தறி மற்றும் உள்ளூர் அங்காடிகளை ஒன்றிணைக்கும் தளம்
          </p>
          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-2xl mx-auto">
            THARINAYAM is an open informational and discovery platform dedicated to celebrating Tamil Nadu's living handloom heritage, mapping historic weaving societies, and educating textile lovers worldwide.
          </p>
        </div>
      </section>

      {/* Brand Overview & Why THARINAYAM */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider">
              Why THARINAYAM?
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 leading-snug">
              Bridging the Ancient Loom with Modern Discovery
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Tamil Nadu is home to over 300,000 traditional handloom weavers across world-famous clusters like Kanchipuram, Madurai, Salem, Arani, and Karaikudi. Yet, the stories, techniques, and small cooperative societies behind these heirlooms remain largely invisible in the digital age.
            </p>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              THARINAYAM was founded to create an authoritative, unbiased public platform where customers, brides, researchers, and textile enthusiasts can learn the nuances of authentic weaves and discover verified local shops directly.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-stone-200 aspect-[4/3] bg-stone-100 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
              alt="Silk Weaving Heritage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-heritage-maroon flex items-center justify-center font-bold">
              👁️
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900">Our Vision</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              To be the definitive global knowledge and discovery gateway for Tamil Nadu's indigenous saree craftsmanship, ensuring the intergenerational survival of the pit-loom artisan tradition.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-heritage-maroon flex items-center justify-center font-bold">
              🎯
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900">Our Mission</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Empower small boutiques, independent generational weavers, and weaver cooperative societies by giving them digital visibility, while providing visitors with transparent fabric education and Silk Mark verification knowledge.
            </p>
          </div>
        </div>

        {/* Commitment to Textile Heritage */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F0] border-2 border-heritage-gold space-y-4">
          <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider">
            Our Commitment to Textile Heritage
          </span>
          <h3 className="font-serif font-bold text-2xl text-stone-900">
            Promoting Certified GI Tags & Silk Mark Integrity
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            We are dedicated to safeguarding Geographical Indication (GI) tagged crafts including Kanchipuram Pure Silk, Madurai Sungudi, Chettinad Kandangi, Salem Venpattu, and Coimbatore Kora Cotton against synthetic imitation. We advocate for direct artisan recognition and fair remuneration.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs">
            <Link
              to="/heritage"
              className="bg-heritage-maroon hover:bg-heritage-maroonDark text-white font-bold px-5 py-2.5 rounded-xl shadow transition-colors flex items-center gap-1.5"
            >
              <span>Explore Weaving Heritage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/discover-shops"
              className="bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              Discover Local Shops
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}
