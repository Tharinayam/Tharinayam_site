import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Sparkles, 
  Store
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Collections', path: '/collections' },
    { name: 'Weaving Heritage', path: '/heritage' },
    { name: 'Discover Shops', path: '/discover-shops' },
    { name: 'Our Weavers', path: '/weavers' },
    { name: 'AI Experience', path: '/ai-experience', highlight: true },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      
      {/* 1. Regal Top Heritage Notice Strip */}
      <div className="bg-[#2D060B] border-b border-[#52131C] text-[#E8D8B0] text-[11px] py-1 px-4 tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold animate-pulse"></span>
            <span className="font-serif tracking-widest uppercase text-heritage-goldLight">
              THARINAYAM • தறிநயம்
            </span>
            <span className="text-[#8E6534] hidden sm:inline">|</span>
            <span className="text-stone-300 text-[11px] hidden sm:inline">
              Tamil Nadu Handloom & Master Artisan Discovery
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/guide" className="hover:text-white transition-colors">
              Fabric Guide
            </Link>
            <span className="text-[#52131C]">•</span>
            <Link to="/regional-guide" className="hover:text-white transition-colors">
              7 Regional Hubs
            </Link>
            <span className="text-[#52131C]">•</span>
            <Link to="/for-vendors" className="text-heritage-gold hover:underline font-semibold">
              For Vendors
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar with Glassmorphic Luxury Blur */}
      <div className={`backdrop-blur-md transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#FAF8F5]/95 shadow-md border-[#E3D3BA]' 
          : 'bg-[#FAF8F5]/90 border-[#EFE7D8]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-6">
            
            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-800 hover:text-heritage-maroon hover:bg-stone-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Brand Identity / Royal Crest */}
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-[#721422] to-[#420A12] p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-[14px] border border-heritage-gold/40 flex items-center justify-center bg-[#540D18]">
                  <span className="font-serif font-bold text-heritage-gold text-2xl drop-shadow">
                    த
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-bold text-2xl tracking-[0.12em] text-[#3D0C13] group-hover:text-heritage-maroon transition-colors">
                    THARINAYAM
                  </span>
                  <span className="font-tamil text-xs text-[#8E6534] font-medium hidden sm:inline">
                    தறிநயம்
                  </span>
                </div>
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#A07A28] font-bold -mt-1">
                  The Elegance of the Loom
                </span>
              </div>
            </Link>


            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all group flex items-center gap-1.5 ${
                      link.highlight
                        ? 'bg-gradient-to-r from-purple-900/10 to-amber-900/10 text-purple-950 border border-purple-300/60 shadow-sm hover:border-purple-500'
                        : isActive
                        ? 'text-heritage-maroon font-bold bg-[#F4EFE6]/80'
                        : 'text-stone-700 hover:text-heritage-maroon hover:bg-white/60'
                    }`}
                  >
                    {link.highlight && (
                      <Sparkles className="w-3.5 h-3.5 text-purple-700 animate-pulseSubtle" />
                    )}
                    <span>{link.name}</span>

                    {/* Animated Gold Bottom Indicator */}
                    {!link.highlight && (
                      <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] bg-heritage-gold transition-all duration-300 rounded-full ${
                        isActive ? 'w-3/5' : 'w-0 group-hover:w-3/5'
                      }`} />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Explore Shops Button */}
            <div className="hidden sm:flex items-center">
              <Link
                to="/discover-shops"
                className="group relative overflow-hidden rounded-full p-[1px] focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#ECC86A] via-[#D4AF37] to-[#B89020] rounded-full transition-all duration-300 group-hover:opacity-90"></span>
                <span className="relative flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#3D0C13] text-heritage-gold text-xs font-bold tracking-wide transition-colors group-hover:bg-[#4E0E19]">
                  <Store className="w-3.5 h-3.5 text-heritage-gold" />
                  <span>Explore Shops</span>
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Mobile Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-stone-200 px-5 pt-4 pb-8 space-y-4 shadow-2xl animate-slideUpFade">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <span className="text-[10px] font-bold text-[#8E6534] uppercase tracking-widest">
              Directory & Navigation
            </span>
            <span className="text-[11px] text-stone-400">தறிநயம் வலைப்பக்கம்</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`p-3 rounded-2xl border transition-all flex items-center gap-2 ${
                  location.pathname === link.path
                    ? 'border-heritage-maroon bg-amber-50/70 text-heritage-maroon font-bold shadow-sm'
                    : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                }`}
              >
                {link.highlight && <Sparkles className="w-3.5 h-3.5 text-purple-600" />}
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              to="/guide"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl border border-stone-200 text-stone-700 hover:bg-stone-50"
            >
              Weaving Guide
            </Link>
            <Link
              to="/regional-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl border border-stone-200 text-stone-700 hover:bg-stone-50"
            >
              Regional Saree Guide
            </Link>
            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl border border-stone-200 text-stone-700 hover:bg-stone-50"
            >
              Photo Gallery
            </Link>
            <Link
              to="/sitemap"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl border border-stone-200 text-stone-700 hover:bg-stone-50"
            >
              Sitemap (23 Pages)
            </Link>
            <Link
              to="/for-vendors"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl bg-gradient-to-r from-[#540D18] to-[#36060c] text-heritage-gold font-bold col-span-2 text-center shadow-md"
            >
              For Vendors & Weavers Onboarding
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
