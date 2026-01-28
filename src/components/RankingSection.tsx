import React from 'react';
import { Trophy, Users, TrendingUp, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const TOP_STREAMERS = [
  { rank: 1, name: 'Gaules', viewers: '185.240', avatar: 'https://i.pravatar.cc/150?u=gaules', growth: '+12%' },
  { rank: 2, name: 'PodPah', viewers: '142.100', avatar: 'https://i.pravatar.cc/150?u=pod', growth: '+5%' },
  { rank: 3, name: 'Nobru', viewers: '98.450', avatar: 'https://i.pravatar.cc/150?u=nobru', growth: '+22%' },
  { rank: 4, name: 'JuliaCode', viewers: '15.300', avatar: 'https://i.pravatar.cc/150?u=julia', growth: '+8%' },
  { rank: 5, name: 'SmileyDev', viewers: '8.900', avatar: 'https://i.pravatar.cc/150?u=dev', growth: '+45%' },
];

export const RankingSection = () => {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg shadow-glow">
            <Trophy className="text-black" size={20} />
          </div>
          <h2 className="text-2xl font-black uppercase italic tracking-tighter">
            Clutch <span className="gradient-text">Elite Rank</span>
          </h2>
        </div>
        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Atualizado em tempo real</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Top 1 Highlight */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="lg:col-span-4 bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden"
        >
          <Crown className="absolute top-4 right-4 text-primary animate-bounce" size={32} />
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-primary p-1 shadow-glow-lg">
              <img src={TOP_STREAMERS[0].avatar} className="w-full h-full rounded-full object-cover" alt="" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-black font-black px-4 py-1 rounded-full text-sm italic">#1</div>
          </div>
          <h3 className="text-3xl font-black uppercase italic mb-2">{TOP_STREAMERS[0].name}</h3>
          <div className="flex items-center gap-2 text-primary font-bold">
            <Users size={18} /> {TOP_STREAMERS[0].viewers} assistindo agora
          </div>
        </motion.div>

        {/* Leaderboard List */}
        <div className="lg:col-span-8 space-y-3">
          {TOP_STREAMERS.slice(1).map((streamer, idx) => (
            <motion.div 
              key={streamer.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-secondary/50 border border-white/5 hover:border-primary/40 p-4 rounded-2xl flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                <span className="text-slate-600 font-black italic text-xl w-8">#{streamer.rank}</span>
                <img src={streamer.avatar} className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" alt="" />
                <div>
                  <h4 className="font-bold uppercase italic text-sm">{streamer.name}</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Influenciador Verificado</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-sm font-black text-slate-200 flex items-center gap-2 justify-end">
                    {streamer.viewers} <Users size={14} className="text-primary" />
                  </div>
                  <div className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                    <TrendingUp size={10} /> {streamer.growth}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};