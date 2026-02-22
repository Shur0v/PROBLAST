'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowUpRight } from 'lucide-react';

const locations = [
  { name: 'Abu Dhabi City', zone: 'Central' },
  { name: 'Yas Island', zone: 'North' },
  { name: 'Saadiyat Island', zone: 'North' },
  { name: 'Khalifa City', zone: 'Suburban' },
  { name: 'Al Reem Island', zone: 'Central' },
  { name: 'Dubai Marina', zone: 'Dubai' },
  { name: 'Downtown Dubai', zone: 'Dubai' },
  { name: 'Palm Jumeirah', zone: 'Dubai' },
];

export default function ServiceAreas() {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-[#001F3F] uppercase tracking-[0.2em] mb-4">Local Presence</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-stone-900 leading-tight mb-8">
              SERVING THE ENTIRE <br />
              <span className="text-stone-400">EMIRATES REGION</span>
            </h3>
            <p className="text-lg text-stone-500 mb-10 leading-relaxed">
              We provide mobile on-site services across Abu Dhabi and Dubai. Our specialized trucks are equipped to handle any residential or commercial project regardless of location.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {locations.map((loc, index) => (
                <motion.div 
                  key={loc.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm"
                >
                  <MapPin size={16} className="text-[#001F3F]" />
                  <span className="font-bold text-stone-900 text-sm">{loc.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-[#001F3F] rounded-[3rem] relative overflow-hidden p-12 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-full h-full opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center mb-8">
                  <MapPin size={32} className="text-[#001F3F]" />
                </div>
                <h4 className="text-3xl font-display font-black text-white mb-4">Don&apos;t see your area?</h4>
                <p className="text-white/60 leading-relaxed">
                  We often travel for larger commercial projects or multi-property residential bookings. Contact us to check availability.
                </p>
              </div>

              <div className="relative z-10">
                <a 
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 text-[#FFD700] font-bold text-lg group"
                >
                  Check Availability
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFD700] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
