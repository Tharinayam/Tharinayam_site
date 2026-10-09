import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-amber-50 text-heritage-maroon mx-auto flex items-center justify-center">
        <Compass className="w-10 h-10" />
      </div>
      <span className="text-xs font-bold text-heritage-maroon uppercase tracking-widest">Error 404</span>
      <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900">
        Page Not Found
      </h1>
      <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
        The handloom weave or page you are looking for has moved or does not exist. Let us take you back to our curated saree collections.
      </p>
      <div className="pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-heritage-maroon hover:bg-heritage-maroonDark text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow transition-colors"
        >
          <span>Return to Homepage</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

