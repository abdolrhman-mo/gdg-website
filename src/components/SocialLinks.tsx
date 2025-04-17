import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://www.facebook.com/gdsc.ecu',
    bgColor: 'bg-[#1877F2]/5 hover:bg-[#1877F2]/10',
    iconColor: 'text-[#1877F2]'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://www.instagram.com/gdg.ecu/',
    bgColor: 'bg-[#E4405F]/5 hover:bg-[#E4405F]/10',
    iconColor: 'text-[#E4405F]'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/company/gdscecu/',
    bgColor: 'bg-[#0A66C2]/5 hover:bg-[#0A66C2]/10',
    iconColor: 'text-[#0A66C2]'
  }
];

export default function SocialLinks() {
  return (
    <section className="py-16" id="social-links">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-medium text-google-gray text-center mb-10">
          Follow GDG on Campus ECU
        </h2>
        
        <div className="flex justify-center items-start gap-6 md:gap-10">
          {socialLinks.map((social) => (
            <Link 
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${social.name}`}
              className="flex flex-col items-center"
            >
              <div className={`p-4 md:p-5 rounded-lg ${social.bgColor} transition-all duration-200 hover:scale-105 mb-3`}>
                {React.createElement(social.icon, {
                  className: `w-7 h-7 md:w-8 md:h-8 ${social.iconColor}`,
                  "aria-hidden": "true"
                })}
              </div>
              <span className={`text-sm font-medium ${social.iconColor}`}>
                {social.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 