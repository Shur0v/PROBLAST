'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-3xl shadow-2xl text-center"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-display font-black text-stone-900 mb-4">Message Sent!</h3>
        <p className="text-stone-500 mb-8">
          Thank you for reaching out. Our team will review your request and get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-[#001F3F] font-bold underline hover:text-navy-600"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-stone-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">Full Name</label>
          <input 
            required
            type="text"
            placeholder="John Doe"
            className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#001F3F]/20 focus:border-[#001F3F] transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">Phone Number</label>
          <input 
            required
            type="tel"
            placeholder="(123) 456-7890"
            className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#001F3F]/20 focus:border-[#001F3F] transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">Email Address</label>
          <input 
            required
            type="email"
            placeholder="john@example.com"
            className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#001F3F]/20 focus:border-[#001F3F] transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">Service Needed</label>
          <select 
            required
            className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#001F3F]/20 focus:border-[#001F3F] transition-all appearance-none"
          >
            <option value="">Select a service</option>
            <option value="pressure-washing">Pressure Washing</option>
            <option value="sandblasting">Sandblasting</option>
            <option value="commercial">Commercial Cleaning</option>
            <option value="soft-wash">Soft Wash</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-2 mb-10">
        <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">Project Details</label>
        <textarea 
          required
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#001F3F]/20 focus:border-[#001F3F] transition-all resize-none"
        />
      </div>

      <button 
        disabled={isLoading}
        type="submit"
        className="w-full bg-[#001F3F] text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-navy-800 transition-all shadow-xl shadow-navy-900/20 active:scale-[0.98] disabled:opacity-70"
      >
        {isLoading ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <span>Send Quote Request</span>
            <Send size={20} />
          </>
        )}
      </button>
      
      <p className="text-center text-stone-400 text-xs mt-6">
        By submitting, you agree to our privacy policy and terms of service.
      </p>
    </form>
  );
}
