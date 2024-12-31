import React from 'react';
import { Play, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Create Stunning Movie Trailers with{' '}
            <span className="text-red-500">AI</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transform your movie content into captivating trailers automatically.
            Save time, boost engagement, and streamline your marketing workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup"
              className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors w-full sm:w-auto"
            >
              <Play className="w-5 h-5" />
              Start Creating
            </Link>
            <button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors w-full sm:w-auto">
              <Wand2 className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}