'use client'

import React from 'react'
import { MessageCircle, Phone } from 'lucide-react'

const QuickActions: React.FC = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="https://wa.me/919591611088"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
    <a
      href="tel:+919591611088"
      className="bg-forest-600 hover:bg-forest-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
    >
      <Phone className="h-6 w-6" />
    </a>
  </div>
)

export default QuickActions