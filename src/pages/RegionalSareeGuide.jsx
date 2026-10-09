import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ShieldCheck, BookOpen, Layers } from 'lucide-react';

const REGIONAL_HUBS = [
  {
    hub: "Kanchipuram",
    tamil: "காஞ்சிபுரம்",
    tagline: "The City of 1,000 Temples • Queen of Pure Silks",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    giTag: "GI Certificate #23 (Pure Silk)",
    speciality: "Interlocking Korvai borders, pure silver-gold zari wash, 3-ply heavy mulberry silk.",
    history: "Rooted in royal Chola and Pallava patronage. Weavers consider themselves descendants of Sage Markandeya. Famous for broad temple rekku borders and Annapakshi motifs."
  },
  {
    hub: "Madurai",
    tamil: "மதுரை",
    tagline: "The Ancient Cultural Capital • Saurashtrian Heritage",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
    giTag: "GI Certificate #17 (Sungudi Cotton)",
    speciality: "Micro ring-dot tie-dye technique, vegetable indigo dyeing, auspicious temple borders.",
    history: "During the Nayak dynasty in the 16th century, master Saurashtrian dyers settled along the Vaigai river. Sungudi is celebrated for keeping the body cool in South Indian heat."
  },
  {
    hub: "Chettinad (Karaikudi)",
    tamil: "செட்டிநாடு",
    tagline: "Palatial Nagarathar Mansions • Earthy Kandangi Handloom",
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
    giTag: "GI Certificate #302 (Kandangi)",
    speciality: "Heavy coarse 60s cotton, broad 8-inch contrasting borders, architectural checks.",
    history: "Originally draped by Chettiar women without petticoats. Characterized by striking mustard yellows, deep brick reds, and geometric border temple spires."
  },
  {
    hub: "Arani",
    tamil: "ஆரணி",
    tagline: "The Silk Hub of Tiruvannamalai",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    giTag: "GI Certificate #53 (Arani Silk)",
    speciality: "Featherlight pure mulberry silk, contemporary jacquard motifs, modern pastel color palettes.",
    history: "Known for soft silks that are easy to drape and comfortable for long festive events. Arani sarees offer the luster of pure silk with modern lightweight engineering."
  },
  {
    hub: "Salem",
    tamil: "சேலம்",
    tagline: "Sacred Temple Drapes • Salem Venpattu",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    giTag: "GI Certificate #87 (Salem Silk)",
    speciality: "Pure unbleached white silk (Venpattu), gold zari gopuram borders, ceremony drapes.",
    history: "Salem weavers hold a protected reputation for producing ceremonial pure silk fabrics required for temple poojas, wedding rituals, and spiritual ceremonies."
  },
  {
    hub: "Sirumugai / Coimbatore",
    tamil: "கோவை / சிறுமுகை",
    tagline: "Foothills of Nilgiris • Translucent Kora Organza",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
    giTag: "GI Certificate #213 (Kora Cotton)",
    speciality: "Crisp organza texture, cotton coolness combined with pure silk filament sheen.",
    history: "Sirumugai's unique micro-climate near the Western Ghats enabled artisans to pioneer high-twist organza cotton blends that remain structured and elegant."
  },
  {
    hub: "Thirubuvanam",
    tamil: "திருபுவனம்",
    tagline: "Chola Heartland of Thanjavur District",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    giTag: "GI Certificate #138 (Thirubuvanam Silk)",
    speciality: "Double-warp heavy silk yarn, uniform sheen on both sides, crease-resistant drape.",
    history: "Famous for double-ply yarn producing the heaviest, most resilient pure silk drape in all of South India. The luster deepens as the saree ages."
  }
];

export default function RegionalSareeGuide() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-heritage-maroon uppercase tracking-widest">
          Tamil Nadu Textile Topography
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          Regional Saree Guide
        </h1>
        <p className="text-xs sm:text-sm text-stone-600">
          Every district has its own indigenous yarn preparation, dye chemistry, and loom rhythm. Explore the 7 protected GI weaving hubs of Tamil Nadu.
        </p>
      </div>

      {/* Hub Cards */}
      <div className="space-y-10">
        {REGIONAL_HUBS.map((hub) => (
          <div
            key={hub.hub}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between"
          >
            <div className="w-full md:w-5/12 aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200 flex-shrink-0 bg-stone-100">
              <img src={hub.image} alt={hub.hub} className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-7/12 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-heritage-maroon uppercase">
                  {hub.hub}
                </span>
                <span className="font-tamil text-stone-500 text-xs font-semibold">
                  {hub.tamil}
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded-full ml-auto">
                  {hub.giTag}
                </span>
              </div>

              <h3 className="font-serif font-bold text-xl text-stone-900">{hub.tagline}</h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {hub.history}
              </p>

              <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-950">
                <strong className="block font-bold">Hallmark Speciality:</strong>
                <span>{hub.speciality}</span>
              </div>

              <div className="pt-2 flex gap-4">
                <Link
                  to={`/collections?hub=${hub.hub}`}
                  className="text-xs font-bold text-heritage-maroon hover:underline flex items-center gap-1"
                >
                  <span>Explore {hub.hub} Drapes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to={`/discover-shops`}
                  className="text-xs font-semibold text-stone-600 hover:text-stone-900 underline"
                >
                  Locate Shops in {hub.hub}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

