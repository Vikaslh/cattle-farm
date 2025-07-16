'use client'

import React from 'react'

const AboutSection: React.FC = () => (
  <section id="about" className="py-20 bg-cream-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-forest-800 mb-6">About Nayaab Cattle Farm</h2>
          <p className="text-lg text-forest-700 mb-6 leading-relaxed">
            For over two decades, Nayaab Cattle Farm has been a trusted name in premium livestock care and horse riding education. Located in the pristine countryside, our farm spans 50 acres of lush green pastures where animals roam freely and live in harmony with nature.
          </p>
          <p className="text-lg text-forest-700 mb-6 leading-relaxed">
            We specialize in breeding and caring for high-quality livestock including sheep, cows, goats, and chickens. Our horse riding academy offers professional training for all skill levels, from beginners to advanced riders.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-forest-800">2+</div>
              <div className="text-forest-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-forest-800">500+</div>
              <div className="text-forest-600">Happy Customers</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-black rounded-lg shadow-xl w-full h-96 flex items-center justify-center">
            <p className="text-white text-center">Farm Video<br />Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AboutSection