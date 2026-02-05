import React, { useState } from 'react';
import { Timer, Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function SubathonTimer() {
  const [active, setActive] = useState(false);
  const [secondsPerSub, setSecondsPerSub] = useState("300");

  return (
    <Card className="bg-secondary/30 border border-white/5 h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-black uppercase italic flex items-center gap-2 text-primary">
          <Timer size={16} /> Subathon Timer
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
         <div className="bg-black/40 p-4 rounded-xl text-center border border-white/5">
            <span className="text-4xl font-mono font-bold text-white tracking-widest">24:00:00</span>
            <p className="text-[9px] text-slate-500 uppercase font-bold mt-1">Tempo Restante</p>
         </div>

         <div className="space-y-2">
             <Label className="text-[10px] font-black uppercase text-slate-400">Segundos por Sub</Label>
             <Input value={secondsPerSub} onChange={(e) => setSecondsPerSub(e.target.value)} className="h-8 bg-black/20 text-xs font-mono" />
         </div>

         <div className="flex gap-2">
            <Button size="sm" className={`flex-1 h-8 text-[10px] uppercase font-black ${active ? 'bg-red-500 hover:bg-red-600' : 'bg-emerald-500 hover:bg-emerald-600'} text-black`} onClick={() => setActive(!active)}>
               {active ? <><Pause size={12} className="mr-1"/> Pausar</> : <><Play size={12} className="mr-1"/> Iniciar</>}
            </Button>
            <Button size="icon" variant="secondary" className="h-8 w-8"><RotateCcw size={12} /></Button>
         </div>
      </CardContent>
    </Card>
  );
}
