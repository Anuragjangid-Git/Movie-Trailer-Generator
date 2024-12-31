import React from 'react';
import { Play, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from '../ui/CTAButton';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
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
            <CTAButton to="/signup" variant="primary" icon={<Play className="w-5 h-5" />}>
              Start Creating
            </CTAButton>
            <CTAButton variant="secondary" icon={<Wand2 className="w-5 h-5" />}>
              Watch Demo
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}