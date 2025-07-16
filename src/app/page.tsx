'use client'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import QuickActions from '@/components/QuickActions'
import AboutSection from '@/components/AboutSection'
import AnimalsSection from '@/components/AnimalsSection'
import AcademySection from '@/components/AcademySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <QuickActions />
      <AboutSection />
      <AnimalsSection />
      <AcademySection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}