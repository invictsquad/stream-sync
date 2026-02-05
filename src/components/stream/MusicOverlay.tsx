import React, { useState } from 'react';
import { Music2, Disc3, SkipForward, Volume2 } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

export function MusicOverlay() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="fixed bottom-4 left-4 z-40 bg-black/80 backdrop-blur-md border border-white/10 rounded-full pr-4 pl-1 py-1 flex items-center gap-3 shadow-2xl animate-in slide-in-from-bottom-10 duration-700">
       <div className={`w-10 h-10 rounded-full bg-secondary flex items-center justify-center relative overflow-hidden ${isPlaying ? 'animate-spin-slow' : ''}`}>
          <Disc3 size={24} className="text-primary" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 rounded-full" />
       </div>

       <div className="flex flex-col min-w-[120px]">
          <div className="flex items-center gap-2">
             <span className="text-[10px] font-black uppercase italic text-white leading-none">Midnight City</span>
             <Music2 size={8} className="text-primary animate-bounce" />
          </div>
          <span className="text-[8px] font-bold text-slate-400 uppercase leading-none mt-0.5">M83 • Hurry Up, We're Dreaming</span>
       </div>

       <div className="h-4 w-[1px] bg-white/10 mx-1" />

       <div className="flex items-center gap-1">
          <div className="flex gap-0.5 items-end h-3">
             <div className="w-0.5 bg-primary h-full animate-music-bar-1" />
             <div className="w-0.5 bg-primary h-2/3 animate-music-bar-2" />
             <div className="w-0.5 bg-primary h-1/2 animate-music-bar-3" />
          </div>
       </div>
    </div>
  );
}
