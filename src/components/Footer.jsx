import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 pb-10">
        {/* Main Navigation Links */}
        <div className="py-6 border-b border-stone-200">
          <div className="flex flex-wrap items-center justify-between">
            <nav className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#home" className="text-stone-700 hover:text-stone-900 text-base transition-colors">
                Home
              </a>
              <a href="#business" className="text-stone-700 hover:text-stone-900 text-base transition-colors">
                Business
              </a>
              <a href="#about" className="text-stone-700 hover:text-stone-900 text-base transition-colors">
                About
              </a>
              <a href="#faq" className="text-stone-700 hover:text-stone-900 text-base transition-colors">
                FAQ
              </a>
              <a href="#advice" className="text-stone-700 hover:text-stone-900 text-base transition-colors">
                Advice
              </a>
              <a href="#careers" className="text-stone-700 hover:text-stone-900 text-base transition-colors">
                Careers
              </a>
              <a href="#find-therapist" className="text-stone-700 hover:text-stone-900 text-base transition-colors">
                Find a Therapist
              </a>
              <a href="#online-therapy" className="text-stone-700 hover:text-stone-900 text-base transition-colors">
                Online Therapy
              </a>
              <a href="#contact" className="text-stone-700 hover:text-stone-900 text-base transition-colors">
                Contact
              </a>
              <a href="#for-therapists" className="text-stone-700 hover:text-stone-900 text-base transition-colors">
                For Therapists
              </a>
            </nav>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#BF5F0B] hover:bg-[#D97F11] flex items-center justify-center transition-all duration-200"
                aria-label="Visit BetterHelp on Facebook"
              >
                <Facebook className="w-5 h-5 text-white" fill="white" />
              </a>
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#BF5F0B] hover:bg-[#D97F11] flex items-center justify-center transition-all duration-200"
                aria-label="Visit BetterHelp on Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#BF5F0B] hover:bg-[#D97F11] flex items-center justify-center transition-all duration-200"
                aria-label="Visit BetterHelp on TikTok"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#BF5F0B] hover:bg-[#D97F11] flex items-center justify-center transition-all duration-200"
                aria-label="Visit BetterHelp on X (Twitter)"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#BF5F0B] hover:bg-[#D97F11] flex items-center justify-center transition-all duration-200"
                aria-label="Visit BetterHelp on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" fill="white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal Links and Copyright */}
        <div className="py-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a href="#terms" className="text-stone-600 hover:text-stone-900 transition-colors whitespace-nowrap">
              Terms & Conditions
            </a>
            <a href="#privacy" className="text-stone-600 hover:text-stone-900 transition-colors whitespace-nowrap">
              Privacy Policy
            </a>
            <a href="#sharing" className="text-stone-600 hover:text-stone-900 transition-colors whitespace-nowrap">
              Sharing Settings
            </a>
            <a href="#accessibility" className="text-stone-600 hover:text-stone-900 transition-colors whitespace-nowrap">
              Web Accessibility
            </a>
            <span className="text-stone-600 whitespace-nowrap">
              © 2025 BetterHelp
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;