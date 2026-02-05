import React from 'react';
import { Play, Calendar, Clock, MoreVertical } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MOCK_VODS = [
  { id: 1, title: "Maratona 24h - Parte 1", views: "45K", duration: "8:00:00", thumb: "https://i.pravatar.cc/300?u=vod1", date: "Ontem" },
  { id: 2, title: "Ranked com Subs", views: "12K", duration: "4:30:20", thumb: "https://i.pravatar.cc/300?u=vod2", date: "3 dias atrás" },
  { id: 3, title: "Testando nova atualização", views: "8.5K", duration: "2:15:00", thumb: "https://i.pravatar.cc/300?u=vod3", date: "1 semana atrás" },
];

export function VodList() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-black italic text-white uppercase flex items-center gap-2">
         <Play size={20} className="text-primary" /> Transmissões Passadas
      </h3>

      <div className="space-y-4">
        {MOCK_VODS.map((vod) => (
          <div key={vod.id} className="flex flex-col md:flex-row gap-4 bg-secondary/30 p-4 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
            <div className="w-full md:w-48 aspect-video bg-black relative rounded-xl overflow-hidden shrink-0">
               <img src={vod.thumb} alt={vod.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={32} className="text-primary fill-primary" />
               </div>
               <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-bold text-white">
                 {vod.duration}
               </div>
            </div>

            <div className="flex-1 py-1">
               <div className="flex justify-between items-start">
                  <h4 className="text-sm font-black uppercase italic text-white group-hover:text-primary transition-colors">{vod.title}</h4>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500">
                    <MoreVertical size={16} />
                  </Button>
               </div>
               <p className="text-xs text-slate-400 mt-1 line-clamp-2">Assista a gravação completa da live. Momentos épicos e muita gameplay.</p>

               <div className="flex items-center gap-4 mt-4 text-[10px] text-slate-500 font-bold">
                  <span className="flex items-center gap-1"><Play size={12} /> {vod.views} Visualizações</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {vod.date}</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
