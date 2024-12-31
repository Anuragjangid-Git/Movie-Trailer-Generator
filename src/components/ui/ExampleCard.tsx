import React from 'react';
import { Play } from 'lucide-react';

interface ExampleCardProps {
  title: string;
  thumbnail: string;
  duration: string;
}

export default function ExampleCard({ title, thumbnail, duration }: ExampleCardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg">
      <img 
        src={thumbnail} 
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full">
          <Play className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black text-white">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">{duration}</p>
      </div>
    </div>
  );
}