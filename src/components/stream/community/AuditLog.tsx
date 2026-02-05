import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShieldAlert, Ban, Clock, Trash2 } from 'lucide-react';

const LOGS = [
  { id: 1, mod: 'ClutchBot', action: 'Timeout (10s)', user: 'Spammer123', time: '10:42', icon: Clock, color: 'text-yellow-500' },
  { id: 2, mod: 'Admin_Elite', action: 'Ban Permanent', user: 'Troll_Master', time: '10:30', icon: Ban, color: 'text-red-500' },
  { id: 3, mod: 'Streamer', action: 'Delete Message', user: 'Viewer99', time: '09:15', icon: Trash2, color: 'text-slate-400' },
  { id: 4, mod: 'ClutchBot', action: 'Warning', user: 'Newbie', time: '08:00', icon: ShieldAlert, color: 'text-blue-500' },
];

export function AuditLog() {
  return (
    <Card className="bg-secondary/30 border-white/5 h-full">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <ShieldAlert size={16} className="text-primary" /> Log de Auditoria
          </CardTitle>
       </CardHeader>
       <CardContent>
          <ScrollArea className="h-[200px] pr-4">
             <div className="space-y-4">
                {LOGS.map(log => (
                   <div key={log.id} className="flex items-center justify-between text-xs bg-black/20 p-2 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3">
                         <log.icon size={14} className={log.color} />
                         <div>
                            <p className="font-bold text-slate-200">
                               <span className="text-primary">{log.mod}</span>: {log.action}
                            </p>
                            <p className="text-[10px] text-slate-500">Alvo: {log.user}</p>
                         </div>
                      </div>
                      <span className="text-[9px] font-mono text-slate-600">{log.time}</span>
                   </div>
                ))}
             </div>
          </ScrollArea>
       </CardContent>
    </Card>
  );
}
