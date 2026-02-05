import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Scissors, Play, Pause, Save } from 'lucide-react';

export function ClipsTrimmer() {
  const [playing, setPlaying] = useState(false);
  const [range, setRange] = useState([10, 50]); // Segundos

  return (
    <Card className="bg-secondary/30 border-white/5 h-full">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Scissors size={16} className="text-primary" /> Editor de Clips
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
          <div className="aspect-video bg-black rounded-xl relative overflow-hidden group">
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[10px] text-slate-500 font-mono">PREVIEW VIDEO PLAYER</span>
             </div>
             {/* Timeline Overlay */}
             <div className="absolute bottom-4 left-4 right-4 bg-black/50 p-2 rounded-lg backdrop-blur-sm">
                <div className="flex justify-between text-[9px] font-mono text-slate-400 mb-1">
                   <span>{range[0]}s</span>
                   <span>{range[1]}s</span>
                </div>
                <Slider defaultValue={[10, 50]} max={60} step={1} onValueChange={setRange} className="py-2" />
             </div>
          </div>

          <div className="flex items-center justify-between gap-4">
             <Button
                variant="secondary"
                size="icon"
                className="h-10 w-10 shrink-0"
                onClick={() => setPlaying(!playing)}
             >
                {playing ? <Pause size={16} /> : <Play size={16} />}
             </Button>
             <div className="space-y-1 flex-1">
                 <p className="text-[10px] font-bold text-slate-300 uppercase">Duração: {range[1] - range[0]}s</p>
                 <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[60%]"></div>
                 </div>
             </div>
             <Button className="h-10 px-4 btn-gold text-[10px] shrink-0">
                <Save size={14} className="mr-2" /> Salvar
             </Button>
          </div>
       </CardContent>
    </Card>
  );
}
