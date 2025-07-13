import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-forest-800">Nayaab Cattle Farm</h1>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('home')} className="text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('animals')} className="text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Animals</button>
              <button onClick={() => scrollToSection('academy')} className="text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Academy</button>
              <button onClick={() => scrollToSection('pricing')} className="text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</button>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-forest-700 hover:text-forest-900 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }} className="block text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-base font-medium w-full text-left">Home</button>
            <button onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} className="block text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-base font-medium w-full text-left">About</button>
            <button onClick={() => { scrollToSection('animals'); setIsMenuOpen(false); }} className="block text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-base font-medium w-full text-left">Animals</button>
            <button onClick={() => { scrollToSection('academy'); setIsMenuOpen(false); }} className="block text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-base font-medium w-full text-left">Academy</button>
            <button onClick={() => { scrollToSection('pricing'); setIsMenuOpen(false); }} className="block text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-base font-medium w-full text-left">Pricing</button>
            <button onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} className="block text-forest-700 hover:text-forest-900 px-3 py-2 rounded-md text-base font-medium w-full text-left">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 