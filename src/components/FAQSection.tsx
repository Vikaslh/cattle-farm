import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What's included in the monthly care service?",
    answer: "Our monthly care includes daily feeding with premium nutrition, fresh water supply, regular health monitoring, basic veterinary care, secure shelter, and emergency support. We treat every animal as if it were our own."
  },
  {
    question: "Are your horses suitable for beginner riders?",
    answer: "Absolutely! We have specially trained, gentle horses that are perfect for beginners. Our instructors ensure a safe, comfortable learning environment for riders of all ages and experience levels."
  },
  {
    question: "Can I visit my animals anytime?",
    answer: "Yes, you can visit your animals during our operating hours (6:00 AM - 7:00 PM daily). We encourage owners to visit regularly and maintain a bond with their livestock."
  },
  {
    question: "What safety measures do you have in place?",
    answer: "We maintain strict safety protocols including 24/7 surveillance, veterinary partnerships, emergency response procedures, and comprehensive insurance coverage for all animals under our care."
  },
  {
    question: "Do you provide transportation for purchased animals?",
    answer: "Yes, we offer safe transportation services for purchased livestock within a 100km radius. Additional charges apply based on distance and number of animals."
  },
];

const FAQSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-forest-800 mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-forest-600">
          Everything you need to know about our services and farm operations.
        </p>
      </div>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-cream-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-forest-800 mb-3">{faq.question}</h3>
            <p className="text-forest-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection; 