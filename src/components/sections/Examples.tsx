import React from 'react';
import { Play } from 'lucide-react';
import ExampleCard from '../ui/ExampleCard';

const examples = [
  {
    title: "Action-Packed Thriller",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    duration: "2:15"
  },
  {
    title: "Romantic Comedy",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    duration: "1:45"
  },
  {
    title: "Sci-Fi Adventure",
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80",
    duration: "2:30"
  }
];

export default function Examples() {
  return (
    <section id="examples" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Example Trailers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how TrailerAI transforms movies into compelling trailers across different genres.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <ExampleCard key={index} {...example} />
          ))}
        </div>
      </div>
    </section>
  );
}