import React, { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { Target, Star } from 'lucide-react';

export function GoalProgressBar() {
  const [progress, setProgress] = useState(65);

  // Simulate progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 0.5;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/5 w-64 shadow-2xl">
      <div className="flex justify-between items-center mb-1 text-white">
        <span className="text-[10px] font-black uppercase italic tracking-wider flex items-center gap-1">
          <Target size={12} className="text-emerald-400" /> Novo Microfone
        </span>
        <span className="text-[10px] font-mono font-bold text-emerald-400">65%</span>
      </div>
      <div className="relative h-3 w-full bg-white/10 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between mt-1 text-[8px] font-black uppercase text-slate-400">
        <span>R$ 650</span>
        <span>R$ 1000</span>
      </div>
    </div>
  );
}
