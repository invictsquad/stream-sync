import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MoreVertical } from 'lucide-react';

export function ScheduleManager() {
  const events = [
    { day: "Segunda", time: "18:00", title: "Ranked Grind", game: "Valorant" },
    { day: "Quarta", time: "19:00", title: "Just Chatting", game: "IRL" },
    { day: "Sexta", time: "20:00", title: "Community Night", game: "Variety" },
  ];

  return (
    <Card className="bg-secondary/30 border-white/5">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-black italic uppercase text-white">Agenda Semanal</CardTitle>
        <Button variant="outline" size="sm">Novo Evento</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
            {events.map((evt, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded bg-black/20 border border-white/5">
                    <div className="bg-yellow-500/10 text-yellow-500 p-2 rounded text-center min-w-[60px]">
                        <div className="text-xs font-bold uppercase">{evt.day}</div>
                        <div className="text-sm font-black">{evt.time}</div>
                    </div>
                    <div className="flex-1">
                        <div className="font-bold text-white">{evt.title}</div>
                        <div className="text-xs text-zinc-400">{evt.game}</div>
                    </div>
                    <Button variant="ghost" size="icon"><MoreVertical size={16} /></Button>
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
