import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageSquare, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Send,
  MapPin,
  Clock
} from 'lucide-react';

const FAQS = [
  {
    q: "How do I know my saree is 100% pure silk and not synthetic?",
    a: "Every pure silk saree on THARINAYAM carries an official Silk Mark barcode certified by the Silk Mark Organisation of India (Ministry of Textiles). You can verify the batch code on the label or perform the burn test on loose weft threads."
  },
  {
    q: "What is the difference between Handloom and Powerloom sarees?",
    a: "Handloom sarees are woven manually on wooden pit or frame looms without electric motors, often taking between 12 to 28 days per drape. They feature natural organic grain, interlocking Korvai temple borders, and unique artisan nuances. Powerlooms are machine-driven, producing uniform lightweight weaves at higher speed."
  },
  {
    q: "Where will my saree be shipped from?",
    a: "Directly from the weaving society or local boutique in Kanchipuram, Madurai, Salem, Arani, or Karaikudi. There are no centralized intermediary warehouses."
  },
  {
    q: "Can I physically visit the shop or weaver society?",
    a: "Yes! THARINAYAM provides exact addresses, opening hours, direct phone numbers, and Google Map links for all verified societies and shops under our 'Discover Local Shops' directory."
  },
  {
    q: "What is your return and exchange policy?",
    a: "We offer a 7-day hassle-free return for unstitched sarees if you are not fully satisfied with the fabric quality, color representation, or handloom craftsmanship."
  },
  {
    q: "Does the AI Virtual Try-On show the exact final look?",
    a: "The AI Virtual Try-On simulator demonstrates realistic color harmony, border proportions, and pallu draping flow. Handloom textures possess organic artisanal variations, so minor natural differences may occur."
  }
];

export default function HelpCenter() {
  const [openFaq, setOpenFaq] = useState(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
          <span>Customer Support</span>
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          How Can We Help You?
        </h1>
        <p className="text-xs sm:text-sm text-stone-500">
          Frequently asked questions about handlooms, Silk Mark certifications, vendor shipping, and direct artisan orders.
        </p>
      </div>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-stone-800">WhatsApp Support</h4>
          <p className="text-xs text-stone-500">Instant answers for saree consultation</p>
          <a
            href="https://wa.me/919443218920"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-emerald-700 hover:underline block pt-1"
          >
            +91 94432 18920
          </a>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-amber-50 text-heritage-maroon flex items-center justify-center mx-auto">
            <Phone className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-stone-800">Phone Support</h4>
          <p className="text-xs text-stone-500">Mon - Sat, 9:30 AM to 7:00 PM</p>
          <a href="tel:+914424981234" className="text-xs font-bold text-heritage-maroon hover:underline block pt-1">
            +91 44 2498 1234
          </a>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center mx-auto">
            <Mail className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-stone-800">Email Inquiry</h4>
          <p className="text-xs text-stone-500">Bridal trousseau & vendor onboarding</p>
          <a href="mailto:support@tharinayam.com" className="text-xs font-bold text-purple-700 hover:underline block pt-1">
            support@tharinayam.com
          </a>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <h3 className="font-serif font-bold text-xl text-stone-900 pb-3 border-b border-stone-100">
          Frequently Asked Questions
        </h3>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="border border-stone-200 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-stone-800 hover:bg-stone-50"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${openFaq === idx ? 'rotate-180 text-heritage-maroon' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="p-4 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed bg-stone-50/50 border-t border-stone-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <h3 className="font-serif font-bold text-xl text-stone-900">
          Send Us a Message
        </h3>

        {contactSubmitted ? (
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2">
            <ShieldCheck className="w-8 h-8 text-emerald-700 mx-auto" />
            <h4 className="font-bold text-sm text-emerald-950">Thank you! Your inquiry has been sent.</h4>
            <p className="text-xs text-emerald-800">Our customer team or the local weaver society will connect with you within 4 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Your Name</label>
                <input required type="text" placeholder="Enter name" className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:outline-none focus:border-heritage-gold" />
              </div>
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Mobile / WhatsApp Number</label>
                <input required type="tel" placeholder="+91 ..." className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:outline-none focus:border-heritage-gold" />
              </div>
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Subject</label>
              <select className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:outline-none focus:border-heritage-gold">
                <option>Custom Bridal Saree Inquiry</option>
                <option>Order Status & Tracking</option>
                <option>Authenticity / Silk Mark Verification</option>
                <option>Sell on THARINAYAM / Weaver Onboarding</option>
                <option>General Feedback</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Your Message</label>
              <textarea required rows={4} placeholder="Describe your requirement or question..." className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:outline-none focus:border-heritage-gold"></textarea>
            </div>

            <button
              type="submit"
              className="bg-heritage-maroon hover:bg-heritage-maroonDark text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Submit Message</span>
            </button>
          </form>
        )}
      </div>

    </div>
  );
}

