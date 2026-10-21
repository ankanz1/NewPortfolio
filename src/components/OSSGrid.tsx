"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const REPOS = [
  { name: 'deno', desc: 'Secure runtime for JavaScript and TypeScript', link: 'https://github.com/denoland/deno', stars: '90k+' },
  { name: 'nuxt', desc: 'The Intuitive Vue Framework', link: 'https://github.com/nuxt/nuxt', stars: '60k+' },
  { name: 'breakscale', desc: 'System design simulator', link: '#', stars: '1k+' },
  { name: 'gyotaku', desc: 'Searchable screenshots', link: '#', stars: '500+' },
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all group flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-medium">{repo.name}</h4>
              <p className="text-xs text-zinc-500">{repo.desc}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-500">{repo.stars} stars</span>
            <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}
