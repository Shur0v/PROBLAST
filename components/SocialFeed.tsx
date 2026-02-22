'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Play } from 'lucide-react';

const posts = [
  { id: 1, type: 'image', url: 'https://picsum.photos/seed/ig1/600/600' },
  { id: 2, type: 'video', url: 'https://picsum.photos/seed/ig2/600/600' },
  { id: 3, type: 'image', url: 'https://picsum.photos/seed/ig3/600/600' },
  { id: 4, type: 'image', url: 'https://picsum.photos/seed/ig4/600/600' },
  { id: 5, type: 'video', url: 'https://picsum.photos/seed/ig5/600/600' },
  { id: 6, type: 'image', url: 'https://picsum.photos/seed/ig6/600/600' },
];

export default function SocialFeed() {
  return (
    <section className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-[#FFD700] uppercase tracking-[0.2em] mb-4">Follow the Action</h2>
            <h3 className="text-4xl font-display font-black">LATEST FROM INSTAGRAM</h3>
          </div>
          <a 
            href="#" 
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-bold transition-all"
          >
            <Instagram size={20} className="text-[#FFD700]" />
            @problast_wash
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
              <Image 
                src={post.url}
                alt="Instagram post"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {post.type === 'video' ? <Play size={32} className="text-white fill-white" /> : <Instagram size={32} className="text-white" />}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm font-medium">Join 5,000+ followers seeing daily transformations.</p>
        </div>
      </div>
    </section>
  );
}
