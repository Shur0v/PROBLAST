'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-[#001F3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-display font-black mb-6">GET IN TOUCH</h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Have a question or ready to start your project? We&apos;re here to help. Reach out via the form or contact us directly.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-2xl font-display font-black text-stone-900 mb-8">CONTACT INFORMATION</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                      <Phone className="text-[#001F3F]" />
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest text-stone-400 mb-1">Call Us Directly</div>
                      <div className="text-xl font-bold text-stone-900 hover:text-[#001F3F] transition-colors">
                        <a href="tel:+1234567890">(123) 456-7890</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                      <Mail className="text-[#001F3F]" />
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest text-stone-400 mb-1">Email Us</div>
                      <div className="text-xl font-bold text-stone-900 hover:text-[#001F3F] transition-colors">
                        <a href="mailto:info@problast.com">info@problast.com</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                      <MapPin className="text-[#001F3F]" />
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest text-stone-400 mb-1">Our Location</div>
                      <div className="text-xl font-bold text-stone-900">123 Industrial Way, Abu Dhabi, UAE</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-display font-black text-stone-900 mb-8">BUSINESS HOURS</h2>
                <div className="bg-white p-8 rounded-3xl shadow-sm space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-500">Monday - Friday</span>
                    <span className="font-bold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-500">Saturday</span>
                    <span className="font-bold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-500">Sunday</span>
                    <span className="text-[#001F3F] font-bold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div>
                <h2 className="text-2xl font-display font-black text-stone-900 mb-8">FOLLOW US</h2>
                <div className="flex gap-4">
                  <a href="#" className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center hover:bg-[#001F3F] hover:text-white transition-all group">
                    <Instagram className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center hover:bg-[#001F3F] hover:text-white transition-all group">
                    <Facebook className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center hover:bg-[#001F3F] hover:text-white transition-all group">
                    <MessageSquare className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:col-span-7">
              <div className="mb-10">
                <h2 className="text-2xl font-display font-black text-stone-900 mb-4">REQUEST A FREE QUOTE</h2>
                <p className="text-stone-500">Provide your details below and we&apos;ll get back to you with a competitive estimate.</p>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-stone-200 relative overflow-hidden grayscale">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-stone-400 mx-auto mb-4" />
            <p className="text-stone-500 font-bold">Google Maps Integration Placeholder</p>
            <p className="text-stone-400 text-sm">123 Industrial Way, Abu Dhabi</p>
          </div>
        </div>
        {/* In a real app, you'd embed the Google Maps iframe here */}
      </section>

      <Footer />
    </main>
  );
}
