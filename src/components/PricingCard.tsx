'use client'

import React from 'react'

export interface PricingPlan {
  title: string
  price: string
  features: string[]
  popular?: boolean
}

interface PricingCardProps {
  plan: PricingPlan
  isPopular?: boolean
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isPopular }) => (
  <div className={`bg-white rounded-lg p-8 shadow-lg${isPopular ? ' border-2 border-forest-600 relative' : ''}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-forest-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
        Popular
      </div>
    )}
    <h3 className="text-2xl font-bold text-forest-800 mb-4">{plan.title}</h3>
    <div className="text-3xl font-bold text-forest-600 mb-6">{plan.price}<span className="text-lg font-normal">/month</span></div>
    <ul className="space-y-3 text-forest-700 mb-8">
      {plan.features.map((feature, idx) => (
        <li key={idx}>• {feature}</li>
      ))}
    </ul>
    <button className="w-full bg-forest-600 hover:bg-forest-700 text-white py-3 rounded-lg font-semibold transition-colors">
      {plan.title === 'Barn Rental' ? 'Inquire Now' : 'Choose Plan'}
    </button>
  </div>
)

export default PricingCard