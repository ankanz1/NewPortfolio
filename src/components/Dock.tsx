"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Code, Award, BookOpen, MessageSquare, Users } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home, href: '/' },
  { id: 'work', label: 'Work', icon: Briefcase, href: '#work' },
  { id: 'projects', label: 'Projects', icon: Code, href: '#projects' },
  { id: 'achievements', label: 'Highlights', icon: Award, href: '#achievements' },
  { id: 'writing', label: 'Writing', icon: BookOpen, href: '#writing' },
  { id: 'guestbook', label: 'Guestbook', icon: MessageSquare, href: '#guestbook' },
  { id: 'friends', label: 'Friends', icon: Users, href: '#friends' },
];

export default function Dock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        className="relative flex flex-col items-center"
      >
        {/* Trigger Button - "Press to open" prompt style */}
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-wide transition-all hover:bg-white/20 shadow-xl"
            >
              Press to open the dock
            </motion.button>
          )}
        </AnimatePresence>

        {/* The Dock Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="flex items-center gap-2 p-2 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.id} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group relative p-3 rounded-2xl text-zinc-400 hover:text-white transition-all duration-200 hover:bg-white/10"
                >
                  <item.icon className="w-5 h-5" />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                    {item.label}
                  </span>
                </Link>
              ))}
              
              <div className="w-px h-6 bg-white/10 mx-1" />
              
              <button 
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-2xl text-zinc-400 hover:text-white transition-all duration-200 hover:bg-white/10"
              >
                <span className="text-xs font-bold">✕</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
