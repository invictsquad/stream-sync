import React from 'react';
import { UserPlus, Heart, Zap, Repeat, Filter, Star, Gift } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const EVENTS = [
  { id: 1, type: 'sub', user: 'KillerQueen', message: 'Inscrito Tier 1', time: '2 min', icon: Star, color: 'text-yellow-400' },
  { id: 2, type: 'cheer', user: 'RichDude', message: 'Enviou 1000 Diamonds', time: '5 min', icon: Gift, color: 'text-fuchsia-400' },
  { id: 3, type: 'follow', user: 'Newbie123', message: 'Seguiu o canal', time: '12 min', icon: Heart, color: 'text-red-400' },
  { id: 4, type: 'follow', user: 'GamerX', message: 'Seguiu o canal', time: '15 min', icon: Heart, color: 'text-red-400' },
  { id: 5, type: 'sub', user: 'ProPlayer', message: 'Resub x5 meses', time: '1h', icon: Star, color: 'text-yellow-400' },
];

export function ActivityFeed() {
  return (
    <div className="bg-secondary/30 border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col h-[500px]">
      <div className="p-6 border-b border-white/5 flex items-center justify-between">
         <h2 className="text-sm text-primary uppercase font-black italic flex items-center gap-2">
            <Zap size={16} /> Activity Feed
         </h2>
         <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-white">
            <Filter size={14} />
         </Button>
      </div>

      <ScrollArea className="flex-1 p-4">
         <div className="space-y-3">
            {EVENTS.map((event) => (
               <div key={event.id} className="flex items-start gap-3 bg-black/20 p-3 rounded-xl border border-white/5 hover:border-primary/20 transition-all group">
                  <div className={`mt-1 bg-secondary/50 p-1.5 rounded-lg ${event.color}`}>
                     <event.icon size={12} />
                  </div>
                  <div className="flex-1 min-w-0">
                     <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-black uppercase italic text-white truncate">{event.user}</span>
                        <span className="text-[9px] font-mono text-slate-500">{event.time}</span>
                     </div>
                     <p className="text-[10px] text-slate-400 font-medium leading-tight">{event.message}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-primary">
                     <Repeat size={12} />
                  </Button>
               </div>
            ))}
         </div>
      </ScrollArea>
    </div>
  );
}
