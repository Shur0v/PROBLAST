'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const projects = [
  {
    id: '1',
    title: 'Driveway Restoration',
    location: 'Abu Dhabi',
    serviceType: 'Pressure Washing',
    before: 'https://picsum.photos/seed/d1/800/600',
    after: 'https://www.freelancer.com/fs/download-api.php?type=contest&id=2704824&filename=IMG_20260202_204549.jpg',
  },
  {
    id: '2',
    title: 'Brick Wall Sandblast',
    location: 'Dubai',
    serviceType: 'Sandblasting',
    before: 'https://picsum.photos/seed/b1/800/600',
    after: 'https://www.freelancer.com/fs/download-api.php?type=contest&id=2704824&filename=IMG_20260105_191032_908.jpg',
  },
  {
    id: '3',
    title: 'Deck Deep Clean',
    location: 'Sharjah',
    serviceType: 'Soft Wash',
    before: 'https://picsum.photos/seed/dk1/800/600',
    after: 'https://www.freelancer.com/fs/download-api.php?type=contest&id=2704824&filename=IMG_20260128_184906_864.jpg',
  }
];

export default function BeforeAfterGallery() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section id="gallery" className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-[#FFD700] uppercase tracking-[0.2em] mb-4">Project Showcase</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black leading-tight">
            REAL RESULTS <br />
            <span className="text-white/40">BEFORE & AFTER</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setSliderPos(50);
              }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image 
                  src={project.after}
                  alt={project.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white text-stone-900 p-4 rounded-full">
                    <Maximize2 size={24} />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-[#FFD700] text-[#001F3F] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {project.serviceType}
                </div>
              </div>
              <h4 className="text-xl font-display font-bold mb-1">{project.title}</h4>
              <p className="text-white/50 text-sm">{project.location}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox with Slider */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            >
              <X size={32} />
            </button>

            <div className="max-w-5xl w-full">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-stone-800">
                {/* Before Image */}
                <Image 
                  src={selectedProject.before}
                  alt="Before"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* After Image (Clipped) */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
                >
                  <Image 
                    src={selectedProject.after}
                    alt="After"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Slider UI */}
                <div 
                  className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-stone-900">
                    <ChevronLeft size={16} />
                    <ChevronRight size={16} />
                  </div>
                </div>

                {/* Range Input Overlay */}
                <input 
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={handleSliderChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                />

                {/* Labels */}
                <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest pointer-events-none">
                  Before
                </div>
                <div className="absolute bottom-6 right-6 bg-[#FFD700] px-4 py-2 rounded-lg text-[#001F3F] text-xs font-bold uppercase tracking-widest pointer-events-none">
                  After
                </div>
              </div>

              <div className="mt-8 flex justify-between items-end">
                <div>
                  <h2 className="text-3xl font-display font-black mb-2">{selectedProject.title}</h2>
                  <div className="flex gap-4 text-white/50 text-sm">
                    <span>{selectedProject.location}</span>
                    <span>•</span>
                    <span>{selectedProject.serviceType}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="bg-white text-stone-900 px-8 py-3 rounded-xl font-bold hover:bg-stone-200 transition-colors"
                >
                  Close View
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
