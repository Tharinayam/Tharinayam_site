import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Store, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  BookOpen, 
  Award, 
  ArrowRight,
  Instagram, 
  Facebook, 
  Youtube,
  Compass
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#1A070A] text-[#EDE4D5] border-t-2 border-[#D4AF37] overflow-hidden">
      
      {/* Decorative Gold Filigree Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      {/* 1. Regal Header Ribbon with Temple Kolam Crest */}
      <div className="border-b border-[#361318] py-8 px-4 sm:px-6 lg:px-8 bg-[#130406]/70 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#751525] to-[#3B070E] border border-heritage-gold/50 flex items-center justify-center text-heritage-gold font-serif text-xl font-bold shadow-lg">
              த
            </div>
            <div>
              <p className="font-serif font-bold text-base text-white tracking-wide">
                THARINAYAM <span className="font-tamil text-xs text-heritage-gold font-normal">| தறிநயம்</span>
              </p>
              <p className="text-xs text-[#B59F84] mt-0.5 max-w-lg">
                "From the sacred pit-looms of Tamil Nadu to the connoisseurs of eternal handloom art."
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <Link
              to="/heritage"
              className="text-[#D4AF37] hover:text-[#FFF1C2] transition-colors flex items-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Textile History</span>
            </Link>
            <span className="text-stone-700">•</span>
            <Link
              to="/discover-shops"
              className="text-[#D4AF37] hover:text-[#FFF1C2] transition-colors flex items-center gap-1"
            >
              <Store className="w-3.5 h-3.5" />
              <span>120+ Verified Societies</span>
            </Link>
          </div>

        </div>
      </div>

      {/* 2. Main 4-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Philosophy Box */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="font-serif font-bold text-lg text-white tracking-wider">
              THARINAYAM
            </h3>
            <p className="text-xs text-[#C5B39B] leading-relaxed">
              Dedicated to celebrating, documenting, and mapping the sacred handloom weaving arts of Kanchipuram, Madurai, Chettinad, Arani, and Salem.
            </p>
            <div className="pt-2 text-xs text-heritage-gold">
              <span className="font-tamil block">பாரம்பரிய கைத்தறியின் கம்பீரம்</span>
              <span className="text-[10px] text-stone-400">GI Tagged • Silk Mark Protected</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2 text-[#C5B39B]">
              <span className="p-2 rounded-xl bg-[#280B10] hover:text-heritage-gold hover:bg-[#381118] transition-all cursor-pointer">
                <Instagram className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-xl bg-[#280B10] hover:text-heritage-gold hover:bg-[#381118] transition-all cursor-pointer">
                <Facebook className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-xl bg-[#280B10] hover:text-heritage-gold hover:bg-[#381118] transition-all cursor-pointer">
                <Youtube className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div>
            <h4 className="font-serif text-xs font-bold text-heritage-gold uppercase tracking-[0.15em] mb-4 pb-1 border-b border-[#361318]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D1C3AF]">
              <li>
                <Link to="/collections" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>Saree Collections</span>
                </Link>
              </li>
              <li>
                <Link to="/guide" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>Fabric Guide</span>
                </Link>
              </li>
              <li>
                <Link to="/regional-guide" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>Regional Sarees</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>Loom Gallery</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Our Story */}
          <div>
            <h4 className="font-serif text-xs font-bold text-heritage-gold uppercase tracking-[0.15em] mb-4 pb-1 border-b border-[#361318]">
              Our Story
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D1C3AF]">
              <li>
                <Link to="/about" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/heritage" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>Our Heritage</span>
                </Link>
              </li>
              <li>
                <Link to="/mission" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>Our Mission</span>
                </Link>
              </li>
              <li>
                <Link to="/weavers" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>Weaver Stories</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Discover */}
          <div>
            <h4 className="font-serif text-xs font-bold text-heritage-gold uppercase tracking-[0.15em] mb-4 pb-1 border-b border-[#361318]">
              Discover
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D1C3AF]">
              <li>
                <Link to="/discover-shops" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>Local Shops</span>
                </Link>
              </li>
              <li>
                <Link to="/shops" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>Shop Directory</span>
                </Link>
              </li>
              <li>
                <Link to="/weavers" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>Our Weavers</span>
                </Link>
              </li>
              <li>
                <Link to="/ai-experience" className="text-purple-300 hover:text-white transition-colors flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>AI Experience</span>
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>How It Works</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Information */}
          <div>
            <h4 className="font-serif text-xs font-bold text-heritage-gold uppercase tracking-[0.15em] mb-4 pb-1 border-b border-[#361318]">
              Information
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D1C3AF]">
              <li>
                <Link to="/faqs" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>FAQs</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/for-vendors" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>For Vendors</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-heritage-gold transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold/40 group-hover:bg-heritage-gold transition-colors"></span>
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-heritage-gold hover:underline font-semibold block pt-1">
                  Website Sitemap (23 Pages) →
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* 3. Bottom Ornamental Filigree & Copyright */}
        <div className="mt-14 pt-8 border-t border-[#361318] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A89885]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            <span className="font-serif italic text-heritage-goldLight">
              THARINAYAM — The Elegance of the Loom
            </span>
          </div>

          <p className="text-center md:text-right">
            © {new Date().getFullYear()} THARINAYAM (தறிநயம்). Dedicated to preserving Tamil Nadu textile heritage.
          </p>
        </div>
      </div>
    </footer>
  );
}
