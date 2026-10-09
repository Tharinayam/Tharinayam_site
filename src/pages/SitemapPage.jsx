import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, BookOpen, Store, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export default function SitemapPage() {
  const SITEMAP_GROUPS = [
    {
      group: "1. Main Overview Pages",
      icon: BookOpen,
      links: [
        { name: "1. Home", path: "/", desc: "Brand introduction, featured collections & heritage highlight" },
        { name: "2. About THARINAYAM", path: "/about", desc: "Vision, mission, and commitment to textile heritage" },
        { name: "3. Our Heritage", path: "/heritage", desc: "Tamil Nadu weaving history, techniques, and traditions" },
        { name: "4. Saree Collections", path: "/collections", desc: "Pattu, cotton, handloom, and powerloom drapes" },
        { name: "5. Weaving & Fabrics Guide", path: "/guide", desc: "Handloom vs powerloom, zari styles, and glossary" }
      ]
    },
    {
      group: "2. Shops, Weavers & Discovery",
      icon: Store,
      links: [
        { name: "6. Discover Local Shops", path: "/discover-shops", desc: "Shops organized by city and area across Tamil Nadu" },
        { name: "7. Shop Directory", path: "/shops", desc: "Comprehensive index of participating saree shops" },
        { name: "8. Shop Profile", path: "/shops/kanchi-kamatchi-silks", desc: "Shop introduction, address, specialities, and gallery" },
        { name: "9. Meet Our Weavers", path: "/weavers", desc: "Featured master artisans and pit-loom craftsmen" },
        { name: "10. Weaver Stories", path: "/weaver-stories", desc: "In-depth artisan profiles, techniques, and lineage" },
        { name: "11. Regional Saree Guide", path: "/regional-guide", desc: "Kanchipuram, Madurai, Arani, Salem, and Chettinad hubs" },
        { name: "12. The Loom Gallery", path: "/gallery", desc: "Visual photography archive of sarees and weaving processes" }
      ]
    },
    {
      group: "3. AI & Innovation (Informational)",
      icon: Sparkles,
      links: [
        { name: "13. AI Style Experience", path: "/ai-experience", desc: "Introduction to AI-assisted saree discovery" },
        { name: "14. Virtual Saree Try-On", path: "/virtual-try-on", desc: "How virtual draping technology works & concept demo" },
        { name: "15. Personalised Recommendations", path: "/recommendations", desc: "Preference-based discovery by undertone and height" },
        { name: "16. How It Works", path: "/how-it-works", desc: "5-step visitor journey through THARINAYAM" }
      ]
    },
    {
      group: "4. Brand & Information Pages",
      icon: ShieldCheck,
      links: [
        { name: "17. Our Mission", path: "/mission", desc: "Supporting weavers, preserving handlooms, and community empowerment" },
        { name: "18. For Vendors & Weavers", path: "/for-vendors", desc: "Benefits of joining the open directory for local sellers" },
        { name: "19. FAQs", path: "/faqs", desc: "Frequently asked questions and authenticity answers" },
        { name: "20. Contact Us", path: "/contact", desc: "General enquiries, research collaboration, and coordination desk" },
        { name: "21. Privacy Policy", path: "/privacy-policy", desc: "Data handling and privacy guidelines" },
        { name: "22. Terms & Conditions", path: "/terms", desc: "Website usage terms and intellectual property policy" },
        { name: "23. Website Sitemap", path: "/sitemap", desc: "Public link tree of all 23 website pages" }
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header */}
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Sitemap</span>
        </nav>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          THARINAYAM Public Website Sitemap
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Complete structured index of all 23 public informational and discovery pages across our platform.
        </p>
      </div>

      {/* Groups */}
      <div className="space-y-8">
        {SITEMAP_GROUPS.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.group} className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100">
                <Icon className="w-5 h-5 text-heritage-maroon" />
                <h2 className="font-serif font-bold text-lg text-stone-900">{group.group}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="p-4 rounded-2xl bg-stone-50 hover:bg-amber-50/60 border border-stone-200 hover:border-amber-300 transition-all space-y-1 block group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-heritage-maroon transition-colors">
                        {link.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-heritage-maroon group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-[11px] text-stone-500 line-clamp-1">{link.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

