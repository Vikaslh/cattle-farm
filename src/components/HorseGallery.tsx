'use client'

import React from 'react'

const HorseGallery: React.FC = () => (
  <div className="my-8 bg-green-50 rounded-xl p-6">
    <h3 className="text-2xl font-bold text-forest-800 mb-4">Horse Riding Gallery</h3>
    <div className="flex overflow-x-auto space-x-4 pb-4">
      <div className="h-64 rounded-lg shadow-lg min-w-[320px] bg-gray-200 flex items-center justify-center">
        <p className="text-gray-600">Horse Gallery Coming Soon</p>
      </div>
      <div className="h-64 rounded-lg shadow-lg min-w-[320px] bg-gray-200 flex items-center justify-center">
        <p className="text-gray-600">Horse Gallery Coming Soon</p>
      </div>
      <div className="h-64 rounded-lg shadow-lg min-w-[320px] bg-gray-200 flex items-center justify-center">
        <p className="text-gray-600">Horse Gallery Coming Soon</p>
      </div>
    </div>
  </div>
)

export default HorseGallery