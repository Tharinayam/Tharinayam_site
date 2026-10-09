import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, MapPin, Heart, ArrowRight } from 'lucide-react';
import { WEAVERS_DATA } from '../data/weavers';

export default function WeaverStories() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div>
        <nav className="text-xs text-stone-500 mb-2 flex items-center gap-1.5">
          <Link to="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <Link to="/weavers" className="hover:text-stone-800">Our Weavers</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">Weaver Stories</span>
        </nav>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
          Voices from the Loom: Weaver Stories
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          Deep-dive chronicles into the daily lives, family apprenticeships, technical mastery, and cultural devotion of Tamil Nadu's traditional textile creators.
        </p>
      </div>

      {/* Stories List */}
      <div className="space-y-14">
        {WEAVERS_DATA.map((weaver, idx) => (
          <article
            key={weaver.id}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
              <div>
                <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider">
                  Story {idx + 1} • {weaver.origin}
                </span>
                <h2 className="font-serif font-bold text-2xl text-stone-900 mt-0.5">
                  {weaver.name} — Four Decades at the Pit-Loom
                </h2>
                <p className="font-tamil text-xs text-stone-500">{weaver.tamilName}</p>
              </div>

              <div className="flex items-center gap-2 text-xs text-amber-900 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200 self-start sm:self-auto">
                <Award className="w-4 h-4 text-heritage-gold" />
                <span>{weaver.experience}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200 shadow">
                <img src={weaver.coverImage} alt={weaver.name} className="w-full h-full object-cover" />
              </div>

              <div className="md:col-span-7 space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                <p>
                  {weaver.bio}
                </p>
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 italic text-stone-800">
                  "{weaver.craftMotto}"
                </div>
                <div className="pt-2 text-xs text-stone-500 space-y-1">
                  <p><strong className="text-stone-700">Loom Architecture:</strong> {weaver.loomType}</p>
                  <p><strong className="text-stone-700">Speciality:</strong> {weaver.speciality}</p>
                  <p><strong className="text-stone-700">Honours:</strong> {weaver.awards.join(' • ')}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}

