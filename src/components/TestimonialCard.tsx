'use client'

import React from 'react'

export interface Testimonial {
  name: string
  rating: number
  text: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
  renderStars: (rating: number) => React.ReactNode
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, renderStars }) => (
  <div className="bg-cream-50 rounded-lg p-8 shadow-lg text-center">
    <div className="flex justify-center mb-4">
      {renderStars(testimonial.rating)}
    </div>
    <p className="text-lg text-forest-700 mb-6 italic leading-relaxed">
      &quot;{testimonial.text}&quot;
    </p>
    <p className="text-forest-800 font-semibold">
      {testimonial.name}
    </p>
  </div>
)

export default TestimonialCard