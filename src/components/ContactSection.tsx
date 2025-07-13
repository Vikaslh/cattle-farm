import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import MapSection from './MapSection';

const ContactSection: React.FC = () => (
  <section id="contact" className="py-20 bg-forest-800 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-cream-200 max-w-2xl mx-auto">
          Have questions or ready to start your journey with us? We'd love to hear from you.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
          <ContactForm />
        </div>
        {/* Contact Information and Map */}
        <div className="space-y-8">
          <ContactInfo />
          <MapSection />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection; 