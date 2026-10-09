import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, BookOpen, Store, Phone, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const STEPS = [
    {
      num: "01",
      title: "Explore Saree Collections & Regional Hubs",
      desc: "Browse certified Kanchipuram silk, Madurai Sungudi, Chettinad Kandangi, and Arani weaves. Filter by craft, fabric, and origin to understand regional characteristics.",
      link: "/collections",
      cta: "Explore Collections"
    },
    {
      num: "02",
      title: "Learn Weaving Nuances & Authenticity Standards",
      desc: "Consult our Weaving & Fabrics Guide to understand pure silver zari, 3-ply mulberry silk, the Korvai interlocking method, and how to verify Silk Mark barcodes.",
      link: "/guide",
      cta: "Read Fabric Guide"
    },
    {
      num: "03",
      title: "Discover Local Shops & Weaving Societies",
      desc: "Use our interactive directory to find registered weavers' cooperative societies, historic silk emporiums, and independent boutiques across Tamil Nadu.",
      link: "/discover-shops",
      cta: "Discover Shops"
    },
    {
      num: "04",
      title: "Connect Directly With Artisans & Boutiques",
      desc: "Reach out via verified telephone numbers or WhatsApp directly to discuss available stock, custom bridal weaves, or plan an in-person visit to the loom showroom.",
      link: "/shops",
      cta: "View Directory"
    },
    {
      num: "05",
      title: "Support Traditional Weavers with Every Drape",
      desc: "By engaging directly with verified societies and authentic boutiques, you ensure fair remuneration for generational artisans and preserve Tamil textile heritage.",
      link: "/about",
      cta: "Learn About Our Mission"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-heritage-maroon uppercase tracking-widest">
          The Visitor Journey
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          How THARINAYAM Works
        </h1>
        <p className="text-xs sm:text-sm text-stone-600">
          A transparent 5-step pathway connecting handloom admirers with master weavers and verified local shops without commercial middlemen.
        </p>
      </div>

      {/* Steps List */}
      <div className="space-y-6">
        {STEPS.map((step) => (
          <div
            key={step.num}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-5">
              <span className="font-serif font-bold text-3xl text-heritage-maroon/30 flex-shrink-0">
                {step.num}
              </span>
              <div className="space-y-1.5">
                <h3 className="font-serif font-bold text-lg text-stone-900">{step.title}</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </div>

            <Link
              to={step.link}
              className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-heritage-maroon hover:text-white text-stone-800 text-xs font-bold transition-colors whitespace-nowrap flex items-center gap-1.5 flex-shrink-0"
            >
              <span>{step.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}

