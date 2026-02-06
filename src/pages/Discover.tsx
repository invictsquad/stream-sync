import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Flame, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const RECOMMENDED = [
  { title: "Campeonato Brasileiro de LoL", streamer: "CBLOL", viewers: "120K", tag: "Esports", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000" },
  { title: "Speedrun de Minecraft", streamer: "SpeedRunnerZ", viewers: "5K", tag: "Minecraft", image: "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=1000" },
  { title: "Conversando com o Chat", streamer: "TiaGamer", viewers: "2K", tag: "Just Chatting", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000" },
];

export default function Discover() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center gap-3 mb-8">
         <div className="p-3 bg-red-500/10 rounded-2xl"><Flame className="text-red-500" size={32} /></div>
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Descobrir</h1>
            <p className="text-slate-500 font-bold">Conteúdo selecionado especialmente para você.</p>
         </div>
      </div>

      <section>
         <h2 className="text-xl font-black italic uppercase mb-4 flex items-center gap-2"><TrendingUp size={20} className="text-primary"/> Em Alta Agora</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECOMMENDED.map((item, i) => (
               <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-3 border border-white/5 group-hover:border-primary/50 transition-all">
                     <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                     <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">Ao Vivo</div>
                     <div className="absolute bottom-2 left-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> {item.viewers}
                     </div>
                  </div>
                  <div className="flex gap-3">
                     <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10" />
                     <div>
                        <h3 className="font-black italic uppercase leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-xs font-bold text-slate-500">{item.streamer}</p>
                        <Badge variant="secondary" className="mt-1 text-[10px] uppercase font-bold">{item.tag}</Badge>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
    </div>
  );
}
