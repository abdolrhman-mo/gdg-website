export default function WhyJoin() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#4285F4]/5 via-[#34A853]/5 to-[#FBBC04]/5">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#4285F4] to-[#34A853] rounded-full mb-6 animate-pulse">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl font-semibold text-google-gray mb-8">
            Why Join <span className="text-[#4285F4]">GDG Build?</span>
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-105 transition-all duration-300">
            <p className="text-xl md:text-2xl text-google-gray-light leading-relaxed font-medium">
              Connect with talented, ambitious teammates who want to build something big — just like you.
            </p>
            
            {/* Decorative elements */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <div className="w-3 h-3 bg-[#EA4335] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-3 h-3 bg-[#FBBC04] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-3 h-3 bg-[#34A853] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              <div className="w-3 h-3 bg-[#4285F4] rounded-full animate-bounce" style={{ animationDelay: '450ms' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}