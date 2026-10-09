import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// 1. Main Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurHeritage from './pages/OurHeritage';
import SareeCollections from './pages/SareeCollections';
import WeavingGuide from './pages/WeavingGuide';

// 2. Shops, Weavers and Discovery Pages
import DiscoverShops from './pages/DiscoverShops';
import ShopDirectory from './pages/ShopDirectory';
import ShopProfile from './pages/ShopProfile';
import MeetOurWeavers from './pages/MeetOurWeavers';
import WeaverStories from './pages/WeaverStories';
import RegionalSareeGuide from './pages/RegionalSareeGuide';
import Gallery from './pages/Gallery';

// 3. AI and Innovation Pages
import AIStyleExperience from './pages/AIStyleExperience';
import VirtualTryOnExplainer from './pages/VirtualTryOnExplainer';
import PersonalisedRecommendations from './pages/PersonalisedRecommendations';
import HowItWorks from './pages/HowItWorks';

// 4. Brand and Information Pages
import OurMission from './pages/OurMission';
import ForVendors from './pages/ForVendors';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import SitemapPage from './pages/SitemapPage';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 selection:bg-amber-100 selection:text-heritage-maroon">
      <ScrollToTop />
      
      {/* High-End Regal Header */}
      <Navbar />

      {/* Main Public Content with Smooth Page-Change Fade/Slide Animation */}
      <main className="flex-1">
        <div key={location.pathname} className="animate-slideUpFade">
          <Routes location={location}>
            {/* 1. Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/heritage" element={<OurHeritage />} />
            <Route path="/our-story" element={<OurHeritage />} />
            <Route path="/collections" element={<SareeCollections />} />
            <Route path="/categories/:slug" element={<SareeCollections />} />
            <Route path="/guide" element={<WeavingGuide />} />

            {/* 2. Shops, Weavers and Discovery */}
            <Route path="/discover-shops" element={<DiscoverShops />} />
            <Route path="/shops" element={<ShopDirectory />} />
            <Route path="/shops/:slug" element={<ShopProfile />} />
            <Route path="/weavers" element={<MeetOurWeavers />} />
            <Route path="/weavers/:slug" element={<WeaverStories />} />
            <Route path="/weaver-stories" element={<WeaverStories />} />
            <Route path="/regional-guide" element={<RegionalSareeGuide />} />
            <Route path="/gallery" element={<Gallery />} />

            {/* 3. AI and Innovation (Informational) */}
            <Route path="/ai-experience" element={<AIStyleExperience />} />
            <Route path="/virtual-try-on" element={<VirtualTryOnExplainer />} />
            <Route path="/ai-try-on" element={<VirtualTryOnExplainer />} />
            <Route path="/recommendations" element={<PersonalisedRecommendations />} />
            <Route path="/style-quiz" element={<PersonalisedRecommendations />} />
            <Route path="/how-it-works" element={<HowItWorks />} />

            {/* 4. Brand and Information Pages */}
            <Route path="/mission" element={<OurMission />} />
            <Route path="/for-vendors" element={<ForVendors />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/help" element={<FAQs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/sitemap" element={<SitemapPage />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      {/* High-End Regal Footer */}
      <Footer />
    </div>
  );
}
