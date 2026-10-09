import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, Store } from 'lucide-react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-heritage-maroon uppercase tracking-widest">
          Get in Touch
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          Contact THARINAYAM
        </h1>
        <p className="text-xs sm:text-sm text-stone-600">
          Have an enquiry about a weaving cluster, interested in listing your weaver society, or looking for textile heritage information? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info (5 cols) */}
        <div className="md:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <h2 className="font-serif font-bold text-xl text-stone-900 pb-3 border-b border-stone-100">
            Platform Coordination Desk
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-stone-600">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-heritage-maroon flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-800">Flagship Centre & Heritage Archives</strong>
                <p>44, North Mada Street, Mylapore, Chennai, Tamil Nadu - 600004</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-heritage-maroon flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-800">Artisan Helpline & Coordination</strong>
                <p>+91 94432 18920 / +91 44 2498 1234</p>
                <span className="text-[11px] text-stone-400">Mon - Sat: 9:30 AM to 6:30 PM</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-heritage-maroon flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-800">Email Enquiries</strong>
                <p>info@tharinayam.org / contact@tharinayam.com</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
            <strong className="font-bold flex items-center gap-1.5">
              <Store className="w-4 h-4 text-heritage-maroon" /> Society Visits:
            </strong>
            <p className="leading-relaxed text-stone-600">
              For visiting specific weaver cooperative societies in Kanchipuram or Madurai, please refer directly to our <Link to="/shops" className="text-heritage-maroon font-bold underline">Shop Directory</Link>.
            </p>
          </div>
        </div>

        {/* Message Form (7 cols) */}
        <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <h2 className="font-serif font-bold text-xl text-stone-900">
            Send Us an Enquiry
          </h2>

          {submitted ? (
            <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-serif font-bold text-base text-emerald-950">Message Sent Successfully!</h3>
              <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                Thank you for reaching out. Our textile coordination team will respond to your email or WhatsApp within 24 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Your Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Meenakshi Sundaram"
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:outline-none focus:border-heritage-gold"
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="name@example.com"
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:outline-none focus:border-heritage-gold"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Nature of Enquiry</label>
                <select className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:outline-none focus:border-heritage-gold">
                  <option>General Saree Heritage Enquiry</option>
                  <option>Weaver / Society Directory Onboarding</option>
                  <option>Boutique Partnership</option>
                  <option>Academic / Textile Research</option>
                  <option>Feedback & Suggestions</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Your Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details of your inquiry or requirements..."
                  className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:outline-none focus:border-heritage-gold"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-heritage-maroon hover:bg-heritage-maroonDark text-white font-bold px-6 py-3 rounded-xl shadow transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}

