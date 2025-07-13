import React from 'react';

const galleryItems = [
  '/src/assets/images/WhatsApp Image 2025-07-13 at 22.26.14 (1).jpeg',
  '/src/assets/images/WhatsApp Image 2025-07-13 at 22.26.14.jpeg',
  '/src/assets/images/WhatsApp Image 2025-07-13 at 22.26.15.jpeg',
  '/src/assets/images/WhatsApp Image 2025-07-13 at 22.33.41.jpeg',
  '/src/assets/images/WhatsApp Video 2025-07-13 at 22.33.36.mp4',
];

const HorseGallery: React.FC = () => (
  <div className="my-8 bg-green-50 rounded-xl p-6">
    <h3 className="text-2xl font-bold text-forest-800 mb-4">Horse Riding Gallery</h3>
    <div className="flex overflow-x-auto space-x-4 pb-4">
      {galleryItems.map((item, idx) =>
        item.endsWith('.mp4') ? (
          <video
            key={item}
            src={item}
            controls
            className="h-64 rounded-lg shadow-lg min-w-[320px] bg-black"
          />
        ) : (
          <img
            key={item}
            src={item}
            alt={`Horse gallery ${idx + 1}`}
            className="h-64 rounded-lg shadow-lg min-w-[320px] object-contain bg-white"
          />
        )
      )}
    </div>
  </div>
);

export default HorseGallery; 