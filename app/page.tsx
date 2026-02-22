'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Star } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Stats / Trust Bar */}
      <section className="bg-[#001F3F] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Completed', value: '1,200+' },
              { label: 'Happy Clients', value: '98%' },
              { label: 'Years Experience', value: '15+' },
              { label: 'Service Areas', value: '25+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-black text-[#FFD700] mb-1">{stat.value}</div>
                <div className="text-white/60 text-[10px] font-black uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesOverview />
      
      {/* Featured CTA Section */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#001F3F] rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight mb-8">
                  READY TO <br />
                  <span className="text-[#FFD700]">RESTORE YOUR PROPERTY?</span>
                </h2>
                <p className="text-xl text-white/70 mb-10 leading-relaxed">
                  Don&apos;t let dirt and grime devalue your investment. Get a professional grade clean that lasts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="bg-[#FFD700] text-[#001F3F] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    Get a Free Quote
                    <ArrowRight size={20} />
                  </Link>
                  <a 
                    href="tel:+1234567890"
                    className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <Phone size={20} />
                    Call (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-[#FFD700] text-[#FFD700]" />)}
                  </div>
                  <p className="text-xl text-white italic mb-6">
                    &quot;The difference was night and day. My driveway looks brand new and the team was incredibly professional. Highly recommend their sandblasting service!&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-stone-700" />
                    <div>
                      <div className="font-bold text-white">Ahmed Al-Mansoori</div>
                      <div className="text-white/50 text-sm">Homeowner, Abu Dhabi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BeforeAfterGallery />

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-sm font-bold text-[#001F3F] uppercase tracking-[0.2em] mb-4">Contact Us</h2>
              <h3 className="text-4xl md:text-6xl font-display font-black text-stone-900 leading-tight mb-8">
                LET&apos;S TALK <br />
                <span className="text-stone-400">ABOUT YOUR PROJECT</span>
              </h3>
              <p className="text-xl text-stone-500 mb-12 leading-relaxed">
                Fill out the form and we&apos;ll provide a detailed quote within 24 hours. For urgent requests, please call us directly.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-[#001F3F]" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-stone-400 mb-1">Call Us</div>
                    <div className="text-xl font-bold text-stone-900">(123) 456-7890</div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Star className="text-[#001F3F]" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-stone-400 mb-1">Service Area</div>
                    <div className="text-xl font-bold text-stone-900">Abu Dhabi, Dubai, Sharjah</div>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a 
          href="tel:+1234567890"
          className="w-full bg-[#001F3F] text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-navy-900/40 active:scale-95 transition-transform"
        >
          <Phone size={20} />
          <span>Get Free Quote</span>
        </a>
      </div>
    </main>
  );
}
