import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, BookOpen, Clock, Heart } from 'lucide-react';

export default function OurStory() {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero */}
      <section className="bg-[#241315] text-[#FAF7F2] py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-heritage-gold text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold tracking-widest uppercase text-heritage-gold">
            A Thousand Years in the Making
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl leading-tight">
            The Story of the Sacred Loom
          </h1>
          <p className="font-tamil text-xl text-amber-200/90">
            தறிநயம் — சங்க காலம் தொட்டு இன்று வரை தொடரும் தமிழர் ஆடைப் பாரம்பரியம்
          </p>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl mx-auto">
            From the Sangam age literature singing of fine silks soft as steam, to the royal Chola, Pandya, and Pallava patronage that raised temple pit-looms into high art.
          </p>
        </div>
      </section>

      {/* Chapters of Heritage */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Chapter 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider">Chapter I</span>
            <h3 className="font-serif font-bold text-2xl text-stone-900">
              The Legend of Sage Markandeya & Kanchi
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Legend holds that the weavers of Kanchipuram are descendants of Sage Markandeya, the celestial weaver of the gods who wove garments from the delicate fibers of the lotus stem. Woven with pure mulberry silk and dipped in pure silver-gold zari, each saree was crafted not merely as clothing, but as an offering of auspicious grace for weddings and temple deities.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-stone-200 aspect-[4/3] bg-stone-100 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
              alt="Kanchipuram Silk History"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Chapter 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          <div className="rounded-3xl overflow-hidden border border-stone-200 aspect-[4/3] bg-stone-100 shadow-md order-last md:order-first">
            <img
              src="https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80"
              alt="Madurai Sungudi Heritage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3">
            <span className="text-xs font-bold text-heritage-teal uppercase tracking-wider">Chapter II</span>
            <h3 className="font-serif font-bold text-2xl text-stone-900">
              The Saurashtrian Migration & Madurai Sungudi
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              In the 16th century, under the patronage of King Tirumala Nayak, master dyers and weavers migrated to the banks of the Vaigai river in Madurai. They created the celebrated Sungudi — hand-tying thousands of tiny pin-head knots using cotton threads before immersing the fabric into herbal indigo, madder, and turmeric dye vats.
            </p>
          </div>
        </div>

        {/* Chapter 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <span className="text-xs font-bold text-heritage-goldDark uppercase tracking-wider">Chapter III</span>
            <h3 className="font-serif font-bold text-2xl text-stone-900">
              The Architecture of Chettinad Kandangi
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              In the palatial merchant mansions of Karaikudi and Kanadukathan, the Nagarathar women wore the iconic Kandangi drapes. Unlike fragile court textiles, Kandangi is woven dense and earthy with vibrant vegetable-dyed checks, deep mustard ochres, and broad temple borders that mirror the geometry of Dravidian temple towers.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-stone-200 aspect-[4/3] bg-stone-100 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80"
              alt="Chettinad Kandangi Cotton"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Modern Mission Statement */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FCFBF7] border-2 border-heritage-gold text-center space-y-4">
          <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider">
            Why THARINAYAM Exists Today
          </span>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900">
            Carrying the Loom Forward into the Digital Age
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            As automated powerlooms flooded the market with synthetic polyester lookalikes, authentic weavers began leaving their looms. THARINAYAM bridges this gap — providing generational weavers with fair economic return and giving customers the confidence of Silk Mark certified GI tag authenticity with modern AI preview.
          </p>
          <div className="pt-2">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 bg-heritage-maroon hover:bg-heritage-maroonDark text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow transition-colors"
            >
              <span>Explore All Authentic Weaves</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}

