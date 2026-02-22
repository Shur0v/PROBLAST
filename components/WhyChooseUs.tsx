'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Leaf, Award, HardHat, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    title: 'Fully Licensed & Insured',
    description: 'Rest easy knowing your property is protected by a professional, fully insured team.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast Turnaround',
    description: 'We respect your time. Most residential projects are completed in a single day.',
    icon: Clock,
  },
  {
    title: 'Eco-Friendly Solutions',
    description: 'We use biodegradable cleaning agents that are safe for your family, pets, and plants.',
    icon: Leaf,
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'We don&apos;t leave until you are 100% satisfied with the results of our work.',
    icon: ThumbsUp,
  },
  {
    title: 'Industrial Equipment',
    description: 'We use professional-grade machinery that delivers results consumer units can&apos;t match.',
    icon: HardHat,
  },
  {
    title: 'Expert Technicians',
    description: 'Our team is trained in the latest surface-safe cleaning techniques for all materials.',
    icon: Award,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#001F3F] uppercase tracking-[0.2em] mb-4">The ProBlast Advantage</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-stone-900 leading-tight">
            WHY PROPERTY OWNERS <br />
            <span className="text-stone-400">TRUST OUR TEAM</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center shrink-0 text-[#001F3F]">
                <benefit.icon size={24} />
              </div>
              <div>
                <h4 className="text-lg font-display font-bold text-stone-900 mb-2">{benefit.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
