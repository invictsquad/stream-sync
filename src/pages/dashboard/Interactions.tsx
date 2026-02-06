import React from 'react';
import { PollCreator } from '@/components/stream/PollCreator';
import { GoalConfig } from '@/components/stream/GoalConfig';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from 'lucide-react';

export default function Interactions() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Interações</h1>
         <p className="text-muted-foreground">Engaje sua comunidade com enquetes e metas.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
         <div className="space-y-8">
             <PollCreator />
             <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                   <CardTitle className="flex items-center gap-2 text-primary font-black italic uppercase"><Zap size={18}/> Dica Pro</CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-sm">Crie enquetes durante momentos de decisão no jogo para aumentar a retenção.</p>
                </CardContent>
             </Card>
         </div>
         <div>
            <GoalConfig />
         </div>
      </div>
    </div>
  );
}
