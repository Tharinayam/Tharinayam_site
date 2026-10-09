import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, HelpCircle, Layers, CheckCircle2, Award, ChevronDown } from 'lucide-react';

export default function WeavingGuide() {
  const [activeTab, setActiveTab] = useState('handloomVsPowerloom');

  const GLOSSARY = [
    { term: "Korvai (கோர்வை)", meaning: "An interlocking weaving technique where contrasting borders are hand-joined to the body using separate shuttles." },
    { term: "Rekku (றெக்கு)", meaning: "The iconic triangular temple motif running along the inner border of Kanchipuram sarees." },
    { term: "Adai (அடை)", meaning: "The traditional wooden harness and cord system suspended above pit-looms that controls complex jacquard motifs." },
    { term: "Petni (பெட்னி)", meaning: "The skillful manual twisting and interlocking of warp threads when shifting from the body to the pallu color." },
    { term: "Venpattu (வெண்பட்டு)", meaning: "Pure unbleached white silk woven primarily in Salem for sacred wedding ceremonies and temple rites." },
    { term: "Sungudi (சுங்குடி)", meaning: "Traditional circular micro tie-dye drop pattern developed by Saurashtrian artisans in Madurai." },
    { term: "Kandangi (கண்டாங்கி)", meaning: "Coarse, dense Chettinad cotton drape featuring bright contrasting color blocks and architectural checks." },
    { term: "Warp & Weft (பாவு & ஊடை)", meaning: "Warp refers to the longitudinal vertical threads held stationary on the loom; weft refers to the crosswise horizontal threads inserted by shuttle." }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-heritage-maroon uppercase tracking-widest">
          Knowledge Base & Master Glossary
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          Weaving & Fabrics Guide
        </h1>
        <p className="text-xs sm:text-sm text-stone-600">
          A definitive handbook to understanding Tamil Nadu's pit-loom methods, silk grades, pure zari metallurgy, sacred motifs, and traditional terminology.
        </p>
      </div>

      {/* Guide Tabs */}
      <div className="flex border-b border-stone-200 overflow-x-auto text-xs sm:text-sm font-semibold text-stone-600">
        {[
          { id: 'handloomVsPowerloom', label: '1. Handloom vs Powerloom' },
          { id: 'fabrics', label: '2. Silk, Cotton & Blends' },
          { id: 'zariBorders', label: '3. Zari & Border Styles' },
          { id: 'motifs', label: '4. Patterns & Motifs' },
          { id: 'glossary', label: '5. Weaving Terminology' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-3 px-5 border-b-2 whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'border-heritage-maroon text-heritage-maroon font-bold bg-amber-50/50'
                : 'border-transparent hover:text-stone-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Handloom vs Powerloom */}
      {activeTab === 'handloomVsPowerloom' && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8 animate-fadeIn">
          <div>
            <h2 className="font-serif font-bold text-2xl text-stone-900">Handloom vs. Powerloom: The Essential Truth</h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">Understanding the difference protects buyers and preserves cultural heritage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
              <span className="font-bold text-emerald-900 uppercase text-xs">Authentic Handloom</span>
              <ul className="space-y-2 text-stone-700">
                <li>• <strong>Mechanism:</strong> 100% human-powered pit loom or wooden frame.</li>
                <li>• <strong>Duration:</strong> Takes 10 to 28 days for a single bridal saree.</li>
                <li>• <strong>Texture:</strong> Organic, breathable, with natural grain nuances.</li>
                <li>• <strong>Borders:</strong> Interlocked by hand (Korvai technique with three shuttles).</li>
                <li>• <strong>Longevity:</strong> Heavy mulberry silk can be preserved for over 80+ years.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <span className="font-bold text-stone-800 uppercase text-xs">Modern Powerloom</span>
              <ul className="space-y-2 text-stone-700">
                <li>• <strong>Mechanism:</strong> Motor-driven electronic or mechanical looms.</li>
                <li>• <strong>Duration:</strong> 2 to 6 hours per saree.</li>
                <li>• <strong>Texture:</strong> Flat, highly uniform, lightweight.</li>
                <li>• <strong>Borders:</strong> Continuous weft pass without interlocking.</li>
                <li>• <strong>Best for:</strong> Everyday wear, office sarees, and affordable festivities.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Silk, Cotton & Blends */}
      {activeTab === 'fabrics' && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6 animate-fadeIn">
          <h2 className="font-serif font-bold text-2xl text-stone-900">Tamil Nadu Textile Fibers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-serif font-bold text-base text-stone-900">Pure Mulberry Silk (பட்டு)</h3>
              <p className="text-stone-600 leading-relaxed text-xs">
                Derived from silkworms fed exclusively on mulberry leaves. Kanchipuram uses 3-ply twisted silk warp and weft, giving it signature weight, durability, and a rich deep luster.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-serif font-bold text-base text-stone-900">Combed Cotton (பருத்தி)</h3>
              <p className="text-stone-600 leading-relaxed text-xs">
                Madurai and Chettinad use high-count cotton (60s to 100s count) treated with starch to provide natural cooling, high absorbency, and crisp draping in warm climates.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-serif font-bold text-base text-stone-900">Kora Cotton Organza</h3>
              <p className="text-stone-600 leading-relaxed text-xs">
                Sirumugai's pride. High-twist cotton yarn blended with silk filaments produces a translucent, lightweight organza drape that retains crisp folds.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Zari & Border Styles */}
      {activeTab === 'zariBorders' && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6 animate-fadeIn">
          <h2 className="font-serif font-bold text-2xl text-stone-900">Zari Grades & Border Architecture</h2>
          <div className="space-y-4 text-xs sm:text-sm text-stone-700">
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
              <h4 className="font-bold text-heritage-maroon">1. Pure Silver Zari (Gold Dipped)</h4>
              <p className="text-stone-600 mt-1">
                The gold standard of bridal pattu. Core silk thread wound with 57% pure silver flattened wire, then electrolytically washed in 24k gold.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <h4 className="font-bold text-stone-900">2. Half Fine / Tested Zari</h4>
              <p className="text-stone-600 mt-1">
                Copper wire electroplated with silver or gold finish. Offers a stunning metallic shine at an accessible price point for festive sarees.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <h4 className="font-bold text-stone-900">3. Korvai Temple (Rekku) Border</h4>
              <p className="text-stone-600 mt-1">
                Triangles woven at the border junction simulating the Gopuram (temple tower). Requires two weavers working in tandem on the loom.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Motifs */}
      {activeTab === 'motifs' && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6 animate-fadeIn">
          <h2 className="font-serif font-bold text-2xl text-stone-900">Traditional Saree Motifs & Meanings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm">
            {[
              { name: "Mayil (Peacock)", desc: "Associated with Lord Murugan, symbolizing beauty, royalty, and celestial grace." },
              { name: "Annapakshi (Divine Swan)", desc: "A mythical celestial bird that separates milk from water, representing wisdom and discernment." },
              { name: "Rudraksha", desc: "Sacred prayer beads representing spiritual discipline and divine protection." },
              { name: "Manga (Mango / Paisley)", desc: "Symbol of fertility, auspicious growth, and natural abundance." },
              { name: "Chakram (Sacred Wheel)", desc: "Symbol of universal cosmic order, truth, and royal authority." },
              { name: "Mallinaggu (Jasmine Buds)", desc: "Delicate floral drop motifs celebrating fragrance and wedding festivity." }
            ].map((m) => (
              <div key={m.name} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                <h4 className="font-serif font-bold text-stone-900">{m.name}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Glossary */}
      {activeTab === 'glossary' && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6 animate-fadeIn">
          <h2 className="font-serif font-bold text-2xl text-stone-900">Tamil Nadu Weaving Terminology</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GLOSSARY.map((g) => (
              <div key={g.term} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm space-y-1">
                <h4 className="font-bold text-heritage-maroon">{g.term}</h4>
                <p className="text-stone-600 leading-relaxed text-xs">{g.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

