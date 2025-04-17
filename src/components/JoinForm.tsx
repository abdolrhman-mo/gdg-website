'use client'

import { useForm, ValidationError } from '@formspree/react'

export default function JoinForm() {
  const [state, handleSubmit] = useForm("xldjknpo")

  if (state.succeeded) {
    return <p className="text-gray-700">Thanks for reaching out!</p>
  }

  return (
    <div className="w-full flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input 
            id="fullName" 
            type="text" 
            name="fullName" 
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
            required
            // placeholder="https://github.com/yourusername"
            className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 mt-1" 
          />
          {/* <p className="mt-1 text-sm text-google-gray-light">
            Share your work to help us understand your experience level
          </p> */}
          <ValidationError prefix="Portfolio" field="portfolio" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
