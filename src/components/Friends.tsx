"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const FRIENDS = [
  { name: 'Dev Friend 1', role: 'Frontend Engineer', link: '#' },
  { name: 'Dev Friend 2', role: 'Backend Architect', link: '#' },
  { name: 'Dev Friend 3', role: 'Product Designer', link: '#' },
  { name: 'Dev Friend 4', role: 'Cloud Specialist', link: '#' },
];

export default function Friends() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {FRIENDS.map((friend, idx) => (
        <motion.a 
          key={idx}
          href={friend.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05 }}
          className="p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/10 hover:border-foreground/30 transition-all flex items-center justify-between group"
        >
          <div>
            <h4 className="text-sm font-medium text-foreground">{friend.name}</h4>
            <p className="text-xs text-muted">{friend.role}</p>
          </div>
          <ExternalLink className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
        </motion.a>
      ))}
    </div>
  );
}
