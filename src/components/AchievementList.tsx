"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const ACHIEVEMENTS = [
  {
    title: "1,000 GitHub stars in six days",
    description: "Rapid growth for a system design tool during a launch week.",
    icon: Star,
    color: "text-yellow-500"
  },
  {
    title: "Featured on Hacker News",
    description: "Reached the front page with a high-scale architecture simulator.",
    icon: Trophy,
    color: "text-orange-500"
  },
  {
    title: "Open Source Contributor",
    description: "Significant contributions to Deno, Nuxt, and other core web tools.",
    icon: Zap,
    color: "text-blue-500"
  }
];

export default function AchievementList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {ACHIEVEMENTS.map((item, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
        >
          <item.icon className={cn("w-8 h-8 mb-4", item.color)} />
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
