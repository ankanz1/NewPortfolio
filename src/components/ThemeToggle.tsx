"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      onClick={() => {
        console.log("Current theme:", theme);
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
      className="fixed top-8 right-8 z-[100] p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-zinc-400 hover:text-white transition-all hover:scale-110 active:scale-95 shadow-xl dark:bg-black/10 dark:border-white/10"
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 0 : 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.div>
    </motion.button>
  );
}
