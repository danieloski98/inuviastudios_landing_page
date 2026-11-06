'use client';

import React from 'react';
import { ShieldCheck, Layers, GitPullRequest } from 'lucide-react';
import { AGENCY_PRINCIPLES } from '@/data/agencyData';

export const PrinciplesSection: React.FC = () => {
  const icons = [
    <ShieldCheck key="1" className="w-6 h-6 text-[#5B4BFF]" />,
    <Layers key="2" className="w-6 h-6 text-[#12A17B] dark:text-[#3DDBB0]" />,
    <GitPullRequest key="3" className="w-6 h-6 text-[#5B4BFF]" />
  ];

  return (
    <section id="principles" className="py-20 relative bg-white dark:bg-[#0E1030] border-b border-[#E2E6F2] dark:border-[#262C6A] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#5B4BFF] dark:text-[#3DDBB0] block mb-2">
            How We Operate
          </span>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-[#0E1030] dark:text-[#F4F5FB] tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Engineering without the agency friction.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AGENCY_PRINCIPLES.map((principle, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#F4F5FB] dark:bg-[#151940] border border-[#E2E6F2] dark:border-[#262C6A] hover:border-[#D5DAEC] dark:hover:border-[#5B4BFF]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#1B1F4B] border border-[#E2E6F2] dark:border-[#262C6A] flex items-center justify-center mb-5 shadow-xs">
                {icons[idx]}
              </div>
              <h3
                className="text-lg font-bold text-[#0E1030] dark:text-white mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {principle.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#53587A] dark:text-[#A6AECB] leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
