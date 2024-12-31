import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Examples from '../components/sections/Examples';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <Examples />
    </div>
  );
}