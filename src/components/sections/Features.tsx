import React from 'react';
import { Clock, Sparkles, Settings, BarChart } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

const features = [
  {
    icon: <Clock className="w-6 h-6 text-red-500" />,
    title: 'Time-Saving Process',
    description: 'Generate professional trailers in minutes, not days. Focus on what matters most - promotion and distribution.'
  },
  {
    icon: <Sparkles className="w-6 h-6 text-red-500" />,
    title: 'AI-Powered Magic',
    description: 'Our advanced AI analyzes your content to create engaging trailers that capture the essence of your movie.'
  },
  {
    icon: <Settings className="w-6 h-6 text-red-500" />,
    title: 'Customizable Output',
    description: 'Fine-tune every aspect of your trailer, from style and pacing to music and transitions.'
  },
  {
    icon: <BarChart className="w-6 h-6 text-red-500" />,
    title: 'Marketing Analytics',
    description: 'Track performance metrics and optimize your trailers for maximum audience engagement.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose TrailerAI?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI technology with professional video editing
            capabilities to revolutionize your trailer creation process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}