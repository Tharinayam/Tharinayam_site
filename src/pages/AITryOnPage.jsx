import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Upload, 
  Check, 
  RotateCcw, 
  ShoppingBag, 
  Heart, 
  Info, 
  Download, 
  Share2, 
  Layers, 
  ShieldAlert,
  Sliders,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { SAREES_DATA } from '../data/sarees';

const SAMPLE_AVATARS = [
  {
    id: "avatar-1",
    name: "Priya (Warm Dusky, 5'5\")",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    undertone: "Warm Golden",
  },
  {
    id: "avatar-2",
    name: "Meera (Medium Wheatish, 5'3\")",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    undertone: "Neutral Olive",
  },
  {
    id: "avatar-3",
    name: "Deepa (Dusky Rich, 5'7\")",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    undertone: "Deep Warm",
  },
  {
    id: "avatar-4",
    name: "Ananya (Fair Golden, 5'4\")",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    undertone: "Warm Peach",
  }
];

const DRAPE_STYLES = [
  { id: "traditional-nivi", name: "Traditional Nivi Drape", desc: "Classic South Indian pleated pallu pinned at left shoulder." },
  { id: "bridal-muhurtham", name: "Kanchi Muhurtham Drape", desc: "Fan-pleated border display with broad contrast pallu." },
  { id: "flowing-seedha", name: "Royal Floating Pallu", desc: "Loose open pallu highlighting rich zari buttas & motifs." },
];

