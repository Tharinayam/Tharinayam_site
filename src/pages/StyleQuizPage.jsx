import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  RotateCcw, 
  ShoppingBag, 
  Star,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { SAREES_DATA } from '../data/sarees';
import { useShop } from '../context/ShopContext';

export default function StyleQuizPage() {
  const { addToCart, setTryOnSaree } = useShop();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    occasion: 'Wedding',
    undertone: 'Warm Golden',
    fabric: 'Pure Mulberry Silk',
    heightFrame: 'Standard (5\'3" - 5\'6")',
    budget: 'mid-range'
  });
  const [showResults, setShowResults] = useState(false);

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setStep(1);
    setShowResults(false);
  };

  // AI Matching Logic
  const recommendedSarees = React.useMemo(() => {
    if (!showResults) return [];

    return SAREES_DATA.map((saree) => {
      let score = 0;
      let reason = [];

      // Occasion match
      if (saree.occasion.toLowerCase().includes(answers.occasion.toLowerCase().split(' ')[0])) {
        score += 30;
        reason.push(`Tailored specifically for ${answers.occasion}`);
      }

      // Fabric match
      if (saree.fabric.toLowerCase().includes(answers.fabric.toLowerCase().split(' ')[0])) {
        score += 25;
        reason.push(`Matches your preference for ${answers.fabric}`);
      }

      // Height / Border proportion logic
      if (answers.heightFrame.includes('Petite') && saree.borderType.includes('Temple')) {
        score += 15;
        reason.push("Temple rekku border creates vertical elongation for petite frames");
      } else if (answers.heightFrame.includes('Tall') && saree.borderType.includes('Broad')) {
        score += 15;
        reason.push("Broad heritage border commands graceful presence for taller frames");
      }

      // Undertone harmony
      if (answers.undertone.includes('Warm') && ['Red', 'Yellow', 'Maroon'].includes(saree.primaryColor)) {
        score += 20;
        reason.push(`Warm ${saree.primaryColor} brings out natural golden radiance`);
      } else if (answers.undertone.includes('Olive') && ['Green', 'Blue', 'Pink'].includes(saree.primaryColor)) {
        score += 20;
        reason.push(`Jewel-toned ${saree.primaryColor} complements neutral olive complexions`);
      }

      return { saree, score, reasonText: reason.join(' • ') };
    }).sort((a, b) => b.score - a.score).slice(0, 3);
  }, [showResults, answers]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>AI Style Assistant</span>
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          Find Your Perfect Saree Match
        </h1>
        <p className="text-xs sm:text-sm text-stone-600">
          Answer 5 quick styling questions to discover drapes curated for your silhouette, undertone, and celebration.
        </p>
      </div>

      {!showResults ? (
        /* Quiz Card */
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-md space-y-8">
          
          {/* Stepper Progress */}
          <div className="flex items-center justify-between border-b border-stone-100 pb-4 text-xs font-semibold text-stone-500">
            <span>Step {step} of 5</span>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <span
                  key={s}
                  className={`w-6 h-1.5 rounded-full transition-all ${
                    s <= step ? 'bg-heritage-maroon' : 'bg-stone-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Question 1: Occasion */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-serif font-bold text-xl text-stone-900">
                1. What is the occasion you are preparing for?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: "Wedding / Muhurtham", sub: "Grand traditional temple pattu, pure zari" },
                  { title: "Reception / Evening Party", sub: "Modern soft silk, lighter weight brocade" },
                  { title: "Temple Festival / Pooja", sub: "Auspicious yellows, Sungudi tie-dyes" },
                  { title: "Everyday Dignity / Office", sub: "Chettinad Kandangi, comfortable cottons" },
                ].map((opt) => (
                  <button
                    key={opt.title}
                    onClick={() => setAnswers({ ...answers, occasion: opt.title })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      answers.occasion === opt.title
                        ? 'border-heritage-maroon bg-amber-50/50 shadow-sm'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <p className="font-bold text-sm text-stone-800">{opt.title}</p>
                    <p className="text-xs text-stone-500 mt-0.5">{opt.sub}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 2: Skin Undertone */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-serif font-bold text-xl text-stone-900">
                2. Which best describes your skin undertone?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: "Warm Golden / Dusky", sub: "Glows with rich crimson, haldi yellow, temple green" },
                  { title: "Neutral Olive", sub: "Complemented by peacock blue, emerald, terracotta" },
                  { title: "Deep Earthy Dusky", sub: "Radiant in mustard, maroon, wine, and antique copper" },
                  { title: "Fair / Warm Peach", sub: "Flattered by ruby red, royal cobalt, pastel mint" },
                ].map((opt) => (
                  <button
                    key={opt.title}
                    onClick={() => setAnswers({ ...answers, undertone: opt.title })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      answers.undertone === opt.title
                        ? 'border-heritage-maroon bg-amber-50/50 shadow-sm'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <p className="font-bold text-sm text-stone-800">{opt.title}</p>
                    <p className="text-xs text-stone-500 mt-0.5">{opt.sub}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 3: Fabric Preference */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-serif font-bold text-xl text-stone-900">
                3. What fabric texture do you feel most comfortable wearing?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: "Pure Mulberry Silk", sub: "Heavier heirloom drape with ceremonial presence" },
                  { title: "Lightweight Soft Silk", sub: "Featherlight, easy pleats, wrinkle-resistant" },
                  { title: "Authentic Cotton (Sungudi / Kandangi)", sub: "Natural breathable comfort for tropical weather" },
                  { title: "Kora Cotton / Organza Sheer", sub: "Translucent structure with a subtle modern sheen" },
                ].map((opt) => (
                  <button
                    key={opt.title}
                    onClick={() => setAnswers({ ...answers, fabric: opt.title })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      answers.fabric === opt.title
                        ? 'border-heritage-maroon bg-amber-50/50 shadow-sm'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <p className="font-bold text-sm text-stone-800">{opt.title}</p>
                    <p className="text-xs text-stone-500 mt-0.5">{opt.sub}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 4: Height & Border Frame */}
          {step === 4 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-serif font-bold text-xl text-stone-900">
                4. What is your approximate height profile?
              </h3>
              <p className="text-xs text-stone-500">
                Helps determine whether medium temple borders or broad 8-inch borders flatter your drape proportion.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { title: "Petite (Under 5'3\")", sub: "Favors delicate 3-4 inch borders that elongate height" },
                  { title: "Standard (5'3\" - 5'6\")", sub: "Versatile with both medium and traditional borders" },
                  { title: "Tall (5'7\" and above)", sub: "Stunning with broad 8-12 inch temple korvai borders" },
                ].map((opt) => (
                  <button
                    key={opt.title}
                    onClick={() => setAnswers({ ...answers, heightFrame: opt.title })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      answers.heightFrame === opt.title
                        ? 'border-heritage-maroon bg-amber-50/50 shadow-sm'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <p className="font-bold text-sm text-stone-800">{opt.title}</p>
                    <p className="text-xs text-stone-500 mt-0.5">{opt.sub}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 5: Budget */}
          {step === 5 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-serif font-bold text-xl text-stone-900">
                5. What is your ideal investment range?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: "budget", title: "Under ₹5,000", sub: "Pure Sungudi cotton, Chettinad daily handlooms" },
                  { id: "mid-range", title: "₹5,000 - ₹20,000", sub: "Arani silks, Kora cottons, festive soft silks" },
                  { id: "bridal", title: "₹20,000 - ₹45,000+", sub: "Pure Kanchipuram bridal pattu with certified pure zari" },
                  { id: "all", title: "Show all prices", sub: "Curate based purely on aesthetic and craft harmony" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setAnswers({ ...answers, budget: opt.id })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      answers.budget === opt.id
                        ? 'border-heritage-maroon bg-amber-50/50 shadow-sm'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <p className="font-bold text-sm text-stone-800">{opt.title}</p>
                    <p className="text-xs text-stone-500 mt-0.5">{opt.sub}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-100">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="text-xs font-semibold text-stone-600 hover:text-stone-900"
              >
                ← Back
              </button>
            ) : <div />}

            <button
              onClick={handleNext}
              className="bg-heritage-maroon hover:bg-heritage-maroonDark text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-xl shadow-sm flex items-center gap-2 transition-all"
            >
              <span>{step === 5 ? 'Reveal My Recommendations' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      ) : (
        /* Results View */
        <div className="space-y-8 animate-fadeIn">
          <div className="flex items-center justify-between bg-amber-50/70 p-4 rounded-2xl border border-amber-200">
            <div>
              <p className="text-xs font-bold text-stone-800">Your Styling Profile:</p>
              <p className="text-xs text-stone-600 mt-0.5">
                {answers.occasion} • {answers.undertone.split('/')[0]} • {answers.fabric.split('/')[0]} • {answers.heightFrame.split('(')[0]}
              </p>
            </div>
            <button
              onClick={handleReset}
              className="text-xs font-bold text-heritage-maroon hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake Quiz
            </button>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif font-bold text-2xl text-stone-900">
              Top Handpicked Sarees for You ({recommendedSarees.length})
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedSarees.map(({ saree, score, reasonText }) => (
                <div
                  key={saree.id}
                  className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                      <img src={saree.images[0]} alt={saree.title} className="w-full h-full object-cover" />
                      <div className="absolute top-3 left-3 bg-purple-900/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-purple-300" />
                        <span>{score}% Match</span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <p className="text-[10px] uppercase font-bold text-heritage-maroon tracking-wider">
                        {saree.originHub} • {saree.fabric}
                      </p>
                      <h4 className="font-serif font-bold text-sm text-stone-900 line-clamp-2">
                        {saree.title}
                      </h4>
                      <p className="text-xs text-stone-700 font-bold">
                        ₹{saree.price.toLocaleString('en-IN')}
                      </p>

                      {/* Why AI Picked This Box */}
                      <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/80 text-[11px] text-amber-950 space-y-1">
                        <span className="font-bold flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-600" /> Why this fits you:
                        </span>
                        <p className="text-stone-600 leading-relaxed">{reasonText}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 space-y-2">
                    <button
                      onClick={() => {
                        setTryOnSaree(saree);
                        navigate('/ai-try-on');
                      }}
                      className="w-full py-2.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                      <span>Test Draping in AI Studio</span>
                    </button>
                    
                    <button
                      onClick={() => addToCart(saree, 1)}
                      className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

