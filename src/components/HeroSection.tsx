'use client'

import React from 'react'
import Image from 'next/image'

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => (
  <section id="home" className="relative h-screen flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30">
      <Image
        src="https://thumbs.dreamstime.com/b/spring-lambs-baby-sheep-field-young-green-farm-70100459.jpg"
        alt="Countryside farm view"
        fill
        className="object-cover"
        priority
      />
    </div>
    <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Welcome to <span className="text-cream-200">Nayaab</span> Cattle Farm
      </h1>
      <p className="text-xl md:text-2xl mb-8 leading-relaxed">
        Premium livestock care, horse riding academy, and countryside experiences in the heart of nature
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => scrollToSection('animals')}
          className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
        >
          Explore Our Animals
        </button>
        <button
          onClick={() => scrollToSection('academy')}
          className="bg-cream-100 hover:bg-cream-200 text-forest-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
        >
          Horse Riding Classes
        </button>
      </div>
    </div>
  </section>
)

export default HeroSection