'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [isAfter, setIsAfter] = useState(true);

  const beforeUrl = "https://chatgpt.com/backend-api/estuary/content?id=file_00000000957072098d52896689fc4e3f&ts=492163&p=fs&cid=1&sig=9c140b305bbfe38ff7053f2574cbb307af7f0136a6f63e320b00620dc42b0abf&v=0";
  const afterUrl = "https://chatgpt.com/backend-api/estuary/content?id=file_000000000fc8720691a3187a10a1736a&ts=492163&p=fs&cid=1&sig=4fe2776b377d2424595d91026ba5d439bf8a8d1c4824ba05d344c3cf661e63bc&v=0";

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with Before/After Toggle */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={isAfter ? afterUrl : beforeUrl}
          alt="Pressure washing background"
          fill
          className="object-cover transition-opacity duration-700"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#FFD700] text-[#001F3F] font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Industrial Grade Cleaning
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-[0.9] mb-6">
              BRING SURFACES <br />
              <span className="text-[#FFD700]">BACK TO LIFE</span>
            </h1>
            <p className="text-xl text-stone-200 mb-10 max-w-lg leading-relaxed">
              Professional Pressure Washing & Sandblasting for residential and commercial properties. Fast, safe, and guaranteed results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#FFD700] text-[#001F3F] px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/20 active:scale-95"
              >
                Request a Quote
                <ArrowRight size={20} />
              </Link>
              <Link 
                href="/services"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all active:scale-95"
              >
                View Services
              </Link>
            </div>
          </motion.div>

          {/* Trust Signals */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 flex flex-wrap gap-8 items-center"
          >
            <div className="flex items-center gap-2 text-white/60 text-sm font-medium uppercase tracking-wider">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Fully Insured
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm font-medium uppercase tracking-wider">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Licensed Pro
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm font-medium uppercase tracking-wider">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              5★ Rated
            </div>
          </motion.div>
        </div>
      </div>

      {/* Before/After Toggle UI */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex flex-col gap-4">
          <p className="text-white text-xs font-bold uppercase tracking-widest text-center">See the Difference</p>
          <div className="flex items-center gap-4">
            <span className={`text-xs font-bold ${isAfter ? 'text-[#FFD700]' : 'text-white/50'}`}>AFTER</span>
            <button 
              onClick={() => setIsAfter(!isAfter)}
              className="w-14 h-8 bg-white/20 rounded-full relative p-1 transition-colors"
            >
              <motion.div 
                animate={{ x: isAfter ? 0 : 24 }}
                className="w-6 h-6 bg-[#FFD700] rounded-full shadow-lg"
              />
            </button>
            <span className={`text-xs font-bold ${!isAfter ? 'text-[#FFD700]' : 'text-white/50'}`}>BEFORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
