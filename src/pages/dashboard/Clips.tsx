import React from 'react';
import { ClipsGallery } from '@/components/stream/ClipsGallery';
import { Button } from "@/components/ui/button";
import { Scissors } from 'lucide-react';

export default function Clips() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Clipes</h1>
            <p className="text-muted-foreground">Gerencie os melhores momentos da sua stream.</p>
         </div>
         <Button className="btn-gold font-black uppercase">
            <Scissors size={16} className="mr-2" /> Criar Clipe (VOD)
         </Button>
      </div>

      <div className="bg-card/30 border border-white/5 p-6 rounded-3xl">
         <ClipsGallery />
      </div>
    </div>
  );
}
