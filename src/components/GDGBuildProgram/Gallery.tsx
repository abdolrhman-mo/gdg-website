'use client';

import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  {
    src: '/images/gdg-build/gallery/image1.jpg',
    alt: 'Nasa Sapce Apps Hackathon'
  },
  {
    src: '/images/gdg-build/gallery/image2.jpg',
    alt: 'Benha Hackathon'
  },
  {
    src: '/images/gdg-build/gallery/image3.jpg',
    alt: 'AI Finance Hackathon'
  },
  {
    src: '/images/gdg-build/gallery/image4.jpg',
    alt: 'Benha Hackathon'
  },
  {
    src: '/images/gdg-build/gallery/image5.jpg',
    alt: 'Nasa Sapce Apps Hackathon'
  },
  {
    src: '/images/gdg-build/gallery/image6.jpg',
    alt: 'Benha Hackathon'
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getImageIndex = (offset: number) => {
    return (currentIndex + offset + galleryImages.length) % galleryImages.length;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-16">
          Our Journey in Photos
        </h2>
        
        <div className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-6 px-4 sm:px-0">
          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="cursor-pointer absolute -left-2 sm:-left-12 md:-left-16 w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center text-white bg-black/40 hover:bg-black/50 rounded-full transition-all z-10 touch-manipulation"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Images Container */}
          <div className="relative w-full flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {/* Left Image */}
            <div className="hidden sm:block w-1/4 aspect-square relative rounded-lg overflow-hidden">
              <div className={`absolute inset-0 transition-all duration-500 ${isAnimating ? 'scale-95' : 'opacity-100 scale-100'}`}>
                <Image
                  onClick={prevImage}
                  src={galleryImages[getImageIndex(-1)].src}
                  alt={galleryImages[getImageIndex(-1)].alt}
                  fill
                  className="object-cover cursor-pointer"
                />
              </div>
            </div>

            {/* Center Image */}
            <div className="w-full sm:w-3/4 md:w-1/2 aspect-square relative rounded-lg overflow-hidden">
              <div className={`absolute inset-0 transition-all duration-500 ${isAnimating ? 'scale-95' : 'opacity-100 scale-100'}`}>
                <Image
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
                  <p className="text-white text-base sm:text-base md:text-lg font-medium text-center">
                    {galleryImages[currentIndex].alt}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden sm:block w-1/4 aspect-square relative rounded-lg overflow-hidden">
              <div className={`absolute inset-0 transition-all duration-500 ${isAnimating ? 'scale-95' : 'opacity-100 scale-100'}`}>
                <Image
                  onClick={nextImage}
                  src={galleryImages[getImageIndex(1)].src}
                  alt={galleryImages[getImageIndex(1)].alt}
                  fill
                  className="object-cover cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="cursor-pointer absolute -right-2 sm:-right-12 md:-right-16 w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center text-white bg-black/40 hover:bg-black/50 rounded-full transition-all z-10 touch-manipulation"
            aria-label="Next image"
          >
            <svg className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
