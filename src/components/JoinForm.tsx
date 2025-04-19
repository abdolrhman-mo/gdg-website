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
      <div className="w-full max-w-3xl space-y-6 text-center">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Thank You for Applying! 🎉
          </h3>
          <p className="text-gray-700 mb-4">
            We have received your application and will review it carefully. You will hear back from us within a week or less.
          </p>
          <p className="text-gray-700 mb-6">
            Know someone who might be interested in joining? Share this opportunity with them!
          </p>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Share this link with your friends:</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 p-2 bg-gray-50 rounded text-sm text-gray-800 overflow-x-auto">
                https://gdg-ecu.vercel.app/recruitment
              </code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('https://gdg-ecu.vercel.app/recruitment')
                  setIsCopied(true)
                  setTimeout(() => setIsCopied(false), 2000)
                }}
                className="cursor-pointer px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm min-w-[100px]"
              >
                {isCopied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-500">
              Follow us on our social media to stay updated about the program:
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://www.linkedin.com/company/gdscecu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-[#0A66C2]"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/gdsc.ecu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:text-[#1877F2]"
              >
                Facebook
              </a>
              <a
                href="https://www.facebook.com/gdsc.ecu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E4405F] hover:text-[#E4405F]"
              >
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
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input 
            id="fullName" 
            type="text" 
            name="fullName" 
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 mt-1" 
          />
          <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone No. <span className="text-red-500">*</span>
          </label>
          <input 
            id="phone" 
            type="tel" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 mt-1" 
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">
            What technologies or tools have you worked with before? <span className="text-red-500">*</span>
          </label>
          <p className="text-sm text-gray-500 mb-2">(e.g., React, Node.js, Flutter, Python, Firebase, Figma, Git, etc.)</p>
          <textarea 
            id="technologies" 
            name="technologies" 
            value={formData.technologies}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 mt-1" 
          />
          <ValidationError prefix="Technologies" field="technologies" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">
            Why do you want to join GDG Build Program? <span className="text-red-500">*</span>
          </label>
          <textarea 
            id="motivation" 
            name="motivation" 
            value={formData.motivation}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 mt-1" 
          />
          <ValidationError prefix="Motivation" field="motivation" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="project" className="block text-sm font-medium text-gray-700">
            What&apos;s a project you&apos;re proud of? <span className="text-red-500">*</span>
          </label>
          <textarea 
            id="project" 
            name="project" 
            value={formData.project}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 mt-1" 
          />
          <ValidationError prefix="Project" field="project" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">
            Link to Portfolio, GitHub, or LinkedIn
            <span className="text-[#D2232A] ml-1">*</span>
          </label>
          <input 
            id="portfolio" 
            type="url" 
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 mt-1" 
          />
          <ValidationError prefix="Portfolio" field="portfolio" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {state.submitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  )
}
