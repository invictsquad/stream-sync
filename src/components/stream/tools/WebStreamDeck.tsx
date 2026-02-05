import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, MicOff, Camera, Video, Monitor, Music, Volume2, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ACTIONS = [
  { id: 1, label: 'Mute Mic', icon: MicOff, color: 'bg-red-500/20 text-red-500 hover:bg-red-500 hover:text-white' },
  { id: 2, label: 'Scene: Game', icon: Monitor, color: 'bg-blue-500/20 text-blue-500 hover:bg-blue-500 hover:text-white' },
  { id: 3, label: 'Scene: Chat', icon: Camera, color: 'bg-green-500/20 text-green-500 hover:bg-green-500 hover:text-white' },
  { id: 4, label: 'Play Ad', icon: Video, color: 'bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500 hover:text-black' },
  { id: 5, label: 'Sound: Horn', icon: Volume2, color: 'bg-purple-500/20 text-purple-500 hover:bg-purple-500 hover:text-white' },
  { id: 6, label: 'SOS', icon: AlertCircle, color: 'bg-orange-500/20 text-orange-500 hover:bg-orange-500 hover:text-white' },
];

export function WebStreamDeck() {
  return (
    <Card className="bg-secondary/30 border-white/5 h-full">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Monitor size={16} className="text-primary" /> Stream Deck Web
          </CardTitle>
       </CardHeader>
       <CardContent className="grid grid-cols-3 gap-3">
          {ACTIONS.map(action => (
             <button
                key={action.id}
                className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-2 transition-all ${action.color} border border-white/5`}
             >
                <action.icon size={20} />
                <span className="text-[9px] font-black uppercase text-center leading-tight px-1">{action.label}</span>
             </button>
          ))}
       </CardContent>
    </Card>
  );
}
