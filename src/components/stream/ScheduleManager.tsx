import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, Plus, Trash2 } from 'lucide-react';
import { toast } from "sonner";

interface ScheduleEvent {
  id: number;
  title: string;
  date: string;
  time: string;
}

export function ScheduleManager() {
  const [events, setEvents] = useState<ScheduleEvent[]>([
    { id: 1, title: "Sessão de Ranked CS2", date: "2024-03-20", time: "18:00" },
    { id: 2, title: "React + Pizza", date: "2024-03-21", time: "20:00" }
  ]);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", time: "" });

  const addEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.time) return;
    setEvents([...events, { id: Date.now(), ...newEvent }]);
    setNewEvent({ title: "", date: "", time: "" });
    toast.success("Evento agendado!");
  };

  const removeEvent = (id: number) => {
    setEvents(events.filter(e => e.id !== id));
  };

  return (
    <Card className="bg-secondary/30 border border-white/5">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-black uppercase italic flex items-center gap-2 text-primary">
          <CalendarIcon size={16} /> Agenda de Lives
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
           <Input
             placeholder="Título da Live"
             value={newEvent.title}
             onChange={e => setNewEvent({...newEvent, title: e.target.value})}
             className="bg-background border-white/10 h-9 text-xs"
           />
           <Input
             type="date"
             value={newEvent.date}
             onChange={e => setNewEvent({...newEvent, date: e.target.value})}
             className="bg-background border-white/10 h-9 text-xs"
           />
           <div className="flex gap-2">
             <Input
               type="time"
               value={newEvent.time}
               onChange={e => setNewEvent({...newEvent, time: e.target.value})}
               className="bg-background border-white/10 h-9 text-xs"
             />
             <Button onClick={addEvent} size="icon" className="btn-gold h-9 w-9 shrink-0 rounded-lg">
               <Plus size={16} />
             </Button>
           </div>
        </div>

        <div className="space-y-2 mt-4">
          {events.map(event => (
            <div key={event.id} className="flex items-center justify-between bg-background p-3 rounded-xl border border-white/5">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <CalendarIcon size={14} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase italic">{event.title}</p>
                  <p className="text-[10px] text-slate-500 font-bold flex items-center gap-1">
                    {event.date} <span className="w-1 h-1 bg-slate-600 rounded-full"/> <Clock size={10} /> {event.time}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => removeEvent(event.id)} className="text-slate-500 hover:text-red-500 h-8 w-8">
                <Trash2 size={14} />
              </Button>
            </div>
          ))}
          {events.length === 0 && <p className="text-[10px] text-center text-slate-600 italic">Nenhum evento agendado.</p>}
        </div>
      </CardContent>
    </Card>
  );
}
