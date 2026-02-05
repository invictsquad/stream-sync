import React from 'react';
import { Calendar, Clock, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ScheduleEvent {
  id: number;
  title: string;
  date: string;
  time: string;
}

const MOCK_EVENTS: ScheduleEvent[] = [
  { id: 1, title: "Sessão de Ranked CS2", date: "2024-03-20", time: "18:00" },
  { id: 2, title: "React + Pizza", date: "2024-03-21", time: "20:00" },
  { id: 3, title: "Final do Campeonato", date: "2024-03-23", time: "14:00" }
];

export function ScheduleList() {
  const handleNotify = (title: string) => {
    toast.success("Lembrete definido!", {
      description: `Você será notificado antes de: ${title}`
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-black uppercase italic flex items-center gap-2 text-white mb-4">
        <Calendar size={16} className="text-primary" /> Próximas Transmissões
      </h3>

      <div className="grid gap-3">
        {MOCK_EVENTS.map(event => (
          <div key={event.id} className="flex items-center justify-between bg-secondary/30 border border-white/5 p-4 rounded-2xl hover:border-primary/30 transition-colors group">
            <div className="flex gap-4 items-center">
              <div className="flex flex-col items-center bg-black/40 p-2 rounded-xl border border-white/5 w-14">
                <span className="text-[10px] uppercase font-black text-slate-500">{event.date.split('-')[1]}</span>
                <span className="text-lg font-black italic text-white">{event.date.split('-')[2]}</span>
              </div>
              <div>
                <h4 className="text-sm font-black uppercase italic text-white group-hover:text-primary transition-colors">{event.title}</h4>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 mt-1">
                   <Clock size={12} /> {event.time}
                   <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded uppercase text-[8px]">Confirmado</span>
                </div>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="border-primary/20 hover:bg-primary hover:text-black font-black uppercase text-[10px] h-8 rounded-lg"
              onClick={() => handleNotify(event.title)}
            >
              <Bell size={12} className="mr-2" /> Lembrar
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
