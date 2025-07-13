import React, { useState } from 'react';
import TestimonialCard, { Testimonial } from './TestimonialCard';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    name: 'Priya S.',
    rating: 5,
    text: 'Excellent care for our livestock. The team at Nayaab is professional and truly loves animals. Highly recommend their boarding services!'
  },
  {
    name: 'Rajesh M.',
    rating: 5,
    text: 'My daughter has been taking horse riding lessons here for 6 months. The instructors are patient and skilled. Great facility!'
  },
  {
    name: 'Anita K.',
    rating: 4,
    text: 'Purchased healthy goats from Nayaab. Fair pricing and the animals were well-cared for. Will definitely return.'
  },
  {
    name: 'Vikram P.',
    rating: 5,
    text: 'The barn rental service is fantastic. Our cattle are in safe hands and the monthly care is worth every rupee.'
  }
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
    />
  ));
};

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-800 mb-4">What Our Customers Say</h2>
          <div className="flex justify-center mb-4">
            {renderStars(5)}
          </div>
          <p className="text-lg text-forest-600">Trusted by families and animal lovers across the region</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <TestimonialCard testimonial={testimonials[currentTestimonial]} renderStars={renderStars} />
          <div className="flex justify-between mt-6">
            <button
              onClick={prevTestimonial}
              className="bg-forest-600 hover:bg-forest-700 text-white p-3 rounded-full transition-colors shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-forest-600 hover:bg-forest-700 text-white p-3 rounded-full transition-colors shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 