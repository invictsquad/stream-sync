import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Music2, Play, SkipForward, Volume2, ListMusic, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function Music() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Música (Copyright Free)</h1>
            <p className="text-muted-foreground">Trilhas sonoras seguras para sua live.</p>
         </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
         {/* Player */}
         <Card className="lg:col-span-2 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <CardContent className="relative z-10 p-8 flex flex-col md:flex-row gap-8 items-center">
               <div className="w-48 h-48 bg-black rounded-2xl shadow-2xl flex items-center justify-center border border-white/10">
                  <Music2 size={64} className="text-white/50" />
               </div>
               <div className="flex-1 w-full space-y-6">
                  <div>
                     <h2 className="text-2xl font-black italic uppercase text-white">Neon Highway</h2>
                     <p className="text-indigo-300 font-bold uppercase tracking-widest text-sm">Synthwave Collection Vol. 1</p>
                  </div>

                  <div className="space-y-2">
                     <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-1/3" />
                     </div>
                     <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>1:20</span>
                        <span>3:45</span>
                     </div>
                  </div>

                  <div className="flex items-center justify-center gap-6">
                     <Button size="icon" variant="ghost" className="text-white hover:text-primary"><ListMusic /></Button>
                     <Button size="icon" className="h-14 w-14 rounded-full btn-gold"><Play fill="currentColor" className="ml-1" /></Button>
                     <Button size="icon" variant="ghost" className="text-white hover:text-primary"><SkipForward /></Button>
                  </div>
               </div>
            </CardContent>
         </Card>

         {/* Playlist */}
         <Card className="bg-card/30 border-white/5 h-[400px] overflow-hidden flex flex-col">
            <div className="p-4 border-b border-white/5 flex justify-between items-center">
               <h3 className="font-black italic uppercase text-sm">Fila de Reprodução</h3>
               <Button size="icon" variant="ghost" className="h-6 w-6"><Plus size={14}/></Button>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
               {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer group">
                     <div className="w-8 h-8 bg-black/50 rounded flex items-center justify-center text-xs font-bold text-slate-500 group-hover:text-primary">
                        {i}
                     </div>
                     <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold truncate text-slate-300 group-hover:text-white">Cyberpunk City {i}</p>
                        <p className="text-[10px] text-slate-500">Artist Name</p>
                     </div>
                     <span className="text-[10px] font-mono text-slate-600">3:20</span>
                  </div>
               ))}
            </div>
         </Card>
      </div>
    </div>
  );
}
