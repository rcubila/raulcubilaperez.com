'use client'

import { useState } from 'react'
import { socialLinks } from '@/data/social'
import SocialIcon from '@/components/SocialIcon'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    // Basic validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields')
      return
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    try {
      // For now, just show success state
      // Later you can connect to Resend or another email service
      setSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      })

      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError('Failed to send message. Please try again.')
    }
  }

  return (
    <section id="contact" className="bg-gray-100 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 data-section-title className="text-4xl lg:text-5xl font-thin text-center text-gray-900 mb-16 tracking-widest uppercase">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div>
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded text-sm">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-100 text-red-800 rounded text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 font-light text-sm"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 font-light text-sm"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 font-light text-sm"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 font-light text-sm resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gray-900 text-white font-thin tracking-wider uppercase hover:bg-gray-800 transition-colors"
              >
                Send
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-thin text-gray-900 mb-2">
                Raul Cubila Perez
              </h3>
              <p className="text-lg font-thin text-gray-600 mb-8">
                Software Engineer
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm font-normal tracking-wide text-gray-900 mb-1">
                    Phone
                  </p>
                  <p className="text-gray-700 font-light">
                    +41 77 509 31 33
                  </p>
                </div>
                <div>
                  <p className="text-sm font-normal tracking-wide text-gray-900 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:rcubila@gmail.com"
                    className="text-purple-600 hover:text-purple-700 font-light"
                  >
                    rcubila@gmail.com
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-8">
                <div className="flex gap-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 transition-colors hover:text-purple-600"
                      aria-label={link.name}
                    >
                      <SocialIcon name={link.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
