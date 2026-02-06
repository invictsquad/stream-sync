import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Heart } from 'lucide-react';
import { useParams } from 'react-router-dom';

export default function CategoryDetail() {
  const { id } = useParams();
  const gameName = id ? id.replace(/-/g, ' ').toUpperCase() : "CS2"; // Mock logic

  return (
    <div className="min-h-screen bg-background">
       {/* Hero Banner */}
       <div className="h-64 md:h-80 relative">
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000"
            alt="Game Cover"
            className="w-full h-full object-cover opacity-40 mask-gradient-bottom"
          />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex items-end gap-6">
             <div className="w-32 h-44 bg-black rounded-xl border border-white/10 shadow-2xl relative overflow-hidden hidden md:block">
                 <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400" className="w-full h-full object-cover" />
             </div>
             <div>
                 <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white drop-shadow-lg">{gameName}</h1>
                 <div className="flex items-center gap-4 mt-2 text-zinc-300 font-bold">
                     <span className="flex items-center gap-1"><Users size={16}/> 142K Espectadores</span>
                     <span className="flex items-center gap-1"><Heart size={16}/> 2.5M Seguidores</span>
                     <Badge variant="secondary">FPS</Badge>
                     <Badge variant="secondary">Shooter</Badge>
                 </div>
             </div>
             <div className="ml-auto flex gap-2">
                 <Button className="btn-gold font-black uppercase">Seguir</Button>
             </div>
          </div>
       </div>

       {/* Content */}
       <div className="max-w-7xl mx-auto p-4 md:p-8 pb-24 space-y-8">
           <h2 className="text-2xl font-black italic uppercase">Canais ao Vivo</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                  <div key={i} className="group cursor-pointer">
                      <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden mb-3 relative group-hover:ring-2 ring-primary transition-all">
                          {/* Thumbnail Mock */}
                          <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">Ao Vivo</div>
                          <div className="absolute bottom-2 left-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">12K Viewers</div>
                      </div>
                      <div className="flex gap-3">
                          <div className="w-10 h-10 rounded-full bg-zinc-800" />
                          <div>
                              <h3 className="font-bold text-white text-sm line-clamp-1 group-hover:text-primary">Título da live jogando {gameName}</h3>
                              <p className="text-xs text-zinc-500">StreamerName</p>
                          </div>
                      </div>
                  </div>
              ))}
           </div>
       </div>
    </div>
  );
}
