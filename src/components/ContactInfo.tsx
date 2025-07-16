'use client'

import React from 'react'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'

const ContactInfo: React.FC = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-center">
          <Phone className="h-6 w-6 text-cream-400 mr-4" />
          <div>
            <p className="font-semibold">Phone</p>
            <a href="tel:+919591611088" className="text-cream-300 hover:text-cream-100">+91 95916 11088</a>
          </div>
        </div>
        <div className="flex items-center">
          <MessageCircle className="h-6 w-6 text-cream-400 mr-4" />
          <div>
            <p className="font-semibold">WhatsApp</p>
            <a href="https://wa.me/919591611088" className="text-cream-300 hover:text-cream-100">+91 95916 11088</a>
          </div>
        </div>
        <div className="flex items-center">
          <Mail className="h-6 w-6 text-cream-400 mr-4" />
          <div>
            <p className="font-semibold">Email</p>
            <a href="mailto:syedishti.ahmed@gmail.com" className="text-cream-300 hover:text-cream-100">syedishti.ahmed@gmail.com</a>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-cream-400 mr-4 mt-1" />
          <div>
            <p className="font-semibold">Address</p>
            <p className="text-cream-300">1st NE Main Rd, Razack Palya, Bengaluru, Karnataka 562149</p>
          </div>
        </div>
        <div className="flex items-center">
          <Clock className="h-6 w-6 text-cream-400 mr-4" />
          <div>
            <p className="font-semibold">Operating Hours</p>
            <p className="text-cream-300">Daily: 6:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ContactInfo