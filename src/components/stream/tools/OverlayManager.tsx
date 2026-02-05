import React from 'react';
import { Layout, Move } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function OverlayManager() {
  return (
    <Card className="bg-secondary/30 border border-white/5 h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-black uppercase italic flex items-center gap-2 text-primary">
          <Layout size={16} /> Editor de Overlay
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
         <div className="aspect-video bg-black/60 rounded-xl border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 opacity-10 pointer-events-none">
               {[...Array(16)].map((_, i) => <div key={i} className="border border-white/20"></div>)}
            </div>

            {/* Draggable Mock Items */}
            <div className="absolute top-4 left-4 w-32 h-20 bg-primary/20 border border-primary text-primary flex items-center justify-center rounded cursor-move">
               <span className="text-[9px] font-black uppercase">Alert Box</span>
            </div>

            <div className="absolute bottom-4 left-4 w-48 h-12 bg-fuchsia-500/20 border border-fuchsia-500 text-fuchsia-500 flex items-center justify-center rounded cursor-move">
               <span className="text-[9px] font-black uppercase">Last Subscriber</span>
            </div>

            <div className="absolute top-4 right-4 w-24 h-24 bg-emerald-500/20 border border-emerald-500 text-emerald-500 flex items-center justify-center rounded cursor-move">
               <span className="text-[9px] font-black uppercase">Webcam</span>
               <Move size={12} className="absolute bottom-1 right-1 opacity-50" />
            </div>
         </div>
         <p className="text-[9px] text-slate-500 text-center uppercase font-bold">Arraste os elementos para posicionar no seu OBS</p>
      </CardContent>
    </Card>
  );
}
