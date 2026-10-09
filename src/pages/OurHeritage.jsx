import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Layers, Award, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export default function OurHeritage() {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Header */}
      <section className="bg-[#241315] text-[#FAF7F2] py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-heritage-gold text-center relative">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-heritage-gold">
            Living Cultural Legacy
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl">
            Tamil Nadu Weaving Heritage
          </h1>
          <p className="font-tamil text-xl text-amber-200">
            ஆயிரம் ஆண்டு தமிழர் நெசவுக் கலை, மரபு மற்றும் நுட்பங்கள்
          </p>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl mx-auto">
            From ancient Sangam poems celebrating muslin-like drapes to Chola royal guild charters, Tamil Nadu's textile history represents one of humanity's greatest triumphs of hand craftsmanship.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section 1: Traditional Techniques */}
        <div className="space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider">Ancient Methods</span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 mt-1">
              Traditional Weaving Techniques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
              <span className="text-[10px] font-bold text-heritage-gold uppercase tracking-wider">Pit-Loom Technique</span>
              <h3 className="font-serif font-bold text-base text-stone-900">Korvai Interlocking</h3>
              <p className="text-stone-600 leading-relaxed text-xs">
                Korvai (meaning 'sync' or 'interlock' in Tamil) is a dual-shuttle technique where the saree's body and borders are woven in contrasting colors and joined together seamlessly by hand using a petni catch.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
              <span className="text-[10px] font-bold text-heritage-gold uppercase tracking-wider">Dyeing & Knotting</span>
              <h3 className="font-serif font-bold text-base text-stone-900">Sungudi Tie-Dye</h3>
              <p className="text-stone-600 leading-relaxed text-xs">
                Artisans in Madurai hand-tie up to 10,000 tiny micro-dots with thread before dipping in indigo and natural botanical vats, producing circular drop motifs across crisp cotton.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
              <span className="text-[10px] font-bold text-heritage-gold uppercase tracking-wider">Zari Artistry</span>
              <h3 className="font-serif font-bold text-base text-stone-900">Pure Silver Zari Gold Wash</h3>
              <p className="text-stone-600 leading-relaxed text-xs">
                Authentic Kanchipuram zari consists of silk thread tightly wrapped with 57% pure silver and washed in 24k gold, creating a soft metallic sheen that does not tarnish for over a century.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Regional Textile Traditions */}
        <div className="space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider">Geographic Diversity</span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 mt-1">
              Regional Textile Traditions Across Tamil Nadu
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                region: "Kanchipuram (The City of Thousand Temples)",
                craft: "Pure Mulberry Silk with Heavy Korvai Borders",
                desc: "Known as the Queen of Silks. Woven on pit looms using 3 shuttles, featuring temple towers (Gopuram), swans (Annapakshi), and peacocks (Mayil)."
              },
              {
                region: "Madurai (The Vaigai River Heart)",
                craft: "Madurai Sungudi Tie-Dye Cotton",
                desc: "16th-century Saurashtrian heritage craft celebrated for pure cotton breathability, bright yellow-indigo hues, and sacred temple borders."
              },
              {
                region: "Chettinad (Karaikudi Mansion Heritage)",
                craft: "Kandangi Coarse Cotton Sarees",
                desc: "Distinguished by broad, contrasting earthy borders, heavy coarse drape, and vivid architectural checks reflecting Nagarathar palatial homes."
              },
              {
                region: "Arani & Salem",
                craft: "Soft Silks, Lightweight Jacquards & Venpattu",
                desc: "Arani is famous for lightweight mulberry silks while Salem produces ceremonial white Venpattu worn for temple rituals and weddings."
              },
              {
                region: "Sirumugai / Coimbatore",
                craft: "Kora Cotton Organza Blend",
                desc: "Crisp, sheer organza weaves blending high-twist cotton with pure silk for effortless summer elegance."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-base text-stone-900">{item.region}</h3>
                  <span className="text-xs font-bold text-heritage-maroon block">{item.craft}</span>
                  <p className="text-xs text-stone-600 leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
                <Link
                  to="/regional-guide"
                  className="text-xs font-semibold text-heritage-maroon hover:underline flex items-center gap-1 flex-shrink-0"
                >
                  <span>Explore Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Handloom Craftsmanship & Sacred Motifs */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F0] border-2 border-heritage-gold space-y-4">
          <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider">
            Motifs & Symbolism
          </span>
          <h3 className="font-serif font-bold text-2xl text-stone-900">
            Sacred Motifs Woven into the Fabric
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            In Tamil handloom culture, motifs are not arbitrary decorations; they carry blessings of prosperity, nobility, and cosmic order:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-2">
            <div className="p-3 bg-white rounded-xl border border-stone-200">
              <strong className="block text-stone-900 font-serif">Mayil (Peacock)</strong>
              <span className="text-stone-500 text-[11px]">Symbol of divine royalty & celestial grace</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-stone-200">
              <strong className="block text-stone-900 font-serif">Annapakshi</strong>
              <span className="text-stone-500 text-[11px]">Mythical bird of discernment and purity</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-stone-200">
              <strong className="block text-stone-900 font-serif">Rudraksha</strong>
              <span className="text-stone-500 text-[11px]">Sacred beads conferring peace and spiritual shield</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-stone-200">
              <strong className="block text-stone-900 font-serif">Gopuram (Rekku)</strong>
              <span className="text-stone-500 text-[11px]">Temple tower spires evoking architectural grandeur</span>
            </div>
          </div>
          <div className="pt-4 flex gap-4">
            <Link
              to="/guide"
              className="bg-heritage-maroon hover:bg-heritage-maroonDark text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow transition-colors flex items-center gap-1.5"
            >
              <span>Explore Complete Fabrics & Motifs Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}

