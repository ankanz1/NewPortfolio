"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Camera } from 'lucide-react';
import { cn } from '@/lib/utils';

const ACHIEVEMENTS = [
  {
    title: "Hack4Bengal 4.0",
    description: "Collaborative product development and rapid prototyping in high-pressure environments.",
    icon: Zap,
    color: "text-blue-500"
  },
  {
    title: "Aperture Alchemist",
    description: "Coordinator/Secretary of the University Photography Club, merging visual arts with leadership.",
    icon: Camera,
    color: "text-purple-500"
  },
  {
    title: "Creative Engineering",
    description: "Combining AI, 3D graphics (Three.js), and interactive design to build useful digital products.",
    icon: Star,
    color: "text-yellow-500"
  },
  {
    title: "Google Solution Challenge",
    description: "Developing technology-based solutions to solve meaningful real-world problems.",
    icon: Trophy,
    color: "text-orange-500"
  },
];

export default function AchievementList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {ACHIEVEMENTS.map((item, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/10 hover:border-foreground/20 transition-colors"
        >
          <item.icon className={cn("w-8 h-8 mb-4", item.color)} />
          <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
          <p className="text-muted text-sm leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
