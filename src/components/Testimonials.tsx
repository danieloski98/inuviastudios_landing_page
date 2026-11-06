'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/data/agencyData';

export const Testimonials: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 relative bg-[#F4F5FB]/70 dark:bg-[#0E1030] border-b border-[#E2E6F2] dark:border-[#262C6A] transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[#5B4BFF] dark:text-[#3DDBB0] font-semibold block mb-2">
            Clarity & Process
          </span>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-[#0E1030] dark:text-[#F4F5FB] tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#151940] border border-[#E2E6F2] dark:border-[#262C6A] rounded-2xl overflow-hidden transition-colors shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0E1030] dark:text-[#F4F5FB] hover:text-[#5B4BFF] dark:hover:text-[#3DDBB0] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#53587A] dark:text-[#A6AECB] transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 text-[#5B4BFF] dark:text-[#3DDBB0]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 text-xs text-[#53587A] dark:text-[#A6AECB] leading-relaxed border-t border-[#E2E6F2] dark:border-[#262C6A] pt-3.5"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
