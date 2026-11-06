'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Mail, Calendar, MapPin, Check, Loader2, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [selectedService, setSelectedService] = useState<string>(
    initialService || 'Custom Software (Mobile, Web, Desktop)'
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) {
      if (initialService.toLowerCase().includes('consultation')) {
        setSelectedService('Consultation');
      } else if (initialService.toLowerCase().includes('tutoring')) {
        setSelectedService('Tutoring');
      } else {
        setSelectedService('Custom Software (Mobile, Web, Desktop)');
      }
    }
  }, [initialService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: selectedService,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Contact submit error:', err);
      setErrorMessage(
        err.message || 'Something went wrong. Please try again or email us directly at support@inuviastudios.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Custom Software (Mobile, Web, Desktop)',
    'Consultation',
    'Tutoring'
  ];

  return (
    <section id="contact" className="py-24 relative bg-white dark:bg-[#0E1030] border-b border-[#E2E6F2] dark:border-[#262C6A] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#5B4BFF] dark:text-[#3DDBB0] block mb-3">
              Get in Touch
            </span>
            <h2
              className="text-3xl sm:text-5xl font-extrabold text-[#0E1030] dark:text-[#F4F5FB] tracking-tight mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Let's discuss your project or learning goals.
            </h2>
            <p className="text-sm text-[#53587A] dark:text-[#A6AECB] leading-relaxed mb-8">
              Whether you need end-to-end custom software built, an architectural consultation, or private developer tutoring, we are ready to help.
            </p>

            <div className="space-y-3.5 text-xs">
              <a
                href="mailto:support@inuviastudios.com"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#F4F5FB] dark:bg-[#151940] border border-[#E2E6F2] dark:border-[#262C6A] hover:border-[#5B4BFF]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1B1F4B] flex items-center justify-center text-[#5B4BFF] shrink-0 border border-[#E2E6F2] dark:border-[#262C6A] shadow-xs group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#53587A] dark:text-[#A6AECB]">Direct Email</div>
                  <div className="text-[#0E1030] dark:text-white font-bold group-hover:text-[#5B4BFF] transition-colors">support@inuviastudios.com</div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#F4F5FB] dark:bg-[#151940] border border-[#E2E6F2] dark:border-[#262C6A]">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1B1F4B] flex items-center justify-center text-[#12A17B] dark:text-[#3DDBB0] shrink-0 border border-[#E2E6F2] dark:border-[#262C6A] shadow-xs">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#53587A] dark:text-[#A6AECB]">Response Time</div>
                  <div className="text-[#0E1030] dark:text-white font-bold">Within 24 Hours • Mon-Fri</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#F4F5FB] dark:bg-[#151940] border border-[#E2E6F2] dark:border-[#262C6A]">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1B1F4B] flex items-center justify-center text-[#5B4BFF] shrink-0 border border-[#E2E6F2] dark:border-[#262C6A] shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#53587A] dark:text-[#A6AECB]">Collaboration</div>
                  <div className="text-[#0E1030] dark:text-white font-bold">Remote-First • Global Clients & Students</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#F4F5FB] dark:bg-[#151940] border border-[#E2E6F2] dark:border-[#262C6A] rounded-3xl p-6 sm:p-10 shadow-sm transition-colors duration-200">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-[#12A17B]/15 dark:bg-[#3DDBB0]/20 text-[#12A17B] dark:text-[#3DDBB0] border border-[#12A17B]/30 dark:border-[#3DDBB0]/40 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#0E1030] dark:text-white mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-xs text-[#53587A] dark:text-[#A6AECB] max-w-sm mx-auto mb-2 leading-relaxed">
                    Thank you, <strong>{formData.name || 'there'}</strong>! An email with your inquiry regarding <strong>{selectedService}</strong> has been routed to <strong>support@inuviastudios.com</strong>.
                  </p>
                  <p className="text-[11px] text-[#53587A] dark:text-[#A6AECB] max-w-sm mx-auto mb-6">
                    Our engineering team reviews all incoming inquiries and will reply to <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#1B1F4B] dark:bg-[#5B4BFF] text-xs font-semibold text-white hover:bg-[#242963] dark:hover:bg-[#4A3AF0] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-300 text-xs flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Unable to dispatch inquiry</div>
                        <div className="mt-0.5">{errorMessage}</div>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#53587A] dark:text-[#A6AECB] block mb-2">
                      I am interested in:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setSelectedService(service)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                            selectedService === service
                              ? 'bg-[#5B4BFF] text-white font-bold shadow-sm'
                              : 'bg-white dark:bg-[#0E1030] border border-[#D5DAEC] dark:border-[#262C6A] text-[#53587A] dark:text-[#A6AECB] hover:text-[#0E1030] dark:hover:text-white'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#53587A] dark:text-[#A6AECB] block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 rounded-2xl bg-white dark:bg-[#0E1030] border border-[#D5DAEC] dark:border-[#262C6A] text-[#0E1030] dark:text-[#F4F5FB] text-xs focus:outline-none focus:border-[#5B4BFF] placeholder-[#7A81A4] dark:placeholder-[#A6AECB]/40 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#53587A] dark:text-[#A6AECB] block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-2xl bg-white dark:bg-[#0E1030] border border-[#D5DAEC] dark:border-[#262C6A] text-[#0E1030] dark:text-[#F4F5FB] text-xs focus:outline-none focus:border-[#5B4BFF] placeholder-[#7A81A4] dark:placeholder-[#A6AECB]/40 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#53587A] dark:text-[#A6AECB] block mb-1">
                      Project or Learning Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      disabled={isSubmitting}
                      placeholder="Tell us about the software you want to build, the architectural questions you have, or the topics you want tutoring on..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-2xl bg-white dark:bg-[#0E1030] border border-[#D5DAEC] dark:border-[#262C6A] text-[#0E1030] dark:text-[#F4F5FB] text-xs focus:outline-none focus:border-[#5B4BFF] leading-relaxed placeholder-[#7A81A4] dark:placeholder-[#A6AECB]/40 disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full font-bold text-xs bg-[#5B4BFF] text-white hover:bg-[#4A3AF0] hover:shadow-[0_4px_25px_rgba(91,75,255,0.35)] transition-all flex items-center justify-center gap-2 group tracking-wide disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending to support@inuviastudios.com...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry to support@inuviastudios.com</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
