import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Gift, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const REDEMPTIONS = [
  { id: 1, user: 'Viewer1', reward: 'Highlight Message', cost: 100, status: 'Completed' },
  { id: 2, user: 'Viewer2', reward: 'Hydrate', cost: 500, status: 'Pending' },
  { id: 3, user: 'Viewer3', reward: 'Timeout User', cost: 1000, status: 'Completed' },
];

export function RedemptionHistory() {
  return (
    <Card className="bg-secondary/30 border-white/5 h-full">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Gift size={16} className="text-primary" /> Resgates de Pontos
          </CardTitle>
       </CardHeader>
       <CardContent>
          <ScrollArea className="h-[200px] pr-4">
             <div className="space-y-2">
                {REDEMPTIONS.map(r => (
                   <div key={r.id} className="flex items-center justify-between p-2 rounded-lg bg-black/20 border border-white/5">
                      <div>
                         <p className="text-xs font-bold text-slate-200">{r.reward}</p>
                         <p className="text-[9px] text-slate-500 uppercase">{r.user} • {r.cost} pts</p>
                      </div>
                      {r.status === 'Pending' ? (
                         <Button size="sm" className="h-6 text-[9px] bg-primary text-black hover:bg-primary/80">Concluir</Button>
                      ) : (
                         <CheckCircle2 size={16} className="text-green-500" />
                      )}
                   </div>
                ))}
             </div>
          </ScrollArea>
       </CardContent>
    </Card>
  );
}
