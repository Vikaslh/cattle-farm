import React, { useState } from 'react';
import AnimalCard, { Animal } from './AnimalCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const animals: Animal[] = [
  {
    type: 'Sheep',
    image: 'https://images.pexels.com/photos/2219840/pexels-photo-2219840.jpeg',
    description: 'Premium quality sheep with excellent breeding lines',
    available: 15,
    price: '₹8,000 - ₹15,000',
    care: '₹2,000/month',
  },
  {
    type: 'Goats',
    image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg',
    description: 'Hardy goats perfect for milk production and breeding',
    available: 22,
    price: '₹5,000 - ₹12,000',
    care: '₹1,800/month',
  },
  {
    type: 'Chickens',
    image: 'https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg',
    description: 'Free-range chickens and premium egg layers',
    available: 50,
    price: '₹300 - ₹800',
    care: '₹200/month',
  },
  {
    type: 'Milk',
    image: 'https://images.pexels.com/photos/416656/pexels-photo-416656.jpeg',
    description: 'Fresh farm milk, available daily',
    available: 100,
    price: '₹60/litre',
    care: 'N/A',
  },
];

const AnimalsSection: React.FC = () => {
  const [currentAnimal, setCurrentAnimal] = useState(0);

  const nextAnimal = () => setCurrentAnimal((prev) => (prev + 1) % animals.length);
  const prevAnimal = () => setCurrentAnimal((prev) => (prev - 1 + animals.length) % animals.length);

  return (
    <section id="animals" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-800 mb-4">Our Premium Livestock</h2>
          <p className="text-lg text-forest-600 max-w-2xl mx-auto">
            Discover our carefully bred and lovingly cared for animals, available for purchase or monthly care services.
          </p>
        </div>
        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <AnimalCard animal={animals[currentAnimal]} />
          <div className="flex justify-between mt-4">
            <button
              onClick={prevAnimal}
              className="bg-forest-600 hover:bg-forest-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextAnimal}
              className="bg-forest-600 hover:bg-forest-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {animals.map((animal, index) => (
            <AnimalCard key={index} animal={animal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimalsSection; 