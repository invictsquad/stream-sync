import React from 'react';
import { Button } from "@/components/ui/button";
import { Hash } from 'lucide-react';
import { useParams } from 'react-router-dom';

export default function TagDetail() {
  const { id } = useParams();
  const tagName = id || "FPS";

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
       <div className="flex items-center gap-4 border-b border-white/10 pb-8">
          <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center">
             <Hash size={40} className="text-zinc-500" />
          </div>
          <div>
             <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white">#{tagName}</h1>
             <p className="text-zinc-500 font-bold">Explorando conteúdo com esta tag.</p>
          </div>
          <Button variant="outline" className="ml-auto">Seguir Tag</Button>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="group cursor-pointer">
                  <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden mb-3 relative group-hover:ring-2 ring-primary transition-all">
                      <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">Ao Vivo</div>
                      <div className="absolute bottom-2 left-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">3.2K Viewers</div>
                  </div>
                  <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-zinc-800" />
                      <div>
                          <h3 className="font-bold text-white text-sm line-clamp-1 group-hover:text-primary">Jogando com a tag #{tagName}</h3>
                          <p className="text-xs text-zinc-500">Streamer_{i}</p>
                          <div className="flex gap-1 mt-1">
                             <span className="text-[10px] bg-primary/10 text-primary px-1 rounded font-bold">#{tagName}</span>
                             <span className="text-[10px] bg-zinc-800 text-zinc-400 px-1 rounded font-bold">Portugues</span>
                          </div>
                      </div>
                  </div>
              </div>
           ))}
       </div>
    </div>
  );
}
