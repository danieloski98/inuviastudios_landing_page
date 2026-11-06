'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { useTheme } from '@/context/ThemeContext';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Custom Software', href: '#offerings' },
    { name: 'Consultation', href: '#offerings' },
    { name: 'Tutoring', href: '#offerings' },
    { name: 'Principles', href: '#principles' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0E1030]/95 backdrop-blur-md border-b border-[#E2E6F2] dark:border-[#262C6A] py-3.5 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo Option C: The Gateway in Section 1 Colors */}
          <a
            href="#"
            className="flex items-center group transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Inuvia Studios Home"
          >
            <Logo
              size="md"
              badge={true}
              badgeColor="midnight"
              archColor="#F4F5FB"
              dotColor="#3DDBB0"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-[#53587A] dark:text-[#A6AECB] hover:text-[#0E1030] dark:hover:text-[#F4F5FB] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions: Dark Mode Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-[#F4F5FB] dark:bg-[#151940] border border-[#E2E6F2] dark:border-[#262C6A] text-[#53587A] dark:text-[#A6AECB] hover:text-[#5B4BFF] dark:hover:text-[#3DDBB0] transition-colors"
              aria-label="Toggle dark mode"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#3DDBB0]" />
              ) : (
                <Moon className="w-4 h-4 text-[#53587A]" />
              )}
            </button>

            <button
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  handleNavClick('#contact');
                }
              }}
              className="px-5 py-2.5 rounded-full font-bold text-xs bg-[#5B4BFF] text-white hover:bg-[#4A3AF0] hover:shadow-[0_4px_20px_rgba(91,75,255,0.3)] transition-all flex items-center gap-1.5 tracking-wide"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Right Bar: Theme Toggle + Menu */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-[#F4F5FB] dark:bg-[#151940] border border-[#E2E6F2] dark:border-[#262C6A] text-[#53587A] dark:text-[#A6AECB]"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#3DDBB0]" />
              ) : (
                <Moon className="w-4 h-4 text-[#53587A]" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#F4F5FB] dark:bg-[#151940] border border-[#E2E6F2] dark:border-[#262C6A] text-[#53587A] dark:text-[#A6AECB]"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white dark:bg-[#0E1030] border-b border-[#E2E6F2] dark:border-[#262C6A] px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-lg font-medium text-[#0E1030] dark:text-[#F4F5FB] flex items-center justify-between py-2 border-b border-[#E2E6F2] dark:border-[#262C6A]"
                >
                  <span>{link.name}</span>
                </a>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenConsultation) {
                    onOpenConsultation();
                  } else {
                    handleNavClick('#contact');
                  }
                }}
                className="w-full mt-2 py-3 rounded-full font-bold text-sm bg-[#5B4BFF] text-white flex items-center justify-center gap-2 hover:bg-[#4A3AF0]"
              >
                <span>Work With Us</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
