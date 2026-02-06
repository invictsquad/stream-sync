import React from 'react';
import { ScheduleManager } from '@/components/stream/ScheduleManager';

export default function Schedule() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Agenda</h1>
         <p className="text-muted-foreground">Mantenha seus seguidores informados sobre suas próximas lives.</p>
      </div>

      <ScheduleManager />
    </div>
  );
}
