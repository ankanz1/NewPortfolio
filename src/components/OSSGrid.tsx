"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const REPOS = [
  { name: 'denoland/deno', desc: 'Secure runtime for JS and TS', link: 'https://github.com/denoland/deno', stats: '90k+ stars' },
  { name: 'nuxt/nuxt', desc: 'The Intuitive Vue Framework', link: 'https://github.com/nuxt/nuxt', stats: '60k+ stars' },
  { name: 'jj-vcs/jj', desc: 'A next-gen version control system', link: 'https://github.com/jj-vcs/jj', stats: '10k+ stars' },
  { name: 'breakscale', desc: 'System design simulator', link: '#', stats: '1k+ stars' },
];

export default function OSSGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {REPOS.map((repo, idx) => (
        <motion.a 
          key={idx}
          href={repo.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="p-5 rounded-3xl bg-foreground/[0.02] border border-foreground/10 hover:border-foreground/30 transition-all group flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
              <Github className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" />
            </div>
            <div>
              <h4 className="font-medium text-foreground group-hover:text-foreground transition-colors">{repo.name}</h4>
              <p className="text-xs text-muted">{repo.desc}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted group-hover:text-foreground transition-colors">{repo.stats}</span>
            <ExternalLink className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}
