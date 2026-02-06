import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreVertical } from 'lucide-react';

export function ScheduleList() {
  const events = [
    { day: "Hoje", time: "18:00", title: "Ranked Grind", game: "Valorant" },
    { day: "Quarta", time: "19:00", title: "Just Chatting", game: "IRL" },
    { day: "Sexta", time: "20:00", title: "Community Night", game: "Variety" },
  ];

  return (
    <div className="space-y-4">
        {events.map((evt, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-white/5 hover:border-primary/20 transition-all">
                <div className="bg-primary/10 text-primary p-3 rounded-lg text-center min-w-[70px]">
                    <div className="text-xs font-black uppercase italic">{evt.day}</div>
                    <div className="text-lg font-black">{evt.time}</div>
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-white uppercase italic">{evt.title}</h4>
                    <p className="text-xs text-slate-400 font-bold">{evt.game}</p>
                </div>
                <Button variant="ghost" size="icon" className="text-slate-500 hover:text-white"><MoreVertical size={16} /></Button>
            </div>
        ))}
    </div>
  );
}
