'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Shield, Zap, Building2, Home, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Pressure Washing',
    description: 'Deep cleaning for driveways, decks, and siding using high-pressure water systems.',
    icon: Droplets,
    benefit: 'Eco-friendly & Surface Safe',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Sandblasting',
    description: 'Industrial-grade abrasive cleaning for metal, brick, and concrete restoration.',
    icon: Zap,
    benefit: 'Restores to Original Finish',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    title: 'Commercial Cleaning',
    description: 'Large-scale maintenance for parking lots, storefronts, and industrial facilities.',
    icon: Building2,
    benefit: 'Licensed & Insured Team',
    color: 'bg-navy-50 text-[#001F3F]'
  },
  {
    title: 'Residential Soft Wash',
    description: 'Gentle chemical cleaning for delicate surfaces like roofs and painted siding.',
    icon: Home,
    benefit: 'Prevents Surface Damage',
    color: 'bg-green-50 text-green-600'
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-[#001F3F] uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-stone-900 leading-tight">
              INDUSTRIAL STRENGTH <br />
              <span className="text-stone-400">FOR EVERY SURFACE</span>
            </h3>
          </div>
          <Link 
            href="/services" 
            className="group flex items-center gap-2 text-stone-900 font-bold hover:text-[#001F3F] transition-colors"
          >
            View All Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:bg-white hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-display font-bold text-stone-900 mb-3">{service.title}</h4>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="pt-6 border-t border-stone-200/60">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#001F3F]/40 block mb-1">Key Benefit</span>
                <span className="text-xs font-bold text-stone-900">{service.benefit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
