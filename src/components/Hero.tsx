'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Laptop, Lightbulb, GraduationCap } from 'lucide-react';
import { GatewayIcon } from './Logo';

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-white dark:bg-[#0E1030] border-b border-[#E2E6F2] dark:border-[#262C6A] transition-colors duration-200 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-[#5B4BFF]/5 dark:bg-[#5B4BFF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#3DDBB0]/10 dark:bg-[#1B1F4B] rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Background Gateway Arch Watermark */}
      <div className="absolute right-8 lg:right-20 top-20 pointer-events-none opacity-[0.03] dark:opacity-5 text-[#0E1030] dark:text-[#F4F5FB] hidden sm:block">
        <GatewayIcon sizePx={440} dotColor="#3DDBB0" archColor="currentColor" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7">
            {/* Headline from brand identity section 1 */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0E1030] dark:text-[#F4F5FB] tracking-tight leading-[1.08] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              We build software <br className="hidden sm:inline" />
              that <span className="text-[#5B4BFF] dark:text-[#3DDBB0] underline decoration-[#3DDBB0] dark:decoration-[#5B4BFF] decoration-wavy underline-offset-8">ships.</span>
            </motion.h1>

            {/* Subtitle from brand identity section 1 */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#53587A] dark:text-[#A6AECB] max-w-2xl leading-relaxed mb-8 font-normal"
            >
              Web and mobile products, designed and engineered end to end by a small, senior team.
              We specialize in <strong className="text-[#0E1030] dark:text-white">Custom Software</strong> (mobile, web, and desktop),
              senior <strong className="text-[#0E1030] dark:text-white">Technical Consultation</strong>, and hands-on{' '}
              <strong className="text-[#0E1030] dark:text-white">Developer Tutoring</strong>.
            </motion.p>

            {/* Quick 3-Pill Summary */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-2.5 mb-10"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F5FB] dark:bg-[#151940] border border-[#E2E6F2] dark:border-[#262C6A] text-xs text-[#0E1030] dark:text-[#F4F5FB] shadow-xs">
                <Laptop className="w-3.5 h-3.5 text-[#5B4BFF]" />
                <span className="font-medium">Custom Software (Web • Mobile • Desktop)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F5FB] dark:bg-[#151940] border border-[#E2E6F2] dark:border-[#262C6A] text-xs text-[#0E1030] dark:text-[#F4F5FB] shadow-xs">
                <Lightbulb className="w-3.5 h-3.5 text-[#12A17B] dark:text-[#3DDBB0]" />
                <span className="font-medium">Technical Consultation</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F5FB] dark:bg-[#151940] border border-[#E2E6F2] dark:border-[#262C6A] text-xs text-[#0E1030] dark:text-[#F4F5FB] shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#5B4BFF]" />
                <span className="font-medium">Developer Tutoring</span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full font-bold text-sm bg-[#5B4BFF] text-white hover:bg-[#4A3AF0] hover:shadow-[0_4px_25px_rgba(91,75,255,0.35)] transition-all flex items-center gap-2 group tracking-wide"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#offerings"
                onClick={onExploreClick}
                className="px-7 py-3.5 rounded-full font-semibold text-sm text-[#0E1030] dark:text-[#F4F5FB] bg-white dark:bg-[#151940] border border-[#D5DAEC] dark:border-[#262C6A] hover:bg-[#F4F5FB] dark:hover:bg-[#1B1F4B] transition-all shadow-xs"
              >
                View What We Offer
              </a>
            </motion.div>
          </div>

          {/* Right Column: Gateway Logo Option C Feature Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md"
            >
              <div className="relative rounded-3xl bg-[#F4F5FB] dark:bg-[#151940] border border-[#E2E6F2] dark:border-[#262C6A] p-8 shadow-lg overflow-hidden group transition-colors duration-200">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#5B4BFF]/10 dark:bg-[#5B4BFF]/20 rounded-full blur-2xl pointer-events-none" />

                {/* Central Gateway Emblem */}
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <div className="w-28 h-28 rounded-3xl bg-[#1B1F4B] flex items-center justify-center shadow-lg mb-6 transform group-hover:scale-105 transition-transform duration-300">
                    <GatewayIcon sizePx={72} archColor="#F4F5FB" dotColor="#3DDBB0" />
                  </div>

                  <h3
                    className="text-3xl font-extrabold text-[#0E1030] dark:text-[#F4F5FB] lowercase tracking-tight mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    inuvia
                  </h3>
                  <div
                    className="font-mono text-xs uppercase tracking-[0.3em] text-[#5B4BFF] dark:text-[#3DDBB0] font-bold mb-4"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    STUDIOS
                  </div>

                  <p className="text-xs text-[#53587A] dark:text-[#A6AECB] max-w-xs leading-relaxed italic mb-6">
                    "A dotted 'i' sitting on an open arch: a doorway into your product, and the 'n' in inuvia."
                  </p>

                  {/* Brand Swatches from section 1 */}
                  <div className="w-full pt-5 border-t border-[#E2E6F2] dark:border-[#262C6A] grid grid-cols-5 gap-2 text-center">
                    <div>
                      <div className="h-6 rounded-lg bg-[#1B1F4B] shadow-xs" />
                      <span className="text-[9px] font-mono text-[#53587A] dark:text-[#A6AECB] mt-1 block">Midnight</span>
                    </div>
                    <div>
                      <div className="h-6 rounded-lg bg-[#5B4BFF] shadow-xs" />
                      <span className="text-[9px] font-mono text-[#53587A] dark:text-[#A6AECB] mt-1 block">Violet</span>
                    </div>
                    <div>
                      <div className="h-6 rounded-lg bg-[#3DDBB0] shadow-xs" />
                      <span className="text-[9px] font-mono text-[#53587A] dark:text-[#A6AECB] mt-1 block">Mint</span>
                    </div>
                    <div>
                      <div className="h-6 rounded-lg bg-[#F4F5FB] border border-[#CBD2E6] dark:border-[#262C6A]" />
                      <span className="text-[9px] font-mono text-[#53587A] dark:text-[#A6AECB] mt-1 block">Cloud</span>
                    </div>
                    <div>
                      <div className="h-6 rounded-lg bg-[#0E1030] border border-[#262C6A] shadow-xs" />
                      <span className="text-[9px] font-mono text-[#53587A] dark:text-[#A6AECB] mt-1 block">Ink</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
