'use client';

import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#FFD700] flex items-center justify-center rounded-lg">
                <span className="text-[#001F3F] font-display font-bold text-xl">P</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                PROBLAST
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed">
              Professional industrial-grade cleaning services. We bring surfaces back to life with precision and care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FFD700] hover:text-[#001F3F] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FFD700] hover:text-[#001F3F] transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-stone-400 hover:text-[#FFD700] transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="text-stone-400 hover:text-[#FFD700] transition-colors text-sm">Services</Link></li>
              <li><Link href="/#gallery" className="text-stone-400 hover:text-[#FFD700] transition-colors text-sm">Gallery</Link></li>
              <li><Link href="/contact" className="text-stone-400 hover:text-[#FFD700] transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#FFD700] shrink-0" />
                <a href="tel:+1234567890" className="text-stone-400 hover:text-white transition-colors text-sm">(123) 456-7890</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#FFD700] shrink-0" />
                <a href="mailto:info@problast.com" className="text-stone-400 hover:text-white transition-colors text-sm">info@problast.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#FFD700] shrink-0" />
                <span className="text-stone-400 text-sm">123 Industrial Way, Abu Dhabi, UAE</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Business Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-center justify-between text-sm">
                <span className="text-stone-400">Mon - Fri</span>
                <span className="font-bold">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-stone-400">Saturday</span>
                <span className="font-bold">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-stone-400">Sunday</span>
                <span className="text-[#FFD700] font-bold">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-xs">
            © {new Date().getFullYear()} ProBlast & Wash. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-stone-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
