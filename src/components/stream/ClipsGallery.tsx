import React from 'react';
import { Play, Eye, Clock, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MOCK_CLIPS = [
  { id: 1, title: "ACE de Desert Eagle!", views: "12K", duration: "0:30", thumb: "https://i.pravatar.cc/300?u=clip1", date: "2 dias atrás" },
  { id: 2, title: "Bug engraçado no mapa", views: "5.4K", duration: "0:45", thumb: "https://i.pravatar.cc/300?u=clip2", date: "1 semana atrás" },
  { id: 3, title: "Rage quit ao vivo kkk", views: "102K", duration: "0:15", thumb: "https://i.pravatar.cc/300?u=clip3", date: "3 semanas atrás" },
  { id: 4, title: "Melhor jogada da partida", views: "1.2K", duration: "1:00", thumb: "https://i.pravatar.cc/300?u=clip4", date: "1 mês atrás" },
];

export function ClipsGallery() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-black italic text-white uppercase flex items-center gap-2">
         <Play size={20} className="text-primary" /> Melhores Momentos
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {MOCK_CLIPS.map((clip) => (
          <div key={clip.id} className="group relative bg-secondary/30 rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all cursor-pointer">
            <div className="aspect-video bg-black relative">
              <img src={clip.thumb} alt={clip.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-primary text-black rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-bold text-white">
                {clip.duration}
              </div>
              <div className="absolute top-2 left-2 bg-primary text-black px-1.5 py-0.5 rounded text-[8px] font-black uppercase">
                Clip
              </div>
            </div>

            <div className="p-3">
              <h4 className="text-xs font-black uppercase italic text-white line-clamp-1 group-hover:text-primary transition-colors">{clip.title}</h4>
              <div className="flex items-center justify-between mt-2 text-[10px] text-slate-500 font-bold">
                 <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Eye size={12} /> {clip.views}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {clip.date}</span>
                 </div>
                 <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400 hover:text-white">
                   <Share2 size={12} />
                 </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
