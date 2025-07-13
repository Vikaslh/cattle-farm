import React from 'react';
import PricingCard, { PricingPlan } from './PricingCard';

const pricingPlans: PricingPlan[] = [
  {
    title: 'Basic Care',
    price: '₹1,500',
    features: [
      'Daily feeding & watering',
      'Basic shelter & protection',
      'Weekly health checks',
      'Emergency care included',
    ],
  },
  {
    title: 'Premium Care',
    price: '₹2,500',
    features: [
      'Everything in Basic Care',
      'Premium nutrition & supplements',
      'Bi-weekly veterinary visits',
      'Grooming services',
      '24/7 monitoring',
    ],
    popular: true,
  },
  {
    title: 'Barn Rental',
    price: '₹5,000',
    features: [
      'Private barn space',
      'Your own livestock area',
      'Full care services',
      'Equipment storage',
      '24/7 farm access',
    ],
  },
];

const PricingSection: React.FC = () => (
  <section id="pricing" className="py-20 bg-cream-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-forest-800 mb-4">Pricing & Care Plans</h2>
        <p className="text-lg text-forest-600 max-w-2xl mx-auto">
          Transparent pricing for all our services, from livestock purchase to monthly care plans.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan, idx) => (
          <PricingCard key={plan.title} plan={plan} isPopular={!!plan.popular} />
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection; 