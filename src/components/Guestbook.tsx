"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Guestbook() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Demo mode)');
    setMessage('');
  };

  return (
    <div className="space-y-8">
      <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
        <h3 className="text-xl font-semibold mb-6">Leave a note</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Your name" 
              className="px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-white transition-colors text-sm"
            />
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-white transition-colors text-sm"
            />
          </div>
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..." 
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-white transition-colors text-sm"
          />
          <button 
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-colors text-sm"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['Amazing work!', 'Love the design!', 'Can we collaborate?', 'Great portfolio!'].map((msg, i) => (
          <div key={i} className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <p className="text-sm text-zinc-300">"{msg}"</p>
            <p className="text-xs text-zinc-500 mt-2">— Guest {i + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
