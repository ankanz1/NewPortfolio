"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
            Xevrion
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-medium">
            Developer Relations Engineer
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>Based in Earth</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe className="w-4 h-4" />
            <span>Working Globally</span>
          </div>
          <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            <Calendar className="w-4 h-4 text-green-500" />
            <span className="text-zinc-300">Available for projects</span>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-colors">
            Book a call
          </button>
          <button className="px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold border border-zinc-800 hover:bg-zinc-800 transition-colors">
            Say hi
          </button>
        </div>
      </motion.div>
    </section>
  );
}
