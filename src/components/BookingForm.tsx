'use client'

import React, { useState } from 'react'

interface BookingFormFields {
  name: string
  phone: string
  level: string
  date: string
  notes: string
}

const BookingForm: React.FC = () => {
  const [fields, setFields] = useState<BookingFormFields>({
    name: '',
    phone: '',
    level: 'Beginner',
    date: '',
    notes: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await new Promise(res => setTimeout(res, 1200))
      setSuccess(true)
      setFields({ name: '', phone: '', level: 'Beginner', date: '', notes: '' })
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-green-100 text-green-800 p-4 rounded mb-4 text-center font-semibold">
        Thank you for booking! We will contact you soon to confirm your session.
      </div>
    )
  }

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-forest-700 font-medium mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
          placeholder="Enter your full name"
          value={fields.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-forest-700 font-medium mb-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
          placeholder="Enter your phone number"
          value={fields.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-forest-700 font-medium mb-2">Experience Level</label>
        <select
          name="level"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
          value={fields.level}
          onChange={handleChange}
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>
      <div>
        <label className="block text-forest-700 font-medium mb-2">Preferred Date</label>
        <input
          type="date"
          name="date"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
          value={fields.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-forest-700 font-medium mb-2">Additional Notes</label>
        <textarea
          name="notes"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
          placeholder="Any special requirements or questions..."
          value={fields.notes}
          onChange={handleChange}
        ></textarea>
      </div>
      {error && (
        <div className="md:col-span-2 bg-red-100 text-red-800 p-2 rounded text-center font-semibold">{error}</div>
      )}
      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-forest-600 hover:bg-forest-700 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Booking...' : 'Book Session'}
        </button>
      </div>
    </form>
  )
}

export default BookingForm