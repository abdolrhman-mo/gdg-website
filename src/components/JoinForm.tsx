'use client'

import { useForm, ValidationError } from '@formspree/react'
import { useEffect, useState } from 'react'

interface FormData {
  fullName: string;
  phone: string;
  technologies: string;
  motivation: string;
  project: string;
  portfolio: string;
}

export default function JoinForm() {
  const [state, handleSubmit] = useForm("xldjknpo")
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    technologies: '',
    motivation: '',
    project: '',
    portfolio: ''
  })
  const [isCopied, setIsCopied] = useState(false)

  // Load saved form data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('joinFormData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('joinFormData', JSON.stringify(formData))
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e)
    // Clear form data from localStorage after successful submission
    if (state.succeeded) {
      localStorage.removeItem('joinFormData')
      setFormData({
        fullName: '',
        phone: '',
        technologies: '',
        motivation: '',
        project: '',
        portfolio: ''
      })
    }
  }

  if (state.succeeded) {
    return (
      <div className="w-full max-w-3xl space-y-6 text-center animate-fade-in-up">
        <div className="bg-gradient-to-br from-green-50 to-[#34A853]/10 border-2 border-[#34A853]/20 rounded-2xl p-8 shadow-lg">
          <div className="w-16 h-16 bg-gradient-to-r from-[#34A853] to-[#4285F4] rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-3xl font-bold text-[#34A853] mb-4">
            Welcome to GDG Build! 🎉
          </h3>
          <p className="text-gray-700 mb-4 text-lg">
            We have received your application and will review it carefully. You will hear back from us within a week or less.
          </p>
          <p className="text-gray-700 mb-8">
            Know someone who might be interested in joining? Share this opportunity with them!
          </p>
          
          <div className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-sm text-gray-600 mb-3 font-medium">Share this link with your friends:</p>
            <div className="flex items-center gap-3">
              <code className="flex-1 p-3 bg-gray-50 rounded-lg text-sm text-gray-800 overflow-x-auto border">
                https://gdg-ecu.vercel.app/recruitment
              </code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('https://gdg-ecu.vercel.app/recruitment')
                  setIsCopied(true)
                  setTimeout(() => setIsCopied(false), 2000)
                }}
                className="cursor-pointer px-4 py-3 bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm min-w-[100px] transform hover:scale-105"
              >
                {isCopied ? (
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </span>
                ) : (
                  'Copy Link'
                )}
              </button>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/50 rounded-xl backdrop-blur-sm">
            <p className="text-sm text-gray-600 mb-3 font-medium">
              Follow us on our social media to stay updated:
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/company/gdscecu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#0A66C2] hover:text-[#0A66C2]/80 font-medium transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/gdsc.ecu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#1877F2] hover:text-[#1877F2]/80 font-medium transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/gdg.ecu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#E4405F] hover:text-[#E4405F]/80 font-medium transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex justify-center items-center">
      <form onSubmit={handleFormSubmit} className="w-full max-w-3xl space-y-6">
        <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-[#EA4335]">*</span>
          </label>
          <input 
            id="fullName" 
            type="text" 
            name="fullName" 
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4] text-gray-900 transition-all duration-300 hover:border-gray-300" 
            placeholder="Enter your full name"
          />
          <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone No. <span className="text-[#EA4335]">*</span>
          </label>
          <input 
            id="phone" 
            type="tel" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4] text-gray-900 transition-all duration-300 hover:border-gray-300" 
            placeholder="Enter your phone number"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <label htmlFor="technologies" className="block text-sm font-semibold text-gray-700 mb-2">
            What technologies or tools have you worked with before? <span className="text-[#EA4335]">*</span>
          </label>
          <p className="text-sm text-gray-500 mb-2">(e.g., React, Node.js, Flutter, Python, Firebase, Figma, Git, etc.)</p>
          <textarea 
            id="technologies" 
            name="technologies" 
            value={formData.technologies}
            onChange={handleChange}
            required
            rows={3}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4] text-gray-900 transition-all duration-300 hover:border-gray-300 resize-none" 
            placeholder="List the technologies you've worked with..."
          />
          <ValidationError prefix="Technologies" field="technologies" errors={state.errors} />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
            Why do you want to join GDG Build Program? <span className="text-[#EA4335]">*</span>
          </label>
          <textarea 
            id="motivation" 
            name="motivation" 
            value={formData.motivation}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4] text-gray-900 transition-all duration-300 hover:border-gray-300 resize-none" 
            placeholder="Tell us what motivates you to join..."
          />
          <ValidationError prefix="Motivation" field="motivation" errors={state.errors} />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <label htmlFor="project" className="block text-sm font-semibold text-gray-700 mb-2">
            What&apos;s a project you&apos;re proud of? <span className="text-[#EA4335]">*</span>
          </label>
          <textarea 
            id="project" 
            name="project" 
            value={formData.project}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4] text-gray-900 transition-all duration-300 hover:border-gray-300 resize-none" 
            placeholder="Describe a project you're proud of..."
          />
          <ValidationError prefix="Project" field="project" errors={state.errors} />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <label htmlFor="portfolio" className="block text-sm font-semibold text-gray-700 mb-2">
            Link to Portfolio, GitHub, or LinkedIn <span className="text-[#EA4335]">*</span>
          </label>
          <input 
            id="portfolio" 
            type="url" 
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4] text-gray-900 transition-all duration-300 hover:border-gray-300" 
            placeholder="https://github.com/yourusername or https://linkedin.com/in/yourprofile"
          />
          <ValidationError prefix="Portfolio" field="portfolio" errors={state.errors} />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#FBBC04] text-white px-6 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 transform hover:scale-105 disabled:hover:scale-100"
          >
            {state.submitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Submitting Application...</span>
              </>
            ) : (
              <>
                <span>Submit Application</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}