import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Upload } from 'lucide-react';

export function TrailerUploader() {
  return (
    <Card className="bg-secondary/30 border-white/5 h-full">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Film size={16} className="text-primary" /> Trailer do Canal
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
          <div className="aspect-video bg-black/50 rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-white/5 transition-colors">
             <Upload className="mx-auto text-slate-500 mb-2" size={24} />
             <p className="text-[10px] text-slate-500 font-bold uppercase">Carregar vídeo (MP4, Max 60s)</p>
          </div>
          <div className="flex items-center justify-between">
             <p className="text-[9px] text-slate-500 uppercase font-bold">Exibido para novos visitantes quando você está offline.</p>
             <Button size="sm" className="h-7 text-[9px] btn-gold">Publicar</Button>
          </div>
       </CardContent>
    </Card>
  );
}
