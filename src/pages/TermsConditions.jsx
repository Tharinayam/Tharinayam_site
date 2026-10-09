import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ShieldAlert } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Terms & Conditions</span>
        </nav>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          Terms & Conditions of Use
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">Effective Date: October 2026</p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif font-bold text-base text-stone-900">1. Acceptance of Terms</h2>
          <p>
            By accessing and viewing THARINAYAM, you acknowledge that this website is provided as an open educational and directory resource. The content is designed to promote Tamil Nadu's traditional textile legacy and facilitate direct connections with master weavers and local shops.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-base text-stone-900">2. Informational Disclaimer</h2>
          <p>
            THARINAYAM is not a merchant of record, e-commerce broker, or payment processor. All product photos, technical specifications, and shop details represent reference information curated from participating weaver societies and boutiques. Any purchase made directly with a shop or society is a private transaction between the buyer and that entity.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-base text-stone-900">3. Handloom Variations & Organic Artistry</h2>
          <p>
            Visitors are reminded that genuine handloom sarees are woven manually on pit and frame looms. Minor variations in yarn tension, natural slubs, vegetable dye tones, and handmade petni borders are authentic hallmarks of human handcraft and should not be viewed as machine imperfections.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-base text-stone-900">4. Intellectual Property & GI Tags</h2>
          <p>
            Geographical Indication (GI) tags such as Kanchipuram Silk, Madurai Sungudi, and Chettinad Kandangi belong to their respective registered artisan societies under the Geographical Indications of Goods Act, 1999.
          </p>
        </section>
      </div>
    </div>
  );
}

