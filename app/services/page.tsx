'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { Droplets, Zap, Building2, Home, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'High-Pressure Washing',
    description: 'Our industrial-grade pressure washing systems remove the toughest stains, mold, and grime from any hard surface.',
    features: ['Driveways & Walkways', 'Siding & Brickwork', 'Pool Decks & Patios', 'Fence Restoration'],
    icon: Droplets,
    image: 'https://picsum.photos/seed/pw/800/600',
    color: 'bg-blue-600'
  },
  {
    title: 'Precision Sandblasting',
    description: 'Abrasive cleaning for metal restoration, brick stripping, and heavy-duty concrete preparation.',
    features: ['Metal Gate Restoration', 'Brick Paint Removal', 'Concrete Etching', 'Industrial Machinery'],
    icon: Zap,
    image: 'https://picsum.photos/seed/sb/800/600',
    color: 'bg-orange-600'
  },
  {
    title: 'Commercial Maintenance',
    description: 'Keep your business looking professional with our scheduled maintenance programs for commercial properties.',
    features: ['Parking Lot Cleaning', 'Storefront Washing', 'Graffiti Removal', 'Warehouse Floors'],
    icon: Building2,
    image: 'https://picsum.photos/seed/cm/800/600',
    color: 'bg-[#001F3F]'
  },
  {
    title: 'Residential Soft Wash',
    description: 'A low-pressure cleaning method combined with specialized solutions to safely clean delicate surfaces.',
    features: ['Roof Cleaning', 'Stucco & Painted Siding', 'Window Perimeters', 'Gutter Cleaning'],
    icon: Home,
    image: 'https://picsum.photos/seed/sw/800/600',
    color: 'bg-green-600'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-[#001F3F] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-black mb-6">OUR SERVICES</h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            From residential driveways to industrial facilities, we provide the highest quality cleaning and restoration services in the region.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className={`absolute top-8 left-8 w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center shadow-xl`}>
                      <service.icon size={32} />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-4xl font-display font-black text-stone-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-stone-500 mb-10 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-stone-700 font-medium">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#001F3F] text-white px-8 py-4 rounded-xl font-bold hover:bg-navy-800 transition-all shadow-lg active:scale-95"
                  >
                    Get a Quote for this Service
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-[#001F3F] uppercase tracking-[0.2em] mb-4">Our Process</h2>
            <h3 className="text-4xl font-display font-black text-stone-900">HOW WE WORK</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Assessment', desc: 'We evaluate the surface material and level of grime to determine the best method.' },
              { step: '02', title: 'Preparation', desc: 'We protect surrounding areas, plants, and delicate fixtures before starting.' },
              { step: '03', title: 'Execution', desc: 'Our team performs the cleaning with precision, ensuring a uniform finish.' },
            ].map((item) => (
              <div key={item.step} className="relative p-8 rounded-3xl bg-stone-50 border border-stone-100">
                <div className="text-6xl font-display font-black text-stone-200 absolute top-4 right-8 leading-none">{item.step}</div>
                <h4 className="text-2xl font-display font-bold text-stone-900 mb-4 relative z-10">{item.title}</h4>
                <p className="text-stone-500 leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