export default function AITryOnPage() {
  const { tryOnSaree, setTryOnSaree, addToCart } = useShop();
  const navigate = useNavigate();

  const [selectedAvatar, setSelectedAvatar] = useState(SAMPLE_AVATARS[0]);
  const [customPhoto, setCustomPhoto] = useState(null);
  const [selectedDrape, setSelectedDrape] = useState(DRAPE_STYLES[0]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStep, setProcessStep] = useState(0);
  const [hasGenerated, setHasGenerated] = useState(true);
  const [savedLooks, setSavedLooks] = useState([]);
  const [viewSplit, setViewSplit] = useState(false);

  const handleCustomUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhoto(url);
      setSelectedAvatar({
        id: "custom",
        name: "My Uploaded Photo",
        image: url,
        undertone: "Custom Tone"
      });
    }
  };

  const runSimulation = () => {
    setIsProcessing(true);
    setProcessStep(1);
    
    setTimeout(() => setProcessStep(2), 700);
    setTimeout(() => setProcessStep(3), 1400);
    setTimeout(() => {
      setIsProcessing(false);
      setHasGenerated(true);
    }, 2000);
  };

  const handleSaveLook = () => {
    const look = {
      id: Date.now(),
      sareeTitle: tryOnSaree.title,
      sareeImage: tryOnSaree.images[0],
      drapeStyle: selectedDrape.name,
      price: tryOnSaree.price,
      avatarImage: selectedAvatar.image
    };
    setSavedLooks((prev) => [look, ...prev]);
    alert("✨ Try-On Look saved to your profile!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header */}
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Virtual AI Try-On Studio</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>AI Virtual Saree Studio (தறிநயம் செயற்கை நுண்ணறிவு)</span>
            </div>
            <h1 className="font-serif font-bold text-2xl sm:text-4xl text-stone-900">
              Virtual Saree Draping & Styling Simulator
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
              Visualize how authentic Kanchipuram silk, Madurai Sungudi, and Chettinad borders complement your skin undertone, height, and draping style before you make a purchase.
            </p>
          </div>
          <Link
            to="/style-quiz"
            className="text-xs font-semibold text-purple-800 hover:underline flex items-center gap-1"
          >
            <span>Need color advice? Take AI Style Quiz</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Studio Canvas Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Step 1: Choose Avatar / Upload Photo */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-sm text-stone-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-800 text-xs flex items-center justify-center font-bold">1</span>
                <span>Select Model or Upload Photo</span>
              </h3>
            </div>

            {/* Avatars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SAMPLE_AVATARS.map((av) => (
                <button
                  key={av.id}
                  onClick={() => setSelectedAvatar(av)}
                  className={`p-1.5 rounded-2xl border text-left transition-all relative ${
                    selectedAvatar.id === av.id
                      ? 'border-purple-600 ring-2 ring-purple-200 bg-purple-50/40'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <img src={av.image} alt={av.name} className="w-full aspect-square object-cover rounded-xl mb-1.5" />
                  <p className="text-[10px] font-bold text-stone-800 truncate">{av.name.split(' ')[0]}</p>
                  <p className="text-[9px] text-stone-500 truncate">{av.undertone}</p>
                  {selectedAvatar.id === av.id && (
                    <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">
                      <Check className="w-3 h-3" />
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Custom File Upload Input */}
            <div>
              <label className="border-2 border-dashed border-stone-300 hover:border-purple-500 rounded-2xl p-3 flex items-center justify-center gap-2 text-xs font-semibold text-stone-600 cursor-pointer bg-stone-50 hover:bg-purple-50/50 transition-colors">
                <Upload className="w-4 h-4 text-purple-600" />
                <span>Upload Your Photo (Front Facing)</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCustomUpload}
                  className="hidden"
                />
              </label>
              {customPhoto && (
                <p className="text-[11px] text-emerald-700 font-medium mt-1">
                  ✓ Custom photo loaded successfully.
                </p>
              )}
            </div>
          </div>

          {/* Step 2: Selected Saree */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-sm text-stone-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-800 text-xs flex items-center justify-center font-bold">2</span>
                <span>Selected Saree for Draping</span>
              </h3>
              <span className="text-xs font-semibold text-heritage-maroon">
                ₹{tryOnSaree.price.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-2xl border border-stone-200">
              <img src={tryOnSaree.images[0]} alt={tryOnSaree.title} className="w-16 h-20 object-cover rounded-xl" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-stone-800 truncate">{tryOnSaree.title}</p>
                <p className="text-[11px] text-stone-500">{tryOnSaree.originHub} • {tryOnSaree.fabric}</p>
                <p className="text-[10px] text-emerald-700 font-medium">{tryOnSaree.certification}</p>
              </div>
            </div>

            {/* Quick Saree Switcher Row */}
            <div>
              <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2">
                Or Switch to Another Saree:
              </p>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                {SAREES_DATA.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setTryOnSaree(s);
                      setHasGenerated(false);
                    }}
                    className={`relative w-14 h-16 rounded-xl overflow-hidden border flex-shrink-0 transition-all ${
                      tryOnSaree.id === s.id ? 'border-purple-600 ring-2 ring-purple-300' : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={s.images[0]} alt={s.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Draping Style Customization */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
            <h3 className="font-serif font-bold text-sm text-stone-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-800 text-xs flex items-center justify-center font-bold">3</span>
              <span>Draping Style</span>
            </h3>

            <div className="space-y-2">
              {DRAPE_STYLES.map((drape) => (
                <button
                  key={drape.id}
                  onClick={() => setSelectedDrape(drape)}
                  className={`w-full p-3 rounded-2xl border text-left text-xs transition-all flex items-center justify-between ${
                    selectedDrape.id === drape.id
                      ? 'border-purple-600 bg-purple-50/50 text-purple-950 font-semibold'
                      : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <div>
                    <p className="font-bold">{drape.name}</p>
                    <p className="text-[11px] text-stone-500 font-normal">{drape.desc}</p>
                  </div>
                  {selectedDrape.id === drape.id && <Check className="w-4 h-4 text-purple-600 flex-shrink-0" />}
                </button>
              ))}
            </div>

            {/* Generate Button */}
            <button
              onClick={runSimulation}
              disabled={isProcessing}
              className="w-full py-3.5 px-6 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Sparkles className="w-4 h-4 text-purple-200" />
              <span>{isProcessing ? 'Generating AI Draping...' : 'Render Virtual Try-On'}</span>
            </button>
          </div>

        </div>

        {/* Right Column: AI Visual Canvas & Results (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900">Virtual Fitting Mirror</h3>
                <p className="text-xs text-stone-500">
                  Model: {selectedAvatar.name} • Style: {selectedDrape.name}
                </p>
              </div>

              {/* View Split Toggle */}
              <button
                onClick={() => setViewSplit(!viewSplit)}
                className="text-xs font-semibold text-purple-800 hover:underline flex items-center gap-1"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>{viewSplit ? 'Single View' : 'Side-by-Side View'}</span>
              </button>
            </div>

            {/* Simulation Canvas Area */}
            <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 aspect-[4/5] sm:aspect-[4/4.5] flex items-center justify-center shadow-inner">
              
              {isProcessing ? (
                /* Processing State with animation */
                <div className="text-center p-8 space-y-4 max-w-sm text-white">
                  <div className="w-16 h-16 rounded-full border-4 border-purple-500 border-t-transparent animate-spin mx-auto"></div>
                  <h4 className="font-serif font-bold text-lg">AI Draping Engine Running</h4>
                  <div className="space-y-1.5 text-xs text-stone-300">
                    <p className={processStep >= 1 ? 'text-purple-300 font-semibold' : 'opacity-40'}>
                      ✓ Extracting silk luster & {tryOnSaree.zariType}
                    </p>
                    <p className={processStep >= 2 ? 'text-purple-300 font-semibold' : 'opacity-40'}>
                      ✓ Mapping pleat folds for {selectedDrape.name}
                    </p>
                    <p className={processStep >= 3 ? 'text-purple-300 font-semibold' : 'opacity-40'}>
                      ✓ Calibrating lighting to {selectedAvatar.undertone} undertone
                    </p>
                  </div>
                </div>
              ) : viewSplit ? (
                /* Side by Side Comparison */
                <div className="grid grid-cols-2 w-full h-full divide-x divide-stone-800">
                  <div className="relative h-full">
                    <img src={selectedAvatar.image} alt="Original" className="w-full h-full object-cover" />
                    <span className="absolute bottom-3 left-3 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Original
                    </span>
                  </div>
                  <div className="relative h-full">
                    <img src={tryOnSaree.images[0]} alt="Draped" className="w-full h-full object-cover" />
                    <span className="absolute bottom-3 right-3 bg-purple-700 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Draped Preview
                    </span>
                  </div>
                </div>
              ) : (
                /* Generated Single Draped Preview */
                <div className="relative w-full h-full">
                  <img
                    src={tryOnSaree.images[0]}
                    alt="AI Virtual Try-On Render"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Subtle Simulation Watermark & Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    <span className="bg-purple-900/90 backdrop-blur-md text-purple-100 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                      <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                      <span>AI Simulated Draping</span>
                    </span>
                    <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                      Color Harmony: 96% Match
                    </span>
                  </div>

                  {/* Bottom details bar on image */}
                  <div className="absolute inset-x-4 bottom-4 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold truncate max-w-[200px] sm:max-w-xs">{tryOnSaree.title}</p>
                      <p className="text-[11px] text-stone-300">₹{tryOnSaree.price.toLocaleString('en-IN')} • {tryOnSaree.originHub}</p>
                    </div>
                    <button
                      onClick={() => addToCart(tryOnSaree, 1)}
                      className="bg-heritage-gold hover:bg-heritage-goldDark text-stone-900 font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add Saree to Bag</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Action Buttons underneath canvas */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSaveLook}
                  className="px-4 py-2 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-50 flex items-center gap-1.5 transition-colors"
                >
                  <Heart className="w-3.5 h-3.5 text-rose-500" />
                  <span>Save Look</span>
                </button>
                <button
                  onClick={() => alert("Image link ready for Instagram/WhatsApp sharing.")}
                  className="p-2 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50"
                  title="Share look"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <Link
                to={`/products/${tryOnSaree.id}`}
                className="text-xs font-bold text-heritage-maroon hover:underline flex items-center gap-1"
              >
                <span>View Full Saree Details & Loom Story</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* AI Transparency & Fit Disclaimer Box (Required by specification!) */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-amber-950">
                <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>AI Transparency & Fit Advisory</span>
              </div>
              <p className="text-[11px] text-amber-800 leading-relaxed">
                This virtual try-on is an AI-assisted visual simulation intended to demonstrate color harmony, border width proportions, and pallu draping flow. Handloom drapes possess natural organic textures, hand-tied fringe tassels, and artisanal variations that may subtly differ in physical draping. Exact fit cannot be guaranteed.
              </p>
            </div>

          </div>

          {/* Saved Looks Drawer / Section */}
          {savedLooks.length > 0 && (
            <div className="bg-white rounded-3xl p-6 border border-stone-200 space-y-4">
              <h4 className="font-serif font-bold text-sm text-stone-900">
                Your Saved Try-On Looks ({savedLooks.length})
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {savedLooks.map((look) => (
                  <div key={look.id} className="p-2 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
                    <img src={look.sareeImage} alt={look.sareeTitle} className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <p className="font-bold text-stone-800 truncate">{look.sareeTitle}</p>
                    <p className="text-[10px] text-stone-500">{look.drapeStyle}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

