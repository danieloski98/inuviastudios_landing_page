'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { PrinciplesSection } from '@/components/PrinciplesSection';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [selectedOffering, setSelectedOffering] = useState<string>('Custom Software (Mobile, Web, Desktop)');

  const handleSelectService = (serviceName: string) => {
    setSelectedOffering(serviceName);
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0E1030] text-[#0E1030] dark:text-[#F4F5FB] selection:bg-[#5B4BFF] selection:text-white transition-colors duration-200">
      {/* Sticky Top Navbar with Theme Toggle */}
      <Navbar
        onOpenConsultation={() => {
          const contactEl = document.getElementById('contact');
          contactEl?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => {
            const offeringsEl = document.getElementById('offerings');
            offeringsEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3 Core Offerings: Custom Software, Consultation, Tutoring */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* How We Operate / Engineering Principles */}
        <PrinciplesSection />

        {/* Quick FAQ / Clarity */}
        <Testimonials />

        {/* Contact & Consultation Form */}
        <ContactSection initialService={selectedOffering} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
