'use client'

import React from 'react'

const MapSection: React.FC = () => (
  <div className="bg-white/10 rounded-lg p-6">
    <h4 className="text-lg font-semibold mb-4">Find Us</h4>
    <div className="bg-white/20 rounded-lg h-64 flex items-center justify-center">
      <iframe
        title="Nayaab Cattle Farm Location"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '0.5rem', minHeight: '220px' }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.217858696648!2d77.6478428!3d13.1349339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1be5e2355725%3A0xa37f338b05eccd9d!2sNayaab%20Cattle%20Farm!5e0!3m2!1sen!2sin!4v1718190000000!5m2!1sen!2sin"
      ></iframe>
    </div>
    <div className="text-center mt-2">
      <a
        href="https://www.google.com/maps/place/Nayaab+Cattle+Farm/@13.1349328,77.6478428,15z/data=!4m6!3m5!1s0x3bae1be5e2355725:0xa37f338b05eccd9d!8m2!3d13.1349339!4d77.6658667!16s%2Fg%2F11x2ss_vbj?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-cream-200 hover:text-cream-100 underline inline-block"
      >
        Open in Google Map
      </a>
    </div>
  </div>
)

export default MapSection