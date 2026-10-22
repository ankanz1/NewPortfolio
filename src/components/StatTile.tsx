"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface StatTileProps {
  label: string;
  value: string;
  description: string;
}

export default function StatTile({ label, value, description }: StatTileProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/10 hover:border-foreground/20 transition-colors"
    >
      <p className="text-muted text-xs font-medium mb-1">{label}</p>
      <h3 className="text-3xl font-bold text-foreground mb-2">{value}</h3>
      <p className="text-muted text-xs">{description}</p>
    </motion.div>
  );
}
