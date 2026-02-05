import React, { useState, useEffect } from 'react';
import { Zap, ChevronRight, Gift, Users, Star } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

export function HypeTrainWidget() {
  const [level, setLevel] = useState(1);
  const [progress, setProgress] = useState(45);
  const [isActive, setIsActive] = useState(true);
  const [timeLeft, setTimeLeft] = useState(280);

  useEffect(() => {
    const interval = setInterval(() => {
       setProgress(p => {
          if (p >= 100) {
             setLevel(l => l + 1);
             return 0;
          }
          return p + 0.5;
       });
       setTimeLeft(t => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isActive) return null;

  const formatTime = (s: number) => {
     const min = Math.floor(s / 60);
     const sec = s % 60;
     return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div className="bg-gradient-to-r from-violet-900/80 to-fuchsia-900/80 rounded-xl p-3 border border-fuchsia-500/30 relative overflow-hidden mb-4 animate-in slide-in-from-top-4 duration-500">
       <div className="absolute top-0 right-0 p-2 opacity-10">
          <Zap size={64} />
       </div>

       <div className="relative z-10 flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
             <div className="bg-white text-fuchsia-900 rounded-lg p-1">
                <Zap size={16} className="fill-current" />
             </div>
             <div>
                <h4 className="text-xs font-black italic uppercase text-white leading-none">Hype Train</h4>
                <p className="text-[9px] font-bold text-fuchsia-200 uppercase">Nível {level}</p>
             </div>
          </div>
          <div className="text-right">
             <div className="text-xs font-mono font-bold text-white">{formatTime(timeLeft)}</div>
          </div>
       </div>

       <div className="space-y-1">
          <Progress value={progress} className="h-2 bg-black/40" indicatorClassName="bg-gradient-to-r from-fuchsia-400 to-white" />
          <div className="flex justify-between text-[8px] font-bold uppercase text-fuchsia-300">
             <span>{(progress).toFixed(0)}% Completo</span>
             <span>Próx. Nível: Emotes</span>
          </div>
       </div>

       <div className="mt-3 flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          <div className="bg-black/20 rounded px-2 py-1 flex items-center gap-1 shrink-0 border border-white/5">
             <Gift size={10} className="text-fuchsia-300" />
             <span className="text-[9px] font-bold text-white">Ultimo: Joy (Sub)</span>
          </div>
          <div className="bg-black/20 rounded px-2 py-1 flex items-center gap-1 shrink-0 border border-white/5">
             <Star size={10} className="text-yellow-400" />
             <span className="text-[9px] font-bold text-white">Top: Marx (500 bits)</span>
          </div>
       </div>
    </div>
  );
}
