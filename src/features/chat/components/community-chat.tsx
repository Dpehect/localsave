'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, MapPin, Smile } from 'lucide-react';

const mockMessages = [
  { id: 1, user: 'Ali Osman', text: 'Bugün taze simit var mı?', time: '12:05' },
  { id: 2, user: 'Esnaf Fırın', text: 'Evet Ali Bey, 5 dakika önce fırından çıktı!', time: '12:06' },
  { id: 3, user: 'Zeynep Gül', text: 'Harika, ben de 2 tane ayırttım.', time: '12:10' },
];

export const CommunityChat = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState('');

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    setMessages([...messages, { id: Date.now(), user: 'Sen', text: input, time: 'Şimdi' }]);
    setInput('');
  };

  return (
    <div className="glass-card flex flex-col h-[600px] border-emerald-500/10 overflow-hidden">
      {/* Chat Header */}
      <div className="p-6 bg-white/[0.02] border-b border-white/5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
            <MapPin className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h4 className="font-bold text-white">Kadıköy Topluluk Odası</h4>
            <p className="text-[10px] text-emerald-500 font-mono uppercase tracking-widest">124 Aktif Üye</p>
          </div>
        </div>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4 scrollbar-hide">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col ${msg.user === 'Sen' ? 'items-end' : 'items-start'}`}
          >
            <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
              msg.user === 'Sen' 
                ? 'bg-emerald-600 text-white rounded-tr-none' 
                : 'bg-white/5 text-slate-300 border border-white/5 rounded-tl-none'
            }`}>
              {msg.user !== 'Sen' && <p className="text-[10px] font-black text-emerald-400 mb-1 uppercase">{msg.user}</p>}
              <p>{msg.text}</p>
            </div>
            <span className="text-[9px] text-slate-600 mt-1 font-mono uppercase">{msg.time}</span>
          </motion.div>
        ))}
      </div>

      {/* Chat Input */}
      <form onSubmit={sendMessage} className="p-4 bg-white/[0.02] border-t border-white/5 flex gap-3">
        <button type="button" className="p-3 text-slate-500 hover:text-emerald-400 transition-colors">
          <Smile size={20} />
        </button>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Mesajınızı yazın..."
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-white"
        />
        <button type="submit" className="bg-emerald-500 p-3 rounded-xl text-[#030711] hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};
