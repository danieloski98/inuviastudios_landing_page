'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Laptop, Lightbulb, GraduationCap } from 'lucide-react';
import { CORE_OFFERINGS } from '@/data/agencyData';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIconForOffering = (id: string) => {
    switch (id) {
      case 'software':
        return <Laptop className="w-6 h-6 stroke-[2.2] text-[#5B4BFF]" />;
      case 'consultation':
        return <Lightbulb className="w-6 h-6 stroke-[2.2] text-[#12A17B] dark:text-[#3DDBB0]" />;
      case 'tutoring':
        return <GraduationCap className="w-6 h-6 stroke-[2.2] text-[#5B4BFF]" />;
      default:
        return <Laptop className="w-6 h-6 stroke-[2.2] text-[#5B4BFF]" />;
    }
  };

  return (
    <section id="offerings" className="py-24 relative bg-[#F4F5FB]/70 dark:bg-[#0E1030] border-b border-[#E2E6F2] dark:border-[#262C6A] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#5B4BFF] dark:text-[#3DDBB0] block mb-3">
            What We Do
          </span>
          <h2
            className="text-3xl sm:text-5xl font-extrabold text-[#0E1030] dark:text-[#F4F5FB] tracking-tight leading-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Three focused offerings. <br />
            Built with craft and precision.
          </h2>
          <p className="text-base text-[#53587A] dark:text-[#A6AECB] leading-relaxed">
            We don't do everything — we focus strictly on high-impact custom software engineering, strategic technical consultation, and hands-on developer tutoring.
          </p>
        </div>

        {/* 3 Offerings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CORE_OFFERINGS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#151940] border border-[#E2E6F2] dark:border-[#262C6A] hover:border-[#5B4BFF]/50 dark:hover:border-[#5B4BFF]/60 rounded-3xl p-8 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md group relative"
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F4F5FB] dark:bg-[#1B1F4B] border border-[#E2E6F2] dark:border-[#262C6A] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIconForOffering(item.id)}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#5B4BFF] dark:text-[#3DDBB0] px-2.5 py-1 rounded-full bg-[#F4F5FB] dark:bg-[#1B1F4B] border border-[#E2E6F2] dark:border-[#262C6A]">
                    {item.number}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-[#5B4BFF] dark:text-[#5B4BFF] font-semibold block mb-1">
                  {item.subtitle}
                </span>

                <h3
                  className="text-2xl font-bold text-[#0E1030] dark:text-white mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#53587A] dark:text-[#A6AECB] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Platforms badges if available */}
                {item.platforms && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.platforms.map((plat, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F4F5FB] dark:bg-[#0E1030] text-[#0E1030] dark:text-[#F4F5FB] border border-[#E2E6F2] dark:border-[#262C6A]"
                      >
                        {plat}
                      </span>
                    ))}
                  </div>
                )}

                {/* Highlights */}
                <div className="space-y-2.5 mb-8">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#0E1030]/90 dark:text-[#F4F5FB]/90">
                      <Check className="w-3.5 h-3.5 text-[#12A17B] dark:text-[#3DDBB0] shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-[#E2E6F2] dark:border-[#262C6A]">
                <button
                  onClick={() => {
                    if (onSelectService) {
                      onSelectService(item.title);
                    } else {
                      const contactEl = document.getElementById('contact');
                      contactEl?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#F4F5FB] dark:bg-[#1B1F4B] text-xs font-semibold text-[#0E1030] dark:text-[#F4F5FB] hover:text-white hover:bg-[#5B4BFF] border border-[#E2E6F2] dark:border-[#262C6A] hover:border-[#5B4BFF] transition-all flex items-center justify-between group/btn"
                >
                  <span>Inquire About {item.title}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
