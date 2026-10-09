import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, Phone, Mail, ArrowRight } from 'lucide-react';

const FAQ_LIST = [
  {
    q: "What is THARINAYAM (தறிநயம்)?",
    a: "THARINAYAM is an open informational and discovery platform dedicated to celebrating Tamil Nadu's indigenous handloom weaving heritage. We provide educational guides on weaves, fabrics, and sacred motifs, while mapping registered weaver cooperative societies and authentic local boutiques."
  },
  {
    q: "Does THARINAYAM sell sarees directly or charge commissions?",
    a: "No! THARINAYAM does not take online payments, manage shopping carts, or collect commissions. We provide direct contact information, phone numbers, and physical shop addresses so you can connect directly with the weavers and shops yourself."
  },
  {
    q: "How can I purchase a saree featured on THARINAYAM?",
    a: "Every saree on our collections page lists the weaver society or local shop where it is created. You can click on the shop's profile to find their address, phone number, and visiting hours, and contact them directly to place an order or visit in person."
  },
  {
    q: "How can I verify if a saree has authentic Silk Mark or GI tag?",
    a: "Every authentic pure silk saree woven in registered cooperative societies carries a Silk Mark barcode label issued by the Central Silk Board. You can ask the shop to show you the certification label or perform a thread burn test on unstitched weft fringes."
  },
  {
    q: "How can a weaver cooperative or boutique get listed on THARINAYAM?",
    a: "We welcome all authentic weavers' cooperative societies, Khadi boards, and generational handloom boutique owners in Tamil Nadu. Listing is free. Visit our 'For Vendors' page or submit an inquiry through our Contact page."
  },
  {
    q: "What is the AI Virtual Try-On feature on this website?",
    a: "Our AI Virtual Try-On is an educational concept demonstration showing how spatial computer vision and colorimetry can help brides and saree lovers visualize color harmony and border proportions across different silhouettes."
  }
];

export default function FAQs() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-heritage-maroon uppercase tracking-widest">
          Frequently Asked Questions
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          Platform FAQs & Answers
        </h1>
        <p className="text-xs sm:text-sm text-stone-600">
          Everything you need to know about navigating THARINAYAM, discovering local shops, and understanding handloom authenticity.
        </p>
      </div>

      {/* Accordion List */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-4">
        {FAQ_LIST.map((faq, idx) => (
          <div
            key={idx}
            className="border border-stone-200 rounded-2xl overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-stone-900 hover:bg-stone-50"
            >
              <span>{faq.q}</span>
              <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${openFaq === idx ? 'rotate-180 text-heritage-maroon' : ''}`} />
            </button>
            {openFaq === idx && (
              <div className="p-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed bg-stone-50/50 border-t border-stone-100">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Help box */}
      <div className="p-8 rounded-3xl bg-[#FAF7F0] border-2 border-heritage-gold flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-serif font-bold text-lg text-stone-900">Have a question not answered here?</h3>
          <p className="text-stone-600">Connect with our textile coordinator team or reach out to local societies.</p>
        </div>
        <Link
          to="/contact"
          className="bg-heritage-maroon hover:bg-heritage-maroonDark text-white font-bold px-6 py-3 rounded-xl shadow transition-colors flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>Contact Us</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}

