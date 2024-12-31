import React from 'react';
import { Menu, Film, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  if (isAuthPage) {
    return null;
  }

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Film className="w-8 h-8 text-red-500" />
            <span className="text-xl font-bold">TrailerAI</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="hover:text-red-500 transition-colors">Features</Link>
            <Link to="/examples" className="hover:text-red-500 transition-colors">Examples</Link>
            <Link to="/pricing" className="hover:text-red-500 transition-colors">Pricing</Link>
            <Link 
              to="/signup"
              className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-medium transition-colors"
            >
              Get Started
            </Link>
          </nav>

          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}