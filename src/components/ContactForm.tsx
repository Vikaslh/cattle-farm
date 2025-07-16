'use client'

import React, { useState } from 'react'

interface ContactFormFields {
  name: string
  email: string
  phone: string
  message: string
}

const ContactForm: React.FC = () => {
  const [fields, setFields] = useState<ContactFormFields>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await new Promise(res => setTimeout(res, 1200))
      setSuccess(true)
      setFields({ name: '', email: '', phone: '', message: '' })
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-green-100 text-green-800 p-4 rounded mb-4 text-center font-semibold">
        Thank you for reaching out! We have received your message and will get back to you soon.
      </div>
    )
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-cream-200 font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-cream-300 focus:ring-2 focus:ring-cream-400 focus:border-transparent"
          placeholder="Your full name"
          value={fields.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-cream-200 font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-cream-300 focus:ring-2 focus:ring-cream-400 focus:border-transparent"
          placeholder="your@email.com"
          value={fields.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-cream-200 font-medium mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-cream-300 focus:ring-2 focus:ring-cream-400 focus:border-transparent"
          placeholder="Your phone number"
          value={fields.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-cream-200 font-medium mb-2">Message</label>
        <textarea
          name="message"
          rows={5}
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-cream-300 focus:ring-2 focus:ring-cream-400 focus:border-transparent"
          placeholder="Tell us about your requirements..."
          value={fields.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      {error && (
        <div className="bg-red-100 text-red-800 p-2 rounded text-center font-semibold">{error}</div>
      )}
      <button
        type="submit"
        className="w-full bg-cream-200 hover:bg-cream-300 text-forest-800 py-3 rounded-lg font-semibold transition-colors disabled:opacity-60"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm