import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-forest-900 text-cream-200 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Nayaab Cattle Farm</h3>
          <p className="text-cream-300 mb-4">
            Your trusted partner for premium livestock care and horse riding education in the countryside.
          </p>
          <div className="flex space-x-4">
            <a href="https://wa.me/919591611088" className="text-cream-400 hover:text-cream-200">
              <MessageCircle className="h-6 w-6" />
            </a>
            <a href="tel:+919591611088" className="text-cream-400 hover:text-cream-200">
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="text-cream-300 hover:text-cream-100">About Us</a></li>
            <li><a href="#animals" className="text-cream-300 hover:text-cream-100">Our Animals</a></li>
            <li><a href="#academy" className="text-cream-300 hover:text-cream-100">Horse Academy</a></li>
            <li><a href="#pricing" className="text-cream-300 hover:text-cream-100">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-cream-300">
            <li>Livestock Care & Boarding</li>
            <li>Horse Riding Lessons</li>
            <li>Animal Purchase & Sales</li>
            <li>Barn Rental Services</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-700 mt-8 pt-8 text-center">
        <p className="text-cream-400">&copy; 2025 Nayaab Cattle Farm. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 