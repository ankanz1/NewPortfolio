"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Calendar, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-foreground">
            Ankan
          </h1>
          <p className="text-xl md:text-2xl text-muted font-medium max-w-2xl leading-relaxed tracking-tight">
            I'm a <span className="text-foreground font-semibold">CSE Student</span> at Sister Nivedita University and a <span className="text-foreground font-semibold">Creative Software Developer</span> exploring AI, interactive experiences, and emerging technology.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-foreground/10 bg-foreground/[0.03]">
            <MapPin className="w-4 h-4" />
            <span className="text-muted">Kolkata, West Bengal</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-foreground/10 bg-foreground/[0.03]">
            <Globe className="w-4 h-4" />
            <span className="text-muted">Based in India</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-foreground/20 bg-foreground/5">
            <Calendar className="w-4 h-4 text-green-500" />
            <span className="text-foreground/80">Open to internships</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-4">
          <div className="flex gap-4">
            <a 
              href="mailto:ankan.work01@gmail.com" 
              className="px-6 py-3 bg-foreground text-background rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
            <button className="px-6 py-3 bg-background text-foreground rounded-full font-semibold border border-foreground/20 hover:bg-foreground/5 transition-all hover:scale-105 active:scale-95">
              View Resume
            </button>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/ankanz1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-foreground/[0.03] border border-foreground/10 text-muted hover:text-foreground hover:bg-foreground/[0.08] transition-all hover:scale-110 active:scale-95"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ankan-mukherjee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-foreground/[0.03] border border-foreground/10 text-muted hover:text-foreground hover:bg-foreground/[0.08] transition-all hover:scale-110 active:scale-95"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/_ankz01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-foreground/[0.03] border border-foreground/10 text-muted hover:text-foreground hover:bg-foreground/[0.08] transition-all hover:scale-110 active:scale-95"
              title="X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
