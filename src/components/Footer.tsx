'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Logo, GatewayIcon } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F4F5FB] dark:bg-[#090B22] border-t border-[#E2E6F2] dark:border-[#262C6A] text-[#53587A] dark:text-[#A6AECB] pt-16 pb-12 relative overflow-hidden transition-colors duration-200">
      {/* Decorative Background Gateway Arch watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.03] dark:opacity-5 text-[#0E1030] dark:text-[#F4F5FB]">
        <GatewayIcon sizePx={340} dotColor="#3DDBB0" archColor="currentColor" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-[#E2E6F2] dark:border-[#262C6A] gap-8">
          <div>
            <Logo
              size="md"
              badge={true}
              badgeColor="midnight"
              archColor="#F4F5FB"
              dotColor="#3DDBB0"
            />
            <p className="text-xs text-[#53587A] dark:text-[#A6AECB] max-w-sm mt-4 leading-relaxed">
              Software development agency specializing in custom mobile, web, and desktop software creation, technical consultation, and private developer tutoring.
            </p>
            <a
              href="mailto:support@inuviastudios.com"
              className="inline-block mt-3 text-xs font-mono font-medium text-[#5B4BFF] dark:text-[#3DDBB0] hover:underline"
            >
              support@inuviastudios.com
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a href="#offerings" className="hover:text-[#5B4BFF] dark:hover:text-[#3DDBB0] transition-colors">
              Custom Software
            </a>
            <a href="#offerings" className="hover:text-[#5B4BFF] dark:hover:text-[#3DDBB0] transition-colors">
              Consultation
            </a>
            <a href="#offerings" className="hover:text-[#5B4BFF] dark:hover:text-[#3DDBB0] transition-colors">
              Tutoring
            </a>
            <a href="#contact" className="hover:text-[#5B4BFF] dark:hover:text-[#3DDBB0] transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#53587A] dark:text-[#A6AECB]">
          <div>
            © {new Date().getFullYear()} Inuvia Studios. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#53587A] dark:text-[#A6AECB] hover:text-[#5B4BFF] dark:hover:text-[#3DDBB0] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#5B4BFF] dark:text-[#3DDBB0]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
