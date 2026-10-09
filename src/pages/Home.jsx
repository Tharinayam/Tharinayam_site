import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Store, 
  BookOpen, 
  Award, 
  MapPin, 
  Compass, 
  CheckCircle2, 
  ChevronRight,
  Eye,
  Layers,
  HelpCircle
} from 'lucide-react';
import { SAREES_DATA, CATEGORIES_DATA } from '../data/sarees';
import { SHOPS_DATA } from '../data/shops';
import { WEAVERS_DATA } from '../data/weavers';
import SareeCard from '../components/SareeCard';

export default function Home() {
  const [selectedModalSaree, setSelectedModalSaree] = useState(null);

  const featuredSarees = SAREES_DATA.filter((s) => s.featured).slice(0, 4);
  const handloomHighlights = SAREES_DATA.filter((s) => s.loomType === 'handloom').slice(0, 3);
  const powerloomHighlights = SAREES_DATA.filter((s) => s.loomType === 'powerloom');

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Hero Banner */}
      <section className="relative bg-gradient-to-b from-[#4A0E17] via-[#631320] to-[#751525] text-white overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-heritage-gold">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-heritage-gold/20 border border-heritage-gold/40 text-heritage-goldLight text-xs tracking-wider uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-heritage-gold" />
              <span>Tamil Nadu Textile Heritage & Discovery Platform</span>
            </div>

            <h1 className="font-serif font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-tight">
              The Elegance of the <span className="text-heritage-gold">Sacred Loom</span>
            </h1>

            <p className="font-tamil text-xl sm:text-2xl text-amber-100/90 font-medium">
              தறிநயம் — பாரம்பரிய கைத்தறி கலை, நெசவாளர் வரலாறு மற்றும் உள்ளூர் அங்காடிகள்
            </p>

            <p className="text-stone-200 text-sm sm:text-base max-w-2xl leading-relaxed">
              Explore India's thousands-year-old textile legacy. Discover certified Kanchipuram silk, breezy Madurai Sungudi, vibrant Chettinad Kandangi, and Arani weaves while connecting directly with generational master weavers and local boutique societies.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                to="/collections"
                className="bg-heritage-gold hover:bg-heritage-goldDark text-stone-900 font-bold px-7 py-3.5 rounded-xl text-sm shadow-gold flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Saree Collections</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/heritage"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl text-sm backdrop-blur-md flex items-center gap-2 transition-all"
              >
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>Our Weaving Heritage</span>
              </Link>
            </div>

            {/* Hub Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-stone-300">
              <span className="font-medium text-heritage-gold">Regional Hubs:</span>
              {["Kanchipuram", "Madurai", "Chettinad", "Salem", "Arani", "Sirumugai"].map((hub) => (
                <Link
                  key={hub}
                  to={`/regional-guide`}
                  className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 hover:border-heritage-gold hover:bg-white/10 text-stone-200 transition-colors"
                >
                  {hub}
                </Link>
              ))}
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-heritage-gold via-amber-300 to-heritage-gold opacity-30 blur-xl"></div>
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-heritage-gold/50 shadow-2xl bg-stone-900">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
                  alt="Kanchipuram Silk Bridal Saree"
                  className="w-full h-[400px] object-cover object-center"
                />
                
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-white/20 text-white space-y-1">
                  <span className="text-[10px] text-heritage-gold uppercase tracking-wider font-semibold">
                    Geographical Indication (GI) Registered
                  </span>
                  <h4 className="text-sm font-semibold truncate">Pure Mulberry Silk Korvai Pit-Loom Drape</h4>
                  <p className="text-xs text-stone-300">Handcrafted by Master Weaver Shanmugam • Kanchipuram</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Popular Saree Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold text-heritage-maroon uppercase tracking-wider">
            Curated Textile Classifications
          </span>
          <h2 className="font-serif font-bold text-3xl text-stone-900 mt-1">
            Explore by Weave & Fabric Type
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-2">
            Each category represents generations of specialized loom knowledge, distinct thread counts, and regional design philosophies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <Link
              key={cat.slug}
              to={`/collections?category=${cat.slug}`}
              className="group rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-heritage-maroon transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] font-bold text-heritage-maroon bg-amber-50 px-2 py-0.5 rounded-full">
                    {cat.tamilTitle}
                  </span>
                </div>
                <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
                <span className="text-xs font-semibold text-heritage-maroon group-hover:underline inline-flex items-center gap-1 pt-1">
                  Learn more & view drapes <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Handloom vs Powerloom Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-amber-200">
            <div>
              <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider">
                Craftsmanship Comparison
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 mt-1">
                Handloom vs. Powerloom Weaving
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
                Understanding the artistry, time investment, and distinct tactile qualities between traditional pit-looms and modern powerlooms.
              </p>
            </div>
            <Link
              to="/guide"
              className="text-xs font-bold text-heritage-maroon hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              <span>Read Full Weaving Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Handloom Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                  100% Pit & Frame Handloom (கைத்தறி)
                </span>
                <span className="text-xs text-stone-400">12 - 28 Days per Drape</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">The Living Rhythm of Human Hands</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Handloom sarees are created without electricity. A master weaver controls the pedals, reed, and wooden shuttle manually, accompanied by a helper for intricate petni or korvai borders. Each piece possesses a rich soul, subtle organic yarn variations, and exceptional durability.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-emerald-800 font-medium">
                <span className="px-2 py-0.5 rounded-md bg-emerald-50">✓ Interlocking Korvai Borders</span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-50">✓ Certified Handloom Mark</span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-50">✓ Pure Natural Mulberry Silk</span>
              </div>
            </div>

            {/* Powerloom Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider">
                  Powerloom Jacquard (விசைத்தறி)
                </span>
                <span className="text-xs text-stone-400">2 - 5 Hours per Drape</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">Modern Precision & Accessible Elegance</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Powerlooms use motorized mechanisms to weave uniform, lightweight sarees with high-speed automated pattern punch-cards. They make festive sarees and lightweight soft silks accessible to millions for everyday celebrations and office wear.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-stone-600 font-medium">
                <span className="px-2 py-0.5 rounded-md bg-stone-100">✓ Featherlight Drape</span>
                <span className="px-2 py-0.5 rounded-md bg-stone-100">✓ Modern Geometric Jacquards</span>
                <span className="px-2 py-0.5 rounded-md bg-stone-100">✓ Budget-friendly Daily Wear</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Saree Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-heritage-maroon uppercase tracking-wider mb-1">
              <Award className="w-4 h-4 text-heritage-gold" />
              <span>Certified Handloom Masterpieces</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900">
              Featured Saree Collections
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              Explore bridal silks, Sungudi tie-dyes, and architectural Chettinad borders.
            </p>
          </div>
          <Link
            to="/collections"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-heritage-maroon hover:underline"
          >
            <span>View Full Collections Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSarees.map((saree) => (
            <SareeCard 
              key={saree.id} 
              saree={saree} 
              onSelect={(s) => setSelectedModalSaree(s)}
            />
          ))}
        </div>
      </section>

      {/* 5. Featured Weavers & Societies */}
      <section className="bg-stone-50 border-y border-stone-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider">
              Generational Guardians of the Loom
            </span>
            <h2 className="font-serif font-bold text-3xl text-stone-900">
              Featured Master Weavers & Local Societies
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Behind every drape is an artisan family with decades of dedicated knowledge passed down through generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WEAVERS_DATA.map((weaver) => (
              <div
                key={weaver.id}
                className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={weaver.photo}
                      alt={weaver.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-heritage-gold shadow-sm"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-base text-stone-900">{weaver.name}</h4>
                      <p className="font-tamil text-xs text-stone-500">{weaver.tamilName}</p>
                      <p className="text-xs text-heritage-maroon font-semibold flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" /> {weaver.origin}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed italic mb-4">
                    "{weaver.craftMotto}"
                  </p>

                  <div className="space-y-1.5 text-xs text-stone-500 pt-3 border-t border-stone-100">
                    <p><strong className="text-stone-700">Speciality:</strong> {weaver.speciality}</p>
                    <p><strong className="text-stone-700">Loom Rig:</strong> {weaver.loomType}</p>
                  </div>
                </div>

                <Link
                  to="/weavers"
                  className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold text-center block transition-colors"
                >
                  Read Artisan Story
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/weavers"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-heritage-maroon hover:underline"
            >
              <span>Explore All Master Weaver Profiles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. Explore Our Heritage Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#241315] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 border-2 border-heritage-gold shadow-xl">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-heritage-gold uppercase tracking-wider">
              Explore Our Heritage
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-4xl leading-tight">
              A Living Tradition Dating Back to the Sangam Era
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Tamil Nadu's handloom culture is intertwined with sacred temple architecture, classical Bharatanatyam aesthetics, and regional agrarian rhythms. Explore our comprehensive guides covering Kanchipuram, Madurai, Chettinad, Arani, and Salem traditions.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/heritage"
                className="bg-heritage-gold hover:bg-heritage-goldDark text-stone-900 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow transition-colors flex items-center gap-2"
              >
                <span>Read Heritage Overview</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/regional-guide"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl text-xs sm:text-sm border border-white/20 transition-colors"
              >
                Regional Saree Hubs Guide
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-heritage-gold/40 shadow-lg max-w-sm">
              <img
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80"
                alt="Artisan at Pit Loom"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-xs text-stone-200">
                  Master craftsman at work in Kanchipuram pit-loom workshop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saree Informational Modal (Opens when user clicks Explore Details) */}
      {selectedModalSaree && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <span className="text-[10px] font-bold text-heritage-maroon uppercase tracking-wider">
                  {selectedModalSaree.originHub} • {selectedModalSaree.loomType}
                </span>
                <h3 className="font-serif font-bold text-xl text-stone-900 mt-0.5">
                  {selectedModalSaree.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedModalSaree(null)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <img
                src={selectedModalSaree.images[0]}
                alt={selectedModalSaree.title}
                className="w-full aspect-[4/5] object-cover rounded-2xl border border-stone-200"
              />
              <div className="space-y-3 text-xs sm:text-sm">
                <p className="text-stone-600 leading-relaxed">
                  {selectedModalSaree.description}
                </p>
                <div className="space-y-1.5 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                  <p><strong className="text-stone-800">Fabric:</strong> {selectedModalSaree.fabric}</p>
                  <p><strong className="text-stone-800">Zari Specification:</strong> {selectedModalSaree.zariType}</p>
                  <p><strong className="text-stone-800">Warp x Weft:</strong> {selectedModalSaree.warpWeft}</p>
                  <p><strong className="text-stone-800">Border Technique:</strong> {selectedModalSaree.borderType}</p>
                  <p><strong className="text-stone-800">Length:</strong> {selectedModalSaree.sareeLength}</p>
                  <p><strong className="text-stone-800">Certification:</strong> {selectedModalSaree.certification}</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
              <h5 className="font-bold uppercase tracking-wider">Artisan Weave Story</h5>
              <p className="leading-relaxed text-stone-700">{selectedModalSaree.weaveStory}</p>
            </div>

            <div className="flex justify-between items-center pt-2">
              <Link
                to="/discover-shops"
                onClick={() => setSelectedModalSaree(null)}
                className="text-xs font-bold text-heritage-maroon hover:underline flex items-center gap-1"
              >
                <Store className="w-3.5 h-3.5" />
                <span>Find shops stocking this weave</span>
              </Link>
              <button
                onClick={() => setSelectedModalSaree(null)}
                className="bg-stone-900 text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-stone-800"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
