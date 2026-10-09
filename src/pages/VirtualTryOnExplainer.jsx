import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, ShieldAlert, Layers, Sliders, ArrowRight } from 'lucide-react';
import { SAREES_DATA } from '../data/sarees';

export default function VirtualTryOnExplainer() {
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const [selectedSaree, setSelectedSaree] = useState(SAREES_DATA[0]);

  const AVATARS = [
    { name: "Model Priya (Warm Golden)", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80" },
    { name: "Model Meera (Neutral Olive)", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80" },
    { name: "Model Deepa (Dusky Rich)", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <Link to="/ai-experience" className="hover:text-stone-800">AI Experience</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Virtual Saree Try-On</span>
        </nav>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          How Virtual Saree Try-On Works
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          Unlike western garments with fixed seam cuts, a saree is a 6-yard seamless canvas. Here is how advanced spatial computer vision models simulate authentic drapes.
        </p>
      </div>

      {/* 4-Step Technical Explainer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
          <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-xs">
            01
          </span>
          <h3 className="font-serif font-bold text-base text-stone-900">Pose & Mesh Estimation</h3>
          <p className="text-stone-600 leading-relaxed text-xs">
            Neural networks detect the wearer's shoulder tilt, waistline, height proportions, and stance to create a 3D bodily armature.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
          <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-xs">
            02
          </span>
          <h3 className="font-serif font-bold text-base text-stone-900">Fabric Texture Extraction</h3>
          <p className="text-stone-600 leading-relaxed text-xs">
            High-resolution capture of authentic Kanchipuram mulberry silk fibers, metallic gold zari reflection, and cotton grain weave.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
          <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-xs">
            03
          </span>
          <h3 className="font-serif font-bold text-base text-stone-900">Drape & Pleat Simulation</h3>
          <p className="text-stone-600 leading-relaxed text-xs">
            Physical cloth gravity solvers replicate the natural drop of the Nivi pleats, shoulder pin tension, and flowing pallu fall.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
          <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-xs">
            04
          </span>
          <h3 className="font-serif font-bold text-base text-stone-900">Lighting & Tone Match</h3>
          <p className="text-stone-600 leading-relaxed text-xs">
            Colorimetry algorithms harmonize natural daylight and ambient shadows with the wearer's specific skin undertone.
          </p>
        </div>
      </div>

      {/* Interactive Concept Simulator (Explainer Demo) */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">Concept Demo</span>
          <h2 className="font-serif font-bold text-2xl text-stone-900 mt-0.5">
            Interactive Draping Preview Prototype
          </h2>
          <p className="text-xs text-stone-500">
            Select an avatar and choose a saree weave to test visual alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase block">1. Select Sample Silhouette</label>
              <div className="flex gap-2">
                {AVATARS.map((av, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedAvatar(idx)}
                    className={`p-1.5 rounded-xl border text-left transition-all ${
                      selectedAvatar === idx ? 'border-purple-600 ring-2 ring-purple-200' : 'border-stone-200'
                    }`}
                  >
                    <img src={av.image} alt={av.name} className="w-14 h-14 object-cover rounded-lg" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase block">2. Select Saree Weave</label>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {SAREES_DATA.slice(0, 4).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSaree(s)}
                    className={`w-14 h-16 rounded-xl overflow-hidden border flex-shrink-0 ${
                      selectedSaree.id === s.id ? 'border-purple-600 ring-2 ring-purple-200' : 'border-stone-200 opacity-70'
                    }`}
                  >
                    <img src={s.images[0]} alt={s.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1">
              <strong className="block text-stone-900">{selectedSaree.title}</strong>
              <p className="text-stone-500">{selectedSaree.originHub} • {selectedSaree.fabric}</p>
              <p className="text-emerald-700 font-semibold pt-1">Estimated Drape Harmony: 96% Match</p>
            </div>
          </div>

          {/* Canvas Render Preview */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 max-w-sm w-full aspect-[4/5] shadow-xl">
              <img
                src={selectedSaree.images[0]}
                alt="Virtual Draping Simulation"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-purple-900/90 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow">
                <Sparkles className="w-3 h-3 text-purple-300" />
                <span>Simulated Drape: {AVATARS[selectedAvatar].name.split(' ')[1]}</span>
              </div>
              <div className="absolute bottom-3 inset-x-3 p-3 bg-black/80 backdrop-blur-md rounded-xl text-white text-xs">
                <p className="font-bold truncate">{selectedSaree.title}</p>
                <p className="text-[11px] text-stone-300">Border: {selectedSaree.borderType}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Advisory Note:</strong> Virtual try-on provides visual assistance for color harmony and border width proportions. Actual handloom textures have natural artisan variations that can only be fully experienced in person.
          </p>
        </div>
      </div>

    </div>
  );
}

