import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ListVideo, Plus, MoreHorizontal, PlaySquare } from 'lucide-react';

export default function Playlists() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Coleções</h1>
            <p className="text-muted-foreground">Organize seus vídeos em séries e playlists.</p>
         </div>
         <Button className="btn-gold font-black uppercase"><Plus size={16} className="mr-2"/> Nova Coleção</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
         {[1, 2, 3, 4].map(i => (
            <Card key={i} className="bg-card/30 border-white/5 overflow-hidden group hover:border-primary/50 transition-colors cursor-pointer">
               <div className="aspect-video bg-black/40 relative flex items-center justify-center">
                  <ListVideo size={48} className="text-white/20 group-hover:text-primary transition-colors" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                     <div className="flex items-center gap-2 text-white text-xs font-bold uppercase">
                        <PlaySquare size={14} /> 12 Vídeos
                     </div>
                  </div>
               </div>
               <CardContent className="p-4 flex justify-between items-start">
                  <div>
                     <h3 className="font-black italic uppercase text-lg">Melhores Momentos {2020 + i}</h3>
                     <p className="text-xs text-slate-500">Atualizado há 2 dias</p>
                  </div>
                  <Button size="icon" variant="ghost"><MoreHorizontal size={16}/></Button>
               </CardContent>
            </Card>
         ))}
      </div>
    </div>
  );
}
