import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Privacy Policy</span>
        </nav>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">Last Updated: October 2026</p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif font-bold text-base text-stone-900">1. Overview</h2>
          <p>
            THARINAYAM operates strictly as an open informational and discovery website. We respect and honor the privacy of every visitor exploring our textile guides, directories, and weaver profiles.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-base text-stone-900">2. Information Collection</h2>
          <p>
            Because THARINAYAM does not process commercial transactions, user registrations, credit card payments, or shopping carts, we do not store financial credentials or sensitive personal identifiers. Any contact details voluntarily submitted via our Contact form are used strictly for corresponding with your inquiry.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-base text-stone-900">3. Third-Party Links & Local Shops</h2>
          <p>
            Our website provides phone numbers, addresses, and external mapping references to verified local shops and weavers' cooperative societies. When you contact or visit these third-party shops directly, your interactions are governed by their respective direct customer service practices.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-base text-stone-900">4. Contact & Inquiries</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to have your shop details updated or removed from our public directory, please email us at <span className="font-semibold text-stone-800">privacy@tharinayam.org</span>.
          </p>
        </section>
      </div>
    </div>
  );
}

