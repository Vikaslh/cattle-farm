'use client'

import React from 'react'
import Image from 'next/image'

export interface Animal {
  type: string
  image: string
  description: string
  available: number
  price: string
  care: string
}

interface AnimalCardProps {
  animal: Animal
  onQuickInquiry?: () => void
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal, onQuickInquiry }) => (
  <div className="bg-cream-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
    <div className="relative w-full h-48 mb-4">
      <Image
        src={animal.image}
        alt={animal.type}
        fill
        className="object-cover rounded-lg"
      />
    </div>
    <h3 className="text-xl font-bold text-forest-800 mb-2">{animal.type}</h3>
    <p className="text-forest-600 text-sm mb-4">{animal.description}</p>
    <div className="space-y-2 mb-6">
      <div className="flex justify-between text-sm">
        <span className="text-forest-700">Available:</span>
        <span className="text-forest-800 font-semibold">{animal.available}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-forest-700">Price:</span>
        <span className="text-forest-800 font-semibold">{animal.price}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-forest-700">Care:</span>
        <span className="text-forest-800 font-semibold">{animal.care}</span>
      </div>
    </div>
    <button
      className="w-full bg-forest-600 hover:bg-forest-700 text-white py-2 rounded-lg font-semibold transition-colors"
      onClick={onQuickInquiry}
    >
      Quick Inquiry
    </button>
  </div>
)

export default AnimalCard