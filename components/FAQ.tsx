'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How much does pressure washing cost?',
    answer: 'Pricing depends on the surface area, material, and level of cleaning required. We provide free, no-obligation quotes based on photos or a quick site visit. Most residential driveways start from a competitive flat rate.',
  },
  {
    question: 'Is sandblasting safe for brick walls?',
    answer: 'Yes, when performed by professionals. We adjust the pressure and abrasive media (like soda or fine sand) to match the hardness of your brick, ensuring we remove the grime or paint without damaging the structural integrity.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Most residential jobs like driveway cleaning or house washing take 2-4 hours. Larger commercial projects or complex sandblasting can take 1-2 days. We always provide a time estimate with our quote.',
  },
  {
    question: 'Do you provide your own water source?',
    answer: 'For most residential jobs, we connect to the property&apos;s water supply. However, for remote commercial sites, we can arrange for water tank trucks if needed. Please let us know if water access is an issue.',
  },
  {
    question: 'Is the cleaning solution safe for pets and plants?',
    answer: 'Absolutely. We use professional-grade, biodegradable cleaning solutions that are specifically designed to be safe for landscaping and animals once rinsed.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#001F3F] uppercase tracking-[0.2em] mb-4">Common Questions</h2>
          <h3 className="text-4xl font-display font-black text-stone-900">FREQUENTLY ASKED</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-3xl transition-all duration-300 ${
                activeIndex === index ? 'border-[#001F3F] bg-stone-50' : 'border-stone-100 bg-white'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <span className="text-lg font-display font-bold text-stone-900 pr-8">
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  activeIndex === index ? 'bg-[#001F3F] text-white' : 'bg-stone-100 text-stone-400'
                }`}>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 text-stone-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
