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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative"
      >
        {/* Trigger Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "px-6 py-3 rounded-full bg-white text-black font-medium text-sm transition-all duration-300 shadow-lg",
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        >
          {isOpen ? "Close" : "Open Menu"}
        </motion.button>

        {/* Dock Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="flex items-center gap-2 p-2 rounded-3xl bg-zinc-900/80 backdrop-blur-md border border-zinc-800 shadow-2xl"
            >
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.id} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group relative p-3 rounded-2xl text-zinc-400 hover:text-white transition-colors duration-200 hover:bg-zinc-800"
                >
                  <item.icon className="w-5 h-5" />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-zinc-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {item.label}
                  </span>
                </Link>
              ))}
              
              <div className="w-px h-6 bg-zinc-800 mx-1" />
              
              <button 
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-2xl text-zinc-400 hover:text-white transition-colors duration-200 hover:bg-zinc-800"
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
