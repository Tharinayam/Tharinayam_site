import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Check, ArrowRight, RotateCcw, ShieldCheck, Heart } from 'lucide-react';
import { SAREES_DATA } from '../data/sarees';

export default function PersonalisedRecommendations() {
  const [occasion, setOccasion] = useState('Wedding');
  const [undertone, setUndertone] = useState('Warm Golden');
  const [height, setHeight] = useState('Standard');
  const [showResults, setShowResults] = useState(false);

  const matched = React.useMemo(() => {
    return SAREES_DATA.filter((s) => {
      if (occasion === 'Wedding' && s.occasion !== 'Wedding') return false;
      if (occasion === 'Casual' && s.category === 'pattu') return false;
      return true;
    }).slice(0, 3);
  }, [occasion]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <Link to="/ai-experience" className="hover:text-stone-800">AI Experience</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Personalised Recommendations</span>
        </nav>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          Preference-Based Saree Discovery
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          How THARINAYAM evaluates skin undertones, height frames, temple symbolism, and event contexts to recommend authentic weaves.
        </p>
      </div>

      {/* Methodology Explanation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
          <h3 className="font-serif font-bold text-base text-stone-900">1. Color & Undertone Matrix</h3>
          <p className="text-stone-600 leading-relaxed text-xs">
            Warm golden complexions harmonize naturally with crimson, turmeric ochre, and deep maroons. Olive and cool tones flourish with jewel-toned peacock blues, emeralds, and antique copper zari.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
          <h3 className="font-serif font-bold text-base text-stone-900">2. Border Scale & Silhouette</h3>
          <p className="text-stone-600 leading-relaxed text-xs">
            Petite frames benefit from narrower 3-4 inch temple rekku borders that elongate the vertical drape line, while taller frames carry magnificent 8-12 inch Chettinad and Kanchipuram korvai borders with natural majesty.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
          <h3 className="font-serif font-bold text-base text-stone-900">3. Cultural & Seasonal Context</h3>
          <p className="text-stone-600 leading-relaxed text-xs">
            Muhurtham rituals demand heavyweight 3-ply mulberry pattu, while daytime temple visits in coastal heat call for breathable, organic Madurai Sungudi cottons.
          </p>
        </div>
      </div>

      {/* Interactive Questionnaire Demonstration */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">Interactive Demonstration</span>
          <h2 className="font-serif font-bold text-2xl text-stone-900 mt-0.5">
            Test the Preference Discovery Engine
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="space-y-1.5">
            <label className="font-bold text-stone-700 uppercase block">Occasion</label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50"
            >
              <option value="Wedding">Wedding / Muhurtham</option>
              <option value="Reception">Reception / Evening Party</option>
              <option value="Temple">Temple Festival / Pooja</option>
              <option value="Casual">Casual / Everyday Dignity</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-stone-700 uppercase block">Skin Undertone</label>
            <select
              value={undertone}
              onChange={(e) => setUndertone(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50"
            >
              <option value="Warm Golden">Warm Golden / Dusky</option>
              <option value="Neutral Olive">Neutral Olive</option>
              <option value="Deep Earthy">Deep Earthy Tone</option>
              <option value="Warm Peach">Fair / Warm Peach</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-stone-700 uppercase block">Height Profile</label>
            <select
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50"
            >
              <option value="Petite">Petite (Under 5'3")</option>
              <option value="Standard">Standard (5'3" - 5'6")</option>
              <option value="Tall">Tall (5'7" & above)</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => setShowResults(true)}
          className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors shadow flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Generate Recommended Handlooms</span>
        </button>

        {/* Results */}
        {showResults && (
          <div className="space-y-6 pt-6 border-t border-stone-200 animate-fadeIn">
            <h3 className="font-serif font-bold text-xl text-stone-900">
              Curated Matches for {occasion} • {undertone} • {height}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {matched.map((saree) => (
                <div key={saree.id} className="rounded-2xl border border-stone-200 overflow-hidden bg-stone-50 p-4 space-y-3">
                  <img src={saree.images[0]} alt={saree.title} className="w-full aspect-[4/3] object-cover rounded-xl" />
                  <span className="text-[10px] font-bold text-heritage-maroon uppercase">{saree.originHub} • {saree.fabric}</span>
                  <h4 className="font-serif font-bold text-sm text-stone-900 line-clamp-1">{saree.title}</h4>
                  <div className="p-2.5 rounded-lg bg-amber-50 text-[11px] text-amber-950 border border-amber-200/80">
                    <strong>Why it matches:</strong> Curated for {undertone} complexion with balanced {saree.borderType}.
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

