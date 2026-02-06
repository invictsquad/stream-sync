import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Signal, Wifi } from 'lucide-react';

export function StreamHealthOverlay() {
  return (
    <Card className="bg-secondary/30 border-white/5">
      <CardHeader>
        <CardTitle className="text-sm font-black italic uppercase text-slate-300">Saúde da Stream</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-2">
        <div className="bg-black/20 p-2 rounded text-center">
            <div className="flex justify-center mb-1"><Activity size={16} className="text-green-500" /></div>
            <div className="text-lg font-bold text-white">60</div>
            <div className="text-[10px] text-zinc-500 uppercase">FPS</div>
        </div>
        <div className="bg-black/20 p-2 rounded text-center">
            <div className="flex justify-center mb-1"><Wifi size={16} className="text-green-500" /></div>
            <div className="text-lg font-bold text-white">6000</div>
            <div className="text-[10px] text-zinc-500 uppercase">Kbps</div>
        </div>
        <div className="bg-black/20 p-2 rounded text-center">
            <div className="flex justify-center mb-1"><Signal size={16} className="text-green-500" /></div>
            <div className="text-lg font-bold text-white">0%</div>
            <div className="text-[10px] text-zinc-500 uppercase">Queda</div>
        </div>
      </CardContent>
    </Card>
  );
}
