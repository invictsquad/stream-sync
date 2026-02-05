import React, { useEffect, useState } from 'react';
import { Activity, Signal, Cpu } from 'lucide-react';

export function StreamHealthOverlay() {
  const [bitrate, setBitrate] = useState(6000);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
       setBitrate(prev => 5800 + Math.floor(Math.random() * 400));
       setFps(prev => 59 + Math.floor(Math.random() * 2));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/80 backdrop-blur-md p-2 rounded-lg flex items-center gap-4 border border-white/5 select-none">
       <div className="flex items-center gap-1.5">
          <Signal size={12} className={bitrate > 4000 ? "text-green-500" : "text-yellow-500"} />
          <div className="flex flex-col">
             <span className="text-[8px] font-black uppercase text-slate-500">Bitrate</span>
             <span className="text-[10px] font-mono font-bold text-white">{bitrate} Kbps</span>
          </div>
       </div>
       <div className="w-px h-6 bg-white/10" />
       <div className="flex items-center gap-1.5">
          <Cpu size={12} className="text-blue-500" />
          <div className="flex flex-col">
             <span className="text-[8px] font-black uppercase text-slate-500">FPS</span>
             <span className="text-[10px] font-mono font-bold text-white">{fps}</span>
          </div>
       </div>
       <div className="w-px h-6 bg-white/10" />
       <div className="bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded text-[9px] font-black uppercase">
          Excelente
       </div>
    </div>
  );
}
