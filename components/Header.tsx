'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Instagram, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-white/15 backdrop-blur-md border-b border-white/20 py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-navy-900 flex items-center justify-center rounded-lg bg-[#001F3F]">
              <span className="text-white font-display font-bold text-xl">P</span>
            </div>
            <span className={`font-display font-bold text-xl tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white drop-shadow-md'}`}>
              PROBLAST
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${isScrolled
                    ? 'text-stone-700 hover:text-[#001F3F]'
                    : 'text-white/90 hover:text-white drop-shadow-sm'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isScrolled ? 'text-stone-600 hover:text-pink-600' : 'text-white/80 hover:text-white'}`}>
              <Instagram size={20} />
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 bg-[#001F3F] text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-navy-800 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-stone-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-stone-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-stone-900"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center gap-2 bg-[#001F3F] text-white py-4 rounded-xl font-bold"
                >
                  <Phone size={20} />
                  <span>Call (123) 456-7890</span>
                </a>
                <div className="flex justify-center gap-6 py-2">
                  <Instagram size={24} className="text-stone-600" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
